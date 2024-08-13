import './globals.css'
import type { Metadata } from 'next'
import Sidebar from '../components/Sidebar'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Snake Breeding App',
  description: 'Manage your snake breeding activities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="text-center py-4 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold">Snake Breeding App</h1>
        </header>
        <div className="flex">
          <Header />
          <Sidebar />
          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  )
}
