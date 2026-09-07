import { useEffect } from 'react'

type SEOProps = {
  title: string
  description: string
  path: string
  noindex?: boolean
}

const SITE_NAME = 'GryphalCode'
const SITE_URL = 'https://gryphalcode.com'
const OG_IMAGE = `${SITE_URL}/images/hero-visual.svg`

export default function SEO({ title, description, path, noindex = false }: SEOProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    document.title = title

    const updateMeta = (attribute: 'name' | 'property', key: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }
      element.content = value
    }

    updateMeta('name', 'description', description)
    updateMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    updateMeta('property', 'og:type', 'website')
    updateMeta('property', 'og:title', title)
    updateMeta('property', 'og:description', description)
    updateMeta('property', 'og:url', url)
    updateMeta('property', 'og:site_name', SITE_NAME)
    updateMeta('property', 'og:image', OG_IMAGE)
    updateMeta('property', 'og:image:alt', 'GryphalCode software engineering and technology services')
    updateMeta('property', 'og:image:type', 'image/svg+xml')
    updateMeta('name', 'twitter:card', 'summary_large_image')
    updateMeta('name', 'twitter:title', title)
    updateMeta('name', 'twitter:description', description)
    updateMeta('name', 'twitter:image', OG_IMAGE)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    const schemaId = 'gryphalcode-page-schema'
    let schema = document.getElementById(schemaId)
    if (!schema) {
      schema = document.createElement('script')
      schema.id = schemaId
      schema.setAttribute('type', 'application/ld+json')
      document.head.appendChild(schema)
    }

    const segments = path.split('/').filter(Boolean)
    const breadcrumbs = [
      { '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
      ...segments.map((segment, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()),
        item: `${SITE_URL}/${segments.slice(0, index + 1).join('/')}`,
      })),
    ]

    schema.textContent = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: `${SITE_URL}/`,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs,
      },
    ])
  }, [title, description, path, noindex])

  return null
}
