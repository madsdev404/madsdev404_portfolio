
# Deploying a Next.js App to Firebase Hosting

This guide provides step-by-step instructions for deploying a Next.js application to Firebase Hosting, including how to manage environment variables.

## 1. Firebase Project Setup

1.  **Create a Firebase Project:**
    *   Go to the [Firebase Console](https://console.firebase.google.com/).
    *   Click on "Add project" and follow the on-screen instructions to create a new project.

2.  **Enable Firebase Hosting:**
    *   In your new Firebase project, go to the "Hosting" section from the left-hand menu.
    *   Click "Get started" and follow the setup wizard.

## 2. Firebase CLI Installation and Login

1.  **Install the Firebase CLI:**
    *   If you don't have it installed, open your terminal and run:
        ```bash
        npm install -g firebase-tools
        ```

2.  **Login to Firebase:**
    *   In your terminal, run the following command and follow the prompts to log in with your Google account:
        ```bash
        firebase login
        ```

## 3. Project Initialization

1.  **Initialize Firebase in your Next.js project:**
    *   Navigate to your project's root directory in the terminal and run:
        ```bash
        firebase init
        ```
    *   When prompted, select the following options:
        *   "Are you ready to proceed?" - **Yes**
        *   "Which Firebase features do you want to set up?" - **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys** (use the spacebar to select, then enter).
        *   "Please select an option:" - **Use an existing project**
        *   Select the Firebase project you created earlier.
        *   "What do you want to use as your public directory?" - **out** (This is the default export directory for Next.js static sites).
        *   "Configure as a single-page app (rewrite all urls to /index.html)?" - **No**
        *   "Set up automatic builds and deploys with GitHub?" - **No** (You can set this up later if you want).

## 4. Environment Variable Management

Firebase Hosting doesn't directly support `.env` files. You need to set up your environment variables in the Firebase environment.

1.  **Set Environment Variables in Firebase:**
    *   For each variable in your `.env.local` file (e.g., `API_KEY=your_api_key`), run the following command in your terminal:
        ```bash
        firebase functions:config:set yourservice.key="your_api_key"
        ```
        *   Replace `yourservice.key` with a name that makes sense for your variable (e.g., `next.api_key`).
        *   Repeat this for all the environment variables your application needs.

2.  **Access Environment Variables in your Next.js App:**
    *   To access these variables in your Next.js code, you'll need to use the `functions.config()` object. However, since we are using Firebase Hosting and not Cloud Functions directly for serving the app, the recommended approach for Next.js is to use the `experimental.appDir` feature with Server Components, which can access environment variables on the server-side.

    *   For client-side code, you need to expose the variables through `next.config.js`. **Be careful not to expose sensitive keys to the client.**

        ```javascript
        // next.config.js
        module.exports = {
          env: {
            NEXT_PUBLIC_API_KEY: process.env.API_KEY,
          },
        };
        ```

        And then access it in your code:

        ```javascript
        // pages/index.js
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        ```

## 5. Build and Deploy

1.  **Build your Next.js App:**
    *   Run the following command to build your app for production:
        ```bash
        npm run build
        ```
    *   This will create an `out` folder in your project directory.

2.  **Deploy to Firebase Hosting:**
    *   Finally, deploy your app to Firebase Hosting with this command:
        ```bash
        firebase deploy --only hosting
        ```

After the deployment is complete, you'll see the URL for your live site in the terminal.

## Additional Notes

*   **`.firebaserc` file:** This file is created after `firebase init` and tells the Firebase CLI which project to use.
*   **`firebase.json` file:** This file configures your Firebase Hosting settings. It should look something like this:
    ```json
    {
      "hosting": {
        "public": "out",
        "ignore": [
          "firebase.json",
          "**/.*",
          "**/node_modules/**"
        ]
      }
    }
    ```
*   **`package.json` script:** You can add a deploy script to your `package.json` for convenience:
    ```json
    "scripts": {
      "deploy": "npm run build && firebase deploy --only hosting"
    }
    ```
    Then you can just run `npm run deploy`.
