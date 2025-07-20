'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>

      {!submitted ? (
        <form
          action="https://formspree.io/f/xvgqzqaw"  // <- replace with your form URL
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="w-full max-w-md space-y-4"
        >
          <input type="text" name="name" required placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded" />
          <input type="email" name="email" required placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded" />
          <textarea name="message" required placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded h-32" />
          <button type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Send
          </button>
        </form>
      ) : (
        <p className="text-green-600 text-xl">Thanks for reaching out! ✅</p>
      )}
    </main>
  )
}
