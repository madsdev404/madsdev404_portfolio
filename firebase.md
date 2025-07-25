## Firebase Setup for madsdev404

This document outlines the steps to set up and deploy the `madsdev404` Next.js application to Firebase Hosting.

### 1. Firebase Project Configuration

Your Firebase project configuration is stored in the `.env` file for security and easy management. The variables are:

### 2. Firebase Initialization File (`lib/firebase.ts`)

Firebase is initialized in `lib/firebase.ts` using the environment variables. This file also conditionally initializes Firebase Analytics only on the client-side.

```typescript
// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if window is defined (client-side) before initializing analytics
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
```

### 3. Firebase CLI Setup and Deployment

To deploy your Next.js application to Firebase Hosting, follow these steps:

#### a. Install Firebase CLI

If you haven't already, install the Firebase CLI globally:

```bash
npm install -g firebase-tools
```

#### b. Login to Firebase

Log in to your Firebase account through the CLI:

```bash
firebase login
```

#### c. Initialize Firebase in your Project

Navigate to your project's root directory and initialize Firebase. When prompted, select "Hosting" and choose your existing Firebase project (`madsdev404`).

```bash
firebase init
```

During the `firebase init` process for Hosting, ensure you configure the following:

- **What do you want to use as your public directory?** `out` (This is where Next.js exports static files when you run `next build` and `next export`)
- **Configure as a single-page app (rewrite all URLs to /index.html)?** `No` (Next.js handles routing)
- **Set up automatic builds and deploys with GitHub?** `No` (Unless you want to set up CI/CD)

This will create `firebase.json` and `.firebaserc` files in your project.

#### d. Build your Next.js Application

Before deploying, you need to build your Next.js application for static export. Add `"export": "next export"` to your `package.json` scripts if it's not already there, and then run:

```bash
npm run build && npm run export
```

This will create an `out` directory containing the static assets ready for deployment.

#### e. Deploy to Firebase Hosting

Finally, deploy your application:

```bash
firebase deploy --only hosting
```

Your application will be deployed to `https://madsdev404.web.app` (or `https://madsdev404.firebaseapp.com`).
