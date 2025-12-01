import React from 'react'

export default function Loading() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-[var(--color-text)] transition-colors duration-300">
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-lg text-gray-700 dark:text-gray-300">Loading...</div>
    </div>
  </div>
  )
}
