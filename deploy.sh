#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the React app
echo "📦 Building React app for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to Firebase
echo "🔥 Deploying to Firebase..."
firebase deploy

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "📱 Your app is live at: https://advait-hbd-2025.web.app"
else
    echo "❌ Deployment failed!"
    exit 1
fi

echo "✨ All done!"