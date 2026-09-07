import { useEffect } from 'react'
import { ArrowUpRight, Clock3, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import SEO from '../components/SEO'

const address = '12/26, LakshmiPuram, Ganapathy, Coimbatore, Tamil Nadu - 641006, India'
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=12%2F26%2C%20LakshmiPuram%2C%20Ganapathy%2C%20Coimbatore%2C%20Tamil%20Nadu%20641006%2C%20India'

export default function Contact() {
  useEffect(() => {
    const schemaId = 'gryphalcode-local-business-schema'
    let schema = document.getElementById(schemaId)

    if (!schema) {
      schema = document.createElement('script')
      schema.id = schemaId
      schema.setAttribute('type', 'application/ld+json')
      document.head.appendChild(schema)
    }

    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'GryphalCode',
      url: 'https://gryphalcode.com/contact',
      email: 'info@gryphalcode.com',
      telephone: '+91 80722-80620',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '12/26, LakshmiPuram, Ganapathy',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
        postalCode: '641006',
        addressCountry: 'IN',
      },
      openingHours: 'Mo-Fr 10:00-19:00',
      areaServed: 'Worldwide',
    })

    return () => schema?.remove()
  }, [])

  return (
    <div className="inner-page">
      <SEO
        title="Contact GryphalCode | Software Company in Coimbatore"
        description="Contact GryphalCode in Coimbatore for software development, web, mobile, cloud, backend, automation, and technical consulting projects."
        path="/contact"
      />
      <section className="page-hero">
        <p className="eyebrow">CONTACT GRYPHALCODE</p>
        <h1>Let's discuss your<br /><span>next project.</span></h1>
        <p>Tell us what you are building, improving, or trying to solve. We will start with the problem and work from there.</p>
      </section>
      <section className="page-visual">
        <img src="/images/contact-visual.svg" alt="Abstract GryphalCode partnership network connecting businesses through technology" />
      </section>
      <section className="section contact-grid">
        <div>
          <span className="contact-label">EMAIL</span>
          <a className="contact-method" href="mailto:info@gryphalcode.com">
            <Mail size={20} /> info@gryphalcode.com <ArrowUpRight size={17} />
          </a>
        </div>
        <div>
          <span className="contact-label">PHONE</span>
          <a className="contact-method" href="tel:+918072280620">
            <Phone size={20} /> +91 80722-80620 <ArrowUpRight size={17} />
          </a>
        </div>
        <div>
          <span className="contact-label">OFFICE</span>
          <div className="contact-method muted">
            <MapPin size={20} /> Coimbatore, Tamil Nadu
          </div>
          <p>{address}</p>
          <a className="text-link" href={mapUrl} target="_blank" rel="noreferrer">
            Get directions <ArrowUpRight size={15} />
          </a>
        </div>
        <div>
          <span className="contact-label">BUSINESS HOURS</span>
          <div className="contact-method muted">
            <Clock3 size={20} /> Monday - Friday, 10:00 AM - 7:00 PM
          </div>
          <div className="contact-method muted">
            <MessageSquare size={20} /> Project discussions by email or phone
          </div>
        </div>
      </section>
      <section className="section contact-note">
        <h2>Useful first message</h2>
        <p>Include your business context, the problem you want to solve, what you already have, and any important timeline or constraints. You do not need a polished specification.</p>
      </section>
    </div>
  )
}
