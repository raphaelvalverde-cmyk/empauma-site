/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // génère un dossier out/ avec du HTML/CSS/JS pur
  images: { unoptimized: true }, // nécessaire pour l'export statique
}

module.exports = nextConfig
