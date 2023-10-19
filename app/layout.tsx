import './globals.css'

export const metadata = {
  title: 'Getting Started with Solid',
  description: 'Learn to build Solid Apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
