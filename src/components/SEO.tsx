import { useEffect } from 'react'

type SEOProps = {
  title: string
  description: string
  path: string
}

const SITE_NAME = 'GryphalCode'
const SITE_URL = 'https://gryphalcode.com'

export default function SEO({ title, description, path }: SEOProps) {
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
    updateMeta('property', 'og:title', title)
    updateMeta('property', 'og:description', description)
    updateMeta('property', 'og:url', url)
    updateMeta('property', 'og:site_name', SITE_NAME)
    updateMeta('name', 'twitter:title', title)
    updateMeta('name', 'twitter:description', description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, path])

  return null
}
