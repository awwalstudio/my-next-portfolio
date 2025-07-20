
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-center">
      {/* Navigation Bar */}
      <nav className="bg-white shadow p-4 flex gap-4 justify-center">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio 🚀</h1>
        <p className="text-lg text-gray-600">Built with Next.js and Tailwind CSS</p>
      </div>
    </main>
  )
}
