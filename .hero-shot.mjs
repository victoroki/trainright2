import puppeteer from 'puppeteer-core'

const OUT = 'C:/Users/Admin/AppData/Local/Temp/opencode/shots'
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: true,
  args: ['--no-sandbox'],
})
const page = await browser.newPage()

await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4176/', { waitUntil: 'networkidle0', timeout: 60000 })
await new Promise((r) => setTimeout(r, 800))
const hero = await page.$('main section')
await hero.screenshot({ path: `${OUT}/hero-slant-desktop.png` })
console.log('shot hero-slant-desktop')

await page.setViewport({ width: 390, height: 844 })
await page.goto('http://localhost:4176/', { waitUntil: 'networkidle0', timeout: 60000 })
await new Promise((r) => setTimeout(r, 800))
const heroM = await page.$('main section')
await heroM.screenshot({ path: `${OUT}/hero-slant-mobile.png` })
console.log('shot hero-slant-mobile')

await browser.close()
console.log('done')
