import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-red-800">
      <h1 className="text-6xl font-bold m-0">404</h1>
      <h2 className="text-2xl mt-0">Page Not Found</h2>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/home"
        className="mt-4 px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      >
        Go Home
      </a>
    </div>
  )
}
