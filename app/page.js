
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-center">
      {/* Navigation */}
      <nav className="bg-white shadow p-4 flex gap-4 justify-center">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio 🚀</h1>
        <p className="text-lg text-gray-600">Built with Next.js and Tailwind CSS</p>
      </div>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project 1 */}
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-600 mb-4">A personal site built with Next.js and Tailwind, deployed on Vercel.</p>
            <a href="https://my-next-portfolio-murex-eta.vercel.app" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Live</a>
          </div>

          {/* Add more projects here */}
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
    
    {/* Project 1 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">My Next.js Portfolio</h3>
      <p className="text-gray-600 mb-4">
        A personal portfolio website built with Next.js, Tailwind CSS, and deployed on Vercel.
      </p>
      <a
        href="https://github.com/awwalstudio/my-next-portfolio"
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        🔗 View on GitHub
      </a>
    </div>

    {/* Add more project cards here */}
  </div>
</section>

    </main>
  )
}
