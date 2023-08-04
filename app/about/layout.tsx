import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About · Anderson Reges',
  description: "That's my work",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='bg-primary'>
      {children}
    </main>
  )
}