import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Events() {
  return <div className="inner-page"><section className="page-hero"><p className="eyebrow">EVENTS</p><h1>Meet us where<br /><span>technology gets practical.</span></h1><p>Talks, workshops, community sessions, and technology events from GryphalCode.</p></section><section className="section empty-state"><span>EVENTS</span><h2>Upcoming events will appear here once the GryphalCode event calendar is established.</h2><NavLink className="text-link" to="/contact">Get in touch <ArrowUpRight size={16} /></NavLink></section></div>
}
