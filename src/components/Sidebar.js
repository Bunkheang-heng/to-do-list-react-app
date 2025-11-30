import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaTasks, FaCog, FaUser } from 'react-icons/fa'

const menuItems = [
  { path: '/home', label: 'Home', icon: <FaHome /> },
  { path: '/task', label: 'Tasks', icon: <FaTasks /> },
  { path: '/profile', label: 'Profile', icon: <FaUser /> },
  { path: '/setting', label: 'Settings', icon: <FaCog /> }
]

export default function Sidebar() {
  return (
    <div
      className="
        border border-[var(--color-bg-alt)]
        bg-[var(--color-box-bg)]
        text-[var(--color-text)]
        py-4 px-3
        rounded-[200px]
        m-5
        shadow-sm
        transition-colors duration-300
      "
    >
      <nav>
        <ul className="flex flex-row gap-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3 px-4 py-2 rounded-[200px] w-full
                  transition-colors duration-300

                  ${
                    isActive
                      ? 'bg-[var(--color-bg-alt)] text-[var(--color-accent)] font-semibold'
                      : 'text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]'
                  }
                  `
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
