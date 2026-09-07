import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Events() {
  return <div className="inner-page"><SEO title="Technology Events | GryphalCode" description="Find GryphalCode talks, workshops, community sessions, and technology events as the company establishes its event calendar." path="/events" /><section className="page-hero"><p className="eyebrow">EVENTS</p><h1>Meet us where<br /><span>technology gets practical.</span></h1><p>Talks, workshops, community sessions, and technology events from GryphalCode.</p></section><section className="section empty-state"><span>EVENTS</span><h2>Upcoming events will appear here once the GryphalCode event calendar is established.</h2><div className="empty-state-visual"><img src="/images/events-visual.svg" alt="Abstract technology event and presentation illustration" /></div><NavLink className="text-link" to="/contact">Get in touch <ArrowUpRight size={16} /></NavLink></section></div>
}
