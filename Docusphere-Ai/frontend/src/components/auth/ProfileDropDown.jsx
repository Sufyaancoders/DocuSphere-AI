import React, { useRef, useState, useEffect } from "react"
import { VscChevronDown } from "react-icons/vsc"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
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
    <button className="relative" onClick={() => setOpen(true)} ref={ref}>
      <div className="flex items-center gap-x-1">
        <img
          src={
            user?.Image
              ? user.Image
              : user?.firstName
              ? `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`
              : "/default-avatar.png"
          }
          alt={`profile-${user?.firstName || "user"}`}
          className="aspect-square w-[30px] rounded-full object-cover"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "/default-avatar.png"
          }}
        />
        <VscChevronDown className="text-sm text-black" />
      </div>

      {open && (
        <div className="absolute top-[118%] right-0 z-[1000] divide-y divide-gray-700 overflow-hidden rounded-md border border-gray-700 bg-gray-800 shadow-lg">
          <Link to="/dashboard" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-2 py-2.5 px-4 text-sm text-gray-200 hover:bg-gray-700 transition-colors duration-200">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>

          <div
            onClick={() => {
              localStorage.removeItem("token")
              localStorage.removeItem("user")
              window.dispatchEvent(new Event("tokenChanged"))
              navigate("/")
              setOpen(false)
            }}
            className="flex w-full cursor-pointer items-center gap-x-2 py-2.5 px-4 text-sm text-gray-200 hover:bg-gray-700 transition-colors duration-200"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  )
}