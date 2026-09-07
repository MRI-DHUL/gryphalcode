import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <NavLink className="brand footer-brand" to="/" aria-label="GryphalCode home">
          <span className="brand-mark">G</span>
          <span>Gryphal<span>Code</span></span>
        </NavLink>
        <p className="footer-note">Software engineering and technology services for businesses ready to build better.</p>
      </div>
      <div className="footer-links">
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/case-studies">Case Studies</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact <ArrowUpRight size={14} /></NavLink>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} GryphalCode. All rights reserved.</p>
    </footer>
  )
}
