# Advait's Farm Birthday Party Invitation

A React-based birthday party invitation app with a fun farm theme! This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🌐 Live App

The app is deployed and live at: [https://advait-hbd-2025.web.app](https://advait-hbd-2025.web.app)

## 🚀 Quick Deployment

To deploy the app to Firebase hosting, simply run:

```bash
./deploy.sh
```

This script will:
1. Build the React app for production
2. Deploy to Firebase hosting
3. Provide the live URL

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

The app is deployed using Firebase hosting. Use the provided `deploy.sh` script for easy deployment:

```bash
./deploy.sh
```

**Manual deployment steps:**
1. Build the app: `npm run build`
2. Deploy to Firebase: `firebase deploy`

**Live URL:** [https://advait-hbd-2025.web.app](https://advait-hbd-2025.web.app)

## 🔧 Automatic Deployment Setup

The app is configured for automatic deployment to Firebase when code is pushed to the `main` branch using GitHub Actions.

### Setup Instructions:

1. **Generate Firebase Service Account Key:**
   ```bash
   firebase projects:list
   firebase projects:addfirebase advait-hbd-2025 --json
   ```
   Or go to [Firebase Console](https://console.firebase.google.com/project/advait-hbd-2025/settings/serviceaccounts/adminsdk) → Project Settings → Service Accounts → Generate New Private Key

2. **Add GitHub Secret:**
   - Go to your GitHub repository → Settings → Secrets and Variables → Actions
   - Add a new secret named: `FIREBASE_SERVICE_ACCOUNT_ADVAIT_HBD_2025`
   - Paste the entire JSON content of the service account key

3. **Push to Deploy:**
   - Any push to the `main` branch will automatically trigger deployment
   - Pull requests will also run builds for testing

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
