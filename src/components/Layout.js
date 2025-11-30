import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import FooterNav from './FooterNav'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-accent)]">
      <Sidebar />
      <main className="flex-1 px-4 py-6 md:px-8 bg-[var(--color-accent)]">
        <Outlet />
      </main>
      <FooterNav />
    </div>
  )
}

