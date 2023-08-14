import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects · Anderson Reges',
  description: "That's my work",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='text-second bg-primary'>
      {children}
    </main>
  )
}