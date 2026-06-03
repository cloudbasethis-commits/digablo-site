// Génère les assets de marque : image OpenGraph (1200x630) + apple-touch-icon (180x180).
// Lancer avec : node scripts/gen-assets.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, '..', 'public');
const brand = resolve(pub, 'brand');

// ---------- 1. Favicons depuis le logo de marque (public/brand/favicon-digablo.png) ----------
const faviconSrc = resolve(brand, 'favicon-digablo.png');
const iconSizes = [
  { size: 32, out: resolve(pub, 'favicon-32.png') },
  { size: 192, out: resolve(pub, 'favicon-192.png') },
  { size: 180, out: resolve(pub, 'apple-touch-icon.png') },
];
for (const { size, out } of iconSizes) {
  await sharp(faviconSrc).resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(out);
}
console.log('✓ favicon-32.png, favicon-192.png, apple-touch-icon.png');

// ---------- 2. Image OpenGraph (1200x630) ----------
const W = 1200;
const H = 630;

const bg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="18%" r="60%">
      <stop offset="0%" stop-color="#21a283" stop-opacity="0.35" />
      <stop offset="70%" stop-color="#0b0e13" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ff6f3c" />
      <stop offset="1" stop-color="#d4380c" />
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0b0e13" />
  <rect width="${W}" height="${H}" fill="url(#glow)" />
  <circle cx="${W - 120}" cy="120" r="220" fill="#d4380c" opacity="0.12" />
  <rect x="0" y="0" width="${W}" height="10" fill="url(#accent)" />
  <text x="${W / 2}" y="400" text-anchor="middle"
    font-family="'Segoe UI', Arial, sans-serif" font-size="40" font-weight="600" fill="#e6e9ef">
    Solutions digitales sur mesure
  </text>
  <text x="${W / 2}" y="460" text-anchor="middle"
    font-family="'Segoe UI', Arial, sans-serif" font-size="28" font-weight="400" fill="#828ea0">
    Logiciels · Apps · Sites web · Marketing · digabloPos
  </text>
</svg>`);

// Logo clair redimensionné
const logo = await sharp(resolve(brand, 'digablo-logo-light.png'))
  .resize({ width: 560 })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

await sharp(bg)
  .composite([
    {
      input: logo,
      top: Math.round(250 - logoMeta.height / 2),
      left: Math.round((W - logoMeta.width) / 2),
    },
  ])
  .png()
  .toFile(resolve(brand, 'og-default.png'));
console.log('✓ brand/og-default.png');
