# Empauma Conciergerie

Site web de la conciergerie **Empauma** — gestion de locations saisonnières en Provence-Alpes-Côte d'Azur.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- CSS global (variables CSS personnalisées, animations, responsive)

## Démarrage local

```bash
# 1. Installer Node.js 18+ depuis https://nodejs.org

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
```

Le site est accessible sur **http://localhost:3000**

## Structure

```
empauma-site/
├── app/
│   ├── globals.css      ← styles globaux
│   ├── layout.tsx       ← layout racine (métadonnées, polices)
│   └── page.tsx         ← page principale
├── components/
│   ├── Navbar.tsx       ← navigation (sticky, menu mobile)
│   ├── Hero.tsx         ← section héro
│   ├── Services.tsx     ← grille des services
│   ├── Offer.tsx        ← offre tarifaire
│   ├── Metrics.tsx      ← chiffres clés
│   ├── Properties.tsx   ← logements
│   ├── Testimonials.tsx ← avis propriétaires
│   ├── About.tsx        ← histoire de la conciergerie
│   ├── Contact.tsx      ← formulaire de contact
│   ├── FAQ.tsx          ← questions fréquentes (accordéon)
│   ├── Footer.tsx       ← pied de page
│   └── ScrollReveal.tsx ← animations au défilement
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Déploiement

### Vercel (recommandé — détection automatique Next.js)
1. Pousser ce dépôt sur GitHub
2. Aller sur [vercel.com](https://vercel.com) → **New Project**
3. Connecter le dépôt GitHub → **Deploy**

### Netlify
1. Pousser ce dépôt sur GitHub
2. Connecter sur [netlify.com](https://netlify.com)
3. Le fichier `netlify.toml` est déjà configuré

### Render.com
1. Pousser ce dépôt sur GitHub
2. Connecter sur [render.com](https://render.com)
3. Le fichier `render.yaml` est déjà configuré

## Contact

**Raphaël Valverde** — contact@empauma-conciergerie.fr — 06 66 73 85 07
