# syntax=docker/dockerfile:1

# Multi-stage build for the React Router v7 (SSR) app.
# Final image runs `react-router-serve` with only production dependencies.

# ---- Base ----------------------------------------------------------------
FROM node:22-slim AS base
WORKDIR /app
# Let Corepack/npm run as-is; keep image lean.
ENV CI=true

# ---- Install ALL deps (needed to build) ----------------------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Build the app -------------------------------------------------------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Install PRODUCTION deps only ----------------------------------------
FROM base AS prod-deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# ---- Runtime image -------------------------------------------------------
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000
# GITHUB_TOKEN is provided at runtime (compose / host env), never baked in.

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY package.json ./

# Run as the unprivileged user that ships with the node image.
USER node

EXPOSE 3000
CMD ["npm", "start"]
