import fs from 'node:fs/promises'
import path from 'node:path'

const distDir = path.join(process.cwd(), 'dist')

async function findHtmlFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...await findHtmlFiles(fullPath))
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath)
    }
  }

  return files
}

const htmlFiles = await findHtmlFiles(distDir)

for (const file of htmlFiles) {
  const original = await fs.readFile(file, 'utf8')
  const cleaned = original
    .replace(/<script type="module">import \{ injectIntoGlobalHook \} from "\/\\@react-refresh";[\s\S]*?<\/script>\s*/i, '')
    .replace(/\s*<script type="module" src="\/\\@vite\/client"><\/script>\s*/i, '')

  if (cleaned !== original) {
    await fs.writeFile(file, cleaned)
  }
}

console.log(`Cleaned development-only Vite scripts from ${htmlFiles.length} prerendered HTML files.`)
