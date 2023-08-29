import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects · Anderson Reges',
  description: "That's my experience",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}