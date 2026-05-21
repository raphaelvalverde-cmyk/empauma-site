# Empauma Conciergerie

Site web de la conciergerie **Empauma** — gestion de locations saisonnières en Provence-Alpes-Côte d'Azur.

## Stack

- **Node.js** (≥ 18) + **Express** — serveur HTTP
- **Helmet** — sécurité des en-têtes HTTP
- **Compression** — gzip automatique
- HTML / CSS / JS natifs — aucun framework frontend

## Démarrage local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement (rechargement automatique)
npm run dev

# 3. Ou lancer en production
npm start
```

Le site est accessible sur **http://localhost:3000**

## Structure

```
empauma-site/
├── public/
│   ├── index.html   ← site complet (photos intégrées en base64)
│   ├── robots.txt
│   └── sitemap.xml
├── server.js        ← serveur Express
├── package.json
└── .gitignore
```

## Déploiement

### Render.com (recommandé, gratuit)
1. Pousser ce dépôt sur GitHub
2. Connecter le dépôt sur [render.com](https://render.com)
3. Type : **Web Service** — Build : `npm install` — Start : `npm start`

### Variables d'environnement
| Variable | Valeur par défaut | Description |
|----------|------------------|-------------|
| `PORT`   | `3000`           | Port du serveur |

## Contact

**Raphaël Valverde** — contact@empauma-conciergerie.fr — 06 66 73 85 07
