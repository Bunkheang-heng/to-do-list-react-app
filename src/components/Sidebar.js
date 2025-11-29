import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaTasks, FaCog, FaUser } from 'react-icons/fa'

const menuItems = [
    { path: '/home', label: 'Home', icon: <FaHome /> },
    { path: '/task', label: 'Tasks', icon: <FaTasks /> },
    { path: '/setting', label: 'Settings', icon: <FaCog /> },
    { path: '/profile', label: 'Profile', icon: <FaUser /> }
]

export default function Sidebar() {
  return (
    <div className="border-r border-gray-200 py-4 px-3 bg-gray-300 border-solid rounded-[200px] m-5">
      <nav >
        <ul className="flex flex-row gap-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 transition rounded-[200px] w-full ${
                    isActive ? 'bg-gray-200  rounded-[200px] font-semibold text-orange-500' : 'text-gray-800'
                  }`
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
