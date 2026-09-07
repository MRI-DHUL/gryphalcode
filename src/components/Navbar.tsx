import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const primaryLinks = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
]

const resourceLinks = [
  ['/case-studies', 'Case Studies'],
  ['/blog', 'Blog'],
  ['/events', 'Events'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setResourcesOpen(false)
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
        setResourcesOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [open])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const closeMenu = () => {
    setOpen(false)
    setResourcesOpen(false)
  }

  return (
    <header className="navbar" ref={menuRef}>
      <NavLink className="brand" to="/" onClick={closeMenu} aria-label="GryphalCode home">
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
        {primaryLinks.map(([path, label]) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {label}
          </NavLink>
        ))}

        <div className={resourcesOpen ? 'nav-dropdown active' : 'nav-dropdown'}>
          <button
            className="nav-dropdown-trigger"
            type="button"
            onClick={() => setResourcesOpen((value) => !value)}
            aria-expanded={resourcesOpen}
            aria-controls="resources-menu"
          >
            Resources <ChevronDown size={15} aria-hidden="true" />
          </button>
          <div id="resources-menu" className="nav-dropdown-menu">
            {resourceLinks.map(([path, label]) => (
              <NavLink key={path} to={path} onClick={closeMenu}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink className="nav-cta" to="/contact" onClick={closeMenu}>
          Let's Talk <ArrowUpRight size={16} aria-hidden="true" />
        </NavLink>
      </nav>
    </header>
  )
}
