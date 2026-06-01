# Maison Alta

Démo de site web développée avec Astro.

Pré-requis local : Node.js 22.12.0 ou supérieur.

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
- Node.js : `22.12.0`

Une fois le dépôt importé, Netlify utilisera automatiquement la configuration présente dans `netlify.toml`.

Étapes recommandées :

1. Créer un nouveau site dans Netlify depuis GitHub.
2. Sélectionner le dépôt `Chankoa/rekode-website-demo`.
3. Vérifier que le dossier de base est vide.
4. Laisser Netlify lire `netlify.toml` pour la commande de build et le dossier `dist`.
5. Lancer le premier déploiement.
6. Si besoin, relancer un déploiement avec cache vidé en cas de problème sur les dépendances optionnelles Rollup.

## Versionnage

Le projet démarre avec le tag `v0.1.0`.

Convention recommandée pour les prochains commits :

- `feat:` pour une nouvelle fonctionnalité
- `fix:` pour une correction
- `docs:` pour la documentation
- `style:` pour les ajustements de style sans changement fonctionnel
- `refactor:` pour une restructuration interne
- `chore:` pour la maintenance
