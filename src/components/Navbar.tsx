import { useState } from 'react'
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

  return (
    <header className="navbar">
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
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
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
          Let's Talk <ArrowUpRight size={16} />
        </NavLink>
      </nav>
    </header>
  )
}
