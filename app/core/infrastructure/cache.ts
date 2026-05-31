/**
 * Wrap a zero-argument async factory with an in-memory TTL cache plus in-flight
 * de-duplication, using a stale-while-revalidate strategy:
 *
 * - within the TTL, the cached value is returned immediately;
 * - once stale, the cached value is still served while a single background
 *   refresh runs (concurrent callers share that one refresh, never stampede);
 * - only the very first (cold) call awaits the initial fetch.
 *
 * It lives in the server process, so it helps under SSR — exactly where the
 * per-request GitHub fetch would otherwise risk hitting rate limits.
 */
export function withTtlCache<T>(
  factory: () => Promise<T>,
  ttlMs: number,
): () => Promise<T> {
  let cached: { value: T; expiresAt: number } | null = null;
  let inFlight: Promise<T> | null = null;

  const refresh = (): Promise<T> => {
    if (!inFlight) {
      inFlight = factory()
        .then((value) => {
          cached = { value, expiresAt: Date.now() + ttlMs };
          return value;
        })
        .finally(() => {
          inFlight = null;
        });
    }
    return inFlight;
  };

  return () => {
    if (cached) {
      // Stale → kick off a background refresh but keep serving the cached value.
      if (Date.now() >= cached.expiresAt) refresh().catch(() => {});
      return Promise.resolve(cached.value);
    }
    return refresh();
  };
}
