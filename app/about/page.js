export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
      <p className="text-lg text-gray-600 max-w-xl text-center">
        I’m a passionate developer learning GitHub, Vercel, Next.js, and Tailwind to build awesome things on the web!
      </p>

      <a
  href="/Awwal Mukhzar Resume.pdf"
  download
  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
>
  📄 Download Resume
</a>

<a
  href="https://www.linkedin.com/in/awwal-mukhzar-1b5231192/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition ml-4"
>
  🔗 Connect on LinkedIn
</a>

    </main>
  )
}
