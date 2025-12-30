# Niezatapialni - "Czy Dominik jest już zdrowy?"

A static page showing progress toward 123 "get well soon" wishes for Dominik.

## How to Update the Count

Edit `app/page.tsx` and change the `CURRENT_COUNT` constant:

```ts
const CURRENT_COUNT = 42;  // Update this value
const GOAL = 123;
```

Then redeploy.

## Available Scripts

From the monorepo root:

```bash
npm run niezatapialni dev      # Start development server
npm run niezatapialni build    # Build for production
npm run niezatapialni start    # Start production server
```

## Deployment to Vercel

```bash
cd lib/niezatapialni
npx vercel --prod
```

No environment variables needed - it's a fully static site.
