import React from 'react'
import notFoundGif from '../assets/image/gif/notfound.gif'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-red-800">
      <img src={notFoundGif} alt="Not found" className="w-64 h-64 mb-6 object-contain" />
      <h2 className="text-2xl mt-0">Page Not Found</h2>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/home"
        className="mt-4 px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Go Home
      </a>
    </div>
  )
}
