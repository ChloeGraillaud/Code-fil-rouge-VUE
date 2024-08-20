import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname is not available in ES6 modules, so we need to construct it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  // Définir les liens de votre sitemap
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/apropos', changefreq: 'yearly', priority: 0.3 },
    { url: '/tarifs', changefreq: 'monthly', priority: 0.5 },
    { url: '/galerie', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'yearly', priority: 0.3 },
  ];

  // Chemin du fichier sitemap.xml
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

  // Créer un flux de sitemap
  const stream = new SitemapStream({ hostname: 'https://code-fil-rouge-vue.vercel.app/' });

  // Écrire les liens dans le flux
  links.forEach(link => stream.write(link));
  stream.end();

  // Convertir le flux en promesse
  try {
    const sitemap = await streamToPromise(stream);
    fs.writeFileSync(sitemapPath, sitemap.toString());
    console.log('Sitemap généré avec succès!');
  } catch (err) {
    console.error('Erreur lors de la génération du sitemap:', err);
  }
}

generateSitemap();






