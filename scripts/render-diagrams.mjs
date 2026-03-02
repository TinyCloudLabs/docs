import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, basename, extname } from 'node:path'
import { renderMermaidSVG } from 'beautiful-mermaid'

const DIAGRAMS_DIR = new URL('../diagrams', import.meta.url).pathname
const OUTPUT_DIR = new URL('../images/diagrams', import.meta.url).pathname

const options = {
  bg: '#FFFFFF',
  fg: '#27272A',
  accent: '#2563EB',
  font: 'Inter',
  padding: 40,
}

const files = (await readdir(DIAGRAMS_DIR)).filter(f => extname(f) === '.mmd')

console.log(`Rendering ${files.length} diagrams...`)

for (const file of files) {
  const name = basename(file, '.mmd')
  const source = await readFile(join(DIAGRAMS_DIR, file), 'utf-8')
  try {
    const svg = renderMermaidSVG(source.trim(), options)
    const outPath = join(OUTPUT_DIR, `${name}.svg`)
    await writeFile(outPath, svg)
    console.log(`  ${name}.svg`)
  } catch (err) {
    console.error(`  ERROR ${name}: ${err.message}`)
  }
}

console.log('Done.')
