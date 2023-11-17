import Nav from './components/nav'
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
    <html lang="en" className="bg-primary-50">
      <body className="bg-transparent">
        <main>
          <header className="fixed top-0 w-full">
            <div className="bg-primary-800 shadow-lg border-dashed border-2 border-primary-100 border-x-transparent border-t-transparent">
              <div className="flex text-primary-300">
                <span className="flex pl-10 font-extrabold text-8xl tracking-tighter items-end">
                  Solid
                </span>
                <span className="flex text-8xl tracking-tight font-extralight items-end">
                  DeveloperGroup
                </span>
              </div>
            </div>
            <Nav></Nav>
          </header>
          <div className="mt-48">{children}</div>
        </main>
      </body>
    </html>
  )
}
