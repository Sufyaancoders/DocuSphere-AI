import React, { useRef, useState, useEffect } from "react"
import { VscChevronDown, VscDashboard, VscSignOut, VscMenu } from "react-icons/vsc"
import { Link, useNavigate } from "react-router-dom"
import useOnClickOutside from "../../hooks/useOnClickOutside"

export default function ProfileDropdown() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Check for token validity (simple presence check)
  const token = localStorage.getItem("token")
  const isTokenValid = !!token

  // Get user from localStorage (or set default)
  let user = null
  try {
    user = JSON.parse(localStorage.getItem("user"))
  } catch {
    user = null
  }

  useOnClickOutside(ref, () => setOpen(false))

  // Close dropdown when changing routes
  useEffect(() => {
    return () => {
      setOpen(false)
    }
  }, [navigate])

  if (!isTokenValid) {
    // Optionally, you can redirect or just hide the dropdown
    return null
  }

  return (
    <div className="relative" ref={ref}>
      <button
        className={`flex items-center gap-2 px-2 py-1 rounded-full border border-gray-200 bg-black/40 backdrop-blur-xl transition-all duration-200 focus:outline-none group shadow-none`}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <img
          src={
            user?.Image
              ? user.Image
              : user?.firstName
              ? `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`
              : "/default-avatar.png"
          }
          alt={`profile-${user?.firstName || "user"}`}
          className="aspect-square w-8 h-8 rounded-full object-cover border border-gray-200"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "/default-avatar.png"
          }}
        />
        <VscChevronDown
          className={`ml-1 text-lg text-black transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 mt-2 min-w-[180px] z-[1000] rounded-xl border border-gray-200 bg-white/50 backdrop-blur-xl shadow-none overflow-hidden transition-all duration-200 origin-top-right ${open ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"}`}
      >
        <Link to="/dashboard" onClick={() => setOpen(false)}>
          <div className="flex items-center gap-3 px-5 py-3 text-base font-medium text-black hover:text-cyan-400 transition-colors duration-150 cursor-pointer group relative">
            <VscDashboard className="text-xl text-cyan-400 group-hover:text-cyan-600 transition-colors duration-150" />
            <span className="relative">
              Dashboard
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </span>
          </div>
        </Link>
        <div className="border-t border-gray-100" />
        <div
          onClick={() => {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            window.dispatchEvent(new Event("tokenChanged"))
            navigate("/")
            setOpen(false)
          }}
          className="flex items-center gap-3 px-5 py-3 text-base font-medium text-black hover:text-cyan-400 transition-colors duration-150 cursor-pointer group relative"
        >
          <VscSignOut className="text-xl text-cyan-400 group-hover:text-red-500 transition-colors duration-150" />
          <span className="relative">
            Logout
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </span>
        </div>
      </div>
    </div>
  )
}