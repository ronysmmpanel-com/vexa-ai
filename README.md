# VEXA AI

Premium personal AI assistant with responsive website and Android-ready app shell.

## Project status

- Frontend website: ready
- App shell: ready
- Android APK: not built yet
- Live deployment: not published yet
- AI backend: requires secure configuration

## Run locally

```bash
npm install
npm run dev
```

## Build static site

```bash
npm run build
```

## Deploy to Vercel

1. Push repo to GitHub
2. Import project in Vercel
3. Set framework to Vite
4. Build command: `npm run build`
5. Output directory: `dist`

## Deploy to Netlify

1. Import repo
2. Build command: `npm run build`
3. Publish directory: `dist`

## Android APK

```bash
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Then open Android Studio and generate the APK or AAB.

## Real deployment note

A public website URL or APK download link will only exist after real deployment/build in a platform and Android Studio environment.
