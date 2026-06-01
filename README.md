# Maison Alta

Démo de site web développée avec Astro.

## Stack

- Astro
- Tailwind CSS
- Sass
- TypeScript

## Démarrage

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Qualité

```bash
npm run lint
```

## Déploiement Netlify

Le projet peut être importé directement depuis GitHub dans Netlify.

Configuration attendue :

- Base directory : laisser vide
- Build command : géré par `netlify.toml`
- Publish directory : `dist`
- Node.js : `18`

Une fois le dépôt importé, Netlify utilisera automatiquement la configuration présente dans `netlify.toml`.

## Versionnage

Le projet démarre avec le tag `v0.1.0`.

Convention recommandée pour les prochains commits :

- `feat:` pour une nouvelle fonctionnalité
- `fix:` pour une correction
- `docs:` pour la documentation
- `style:` pour les ajustements de style sans changement fonctionnel
- `refactor:` pour une restructuration interne
- `chore:` pour la maintenance
