import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/case-studies', 'Case Studies'],
  ['/blog', 'Blog'],
  ['/events', 'Events'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [open])

  return (
    <header className="navbar" ref={menuRef}>
      <NavLink className="brand" to="/" onClick={() => setOpen(false)} aria-label="GryphalCode home">
        <span className="brand-mark">G</span>
        <span>Gryphal<span>Code</span></span>
      </NavLink>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      <nav id="primary-navigation" className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {links.map(([path, label]) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {label}
          </NavLink>
        ))}
        <NavLink className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
          Let's Talk <ArrowUpRight size={16} aria-hidden="true" />
        </NavLink>
      </nav>
    </header>
  )
}
