import fs from 'node:fs/promises'
import path from 'node:path'
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const templatePath = path.join(distDir, 'index.html')
const OG_IMAGE = 'https://gryphalcode.com/images/hero-visual.svg'

const pages = {
  '/': {
    title: 'GryphalCode | Software Development Company in Coimbatore',
    description: 'GryphalCode provides custom software development, web development, mobile app development, cloud, backend, modernization, and technical consulting services for businesses.',
  },
  '/about': {
    title: 'About GryphalCode | Software Engineering Company',
    description: 'Learn about GryphalCode, a software engineering company focused on practical digital solutions, custom software, web development, cloud systems, and reliable technology delivery.',
  },
  '/services': {
    title: 'Software Development Services | GryphalCode',
    description: 'Explore GryphalCode software development services including custom software, web development, mobile applications, cloud and backend engineering, modernization, and technical consulting.',
  },
  '/services/software-development': {
    title: 'Custom Software Development Company | GryphalCode',
    description: 'GryphalCode builds custom software, business applications, internal platforms, workflow systems, APIs, and integrations designed around real business requirements.',
  },
  '/services/web-development': {
    title: 'Web Development Company | GryphalCode',
    description: 'GryphalCode delivers responsive websites, customer portals, dashboards, and web applications focused on performance, accessibility, technical SEO, and business goals.',
  },
  '/services/mobile-applications': {
    title: 'Mobile App Development Company | GryphalCode',
    description: 'GryphalCode develops reliable mobile applications for iOS and Android with practical product architecture, API integration, and production-ready engineering.',
  },
  '/services/cloud-backend': {
    title: 'Cloud & Backend Development Services | GryphalCode',
    description: 'GryphalCode builds secure APIs, backend services, databases, integrations, cloud infrastructure, deployment pipelines, and scalable production systems.',
  },
  '/services/software-modernization': {
    title: 'Software Modernization Services | GryphalCode',
    description: 'GryphalCode helps businesses modernize legacy software through architecture assessment, incremental migration, performance improvements, and maintainability-focused engineering.',
  },
  '/services/technical-consulting': {
    title: 'Technical Consulting Services | GryphalCode',
    description: 'GryphalCode provides software architecture reviews, technology selection, technical assessments, delivery planning, roadmaps, and engineering guidance.',
  },
  '/case-studies': {
    title: 'Software Development Case Studies | GryphalCode',
    description: 'Explore GryphalCode software development case studies covering business challenges, engineering approaches, technical decisions, and measurable outcomes as approved projects are published.',
  },
  '/blog': {
    title: 'Software Engineering Blog | GryphalCode',
    description: 'Read practical GryphalCode insights on software engineering, web development, cloud architecture, APIs, security, performance, and technology strategy.',
  },
  '/events': {
    title: 'Technology Events & Workshops | GryphalCode',
    description: 'Find GryphalCode technology events, software engineering talks, workshops, developer sessions, and community activities as the event calendar develops.',
  },
  '/contact': {
    title: 'Contact GryphalCode | Software Development Company in Coimbatore',
    description: 'Contact GryphalCode in Coimbatore for custom software development, web development, mobile applications, cloud, backend, modernization, and technical consulting projects.',
  },
}

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function upsertMeta(html, attribute, key, content) {
  const escaped = escapeHtml(content)
  const tag = `<meta ${attribute}="${key}" content="${escaped}">`
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*/?>`, 'i')
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `  ${tag}\n  </head>`)
}

function applyMetadata(html, route, metadata) {
  const canonical = `https://gryphalcode.com${route}`
  let output = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(metadata.title)}</title>`)
  output = upsertMeta(output, 'name', 'description', metadata.description)
  output = upsertMeta(output, 'name', 'robots', 'index, follow')
  output = upsertMeta(output, 'property', 'og:type', 'website')
  output = upsertMeta(output, 'property', 'og:title', metadata.title)
  output = upsertMeta(output, 'property', 'og:description', metadata.description)
  output = upsertMeta(output, 'property', 'og:url', canonical)
  output = upsertMeta(output, 'property', 'og:site_name', 'GryphalCode')
  output = upsertMeta(output, 'property', 'og:image', OG_IMAGE)
  output = upsertMeta(output, 'property', 'og:image:alt', 'GryphalCode software engineering and technology services')
  output = upsertMeta(output, 'property', 'og:image:type', 'image/svg+xml')
  output = upsertMeta(output, 'property', 'og:image:width', '1200')
  output = upsertMeta(output, 'property', 'og:image:height', '630')
  output = upsertMeta(output, 'name', 'twitter:card', 'summary_large_image')
  output = upsertMeta(output, 'name', 'twitter:title', metadata.title)
  output = upsertMeta(output, 'name', 'twitter:description', metadata.description)
  output = upsertMeta(output, 'name', 'twitter:image', OG_IMAGE)

  const canonicalTag = `<link rel="canonical" href="${canonical}">`
  const canonicalPattern = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?/i
  output = canonicalPattern.test(output)
    ? output.replace(canonicalPattern, canonicalTag.slice(0, -1))
    : output.replace('</head>', `  ${canonicalTag}\n  </head>`)

  return output
}

const template = await fs.readFile(templatePath, 'utf8')
const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { default: AppRoutes } = await vite.ssrLoadModule('/src/AppRoutes.tsx')

  for (const [route, metadata] of Object.entries(pages)) {
    const appHtml = renderToString(
      React.createElement(StaticRouter, { location: route }, React.createElement(AppRoutes)),
    )
    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    html = applyMetadata(html, route, metadata)
    html = await vite.transformIndexHtml(route, html)

    const outputDir = route === '/' ? distDir : path.join(distDir, route.slice(1))
    await fs.mkdir(outputDir, { recursive: true })
    await fs.writeFile(path.join(outputDir, 'index.html'), html)
  }

  const notFoundHtml = renderToString(
    React.createElement(StaticRouter, { location: '/missing-page' }, React.createElement(AppRoutes)),
  )
  let errorPage = template.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`)
  errorPage = applyMetadata(errorPage, '/404', {
    title: 'Page Not Found | GryphalCode',
    description: 'The page you are looking for could not be found. Return to GryphalCode or explore our services.',
  })
  errorPage = errorPage.replace(/<meta name="robots" content="[^"]*">/i, '<meta name="robots" content="noindex, follow">')
  errorPage = await vite.transformIndexHtml('/404', errorPage)
  await fs.writeFile(path.join(distDir, '404.html'), errorPage)
} finally {
  await vite.close()
}

console.log(`Pre-rendered ${Object.keys(pages).length} public routes plus 404.html.`)
