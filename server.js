const express = require('express');
const path    = require('path');
const helmet  = require('helmet');
const compression = require('compression');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ── Sécurité ── */
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc:  ["'self'", "'unsafe-inline'"],
        styleSrc:   ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc:    ["'self'", "https://fonts.gstatic.com"],
        imgSrc:     ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https://formsubmit.co"],
        frameSrc:   ["'none'"],
      },
    },
  })
);

/* ── Compression gzip ── */
app.use(compression());

/* ── Fichiers statiques (index.html, robots.txt, sitemap.xml…) ── */
app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: '7d',          // cache navigateur 7 jours
    etag:   true,
    index:  'index.html',
  })
);

/* ── Route catch-all : renvoi vers index.html (SPA-ready) ── */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* ── Démarrage ── */
app.listen(PORT, () => {
  console.log(`\n✦ Empauma Conciergerie`);
  console.log(`  Serveur démarré → http://localhost:${PORT}\n`);
});
