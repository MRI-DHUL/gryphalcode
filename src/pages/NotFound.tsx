import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="inner-page">
      <SEO
        title="Page Not Found | GryphalCode"
        description="The page you are looking for could not be found. Return to GryphalCode or explore our services."
        path="/404"
      />
      <section className="page-hero">
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1>This page doesn't<br /><span>exist here.</span></h1>
        <p>The address may be incorrect, or the page may have moved.</p>
        <NavLink className="primary-button" to="/">Back to GryphalCode <ArrowUpRight size={17} /></NavLink>
      </section>
    </div>
  )
}
