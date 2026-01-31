#!/bin/bash

# LocalLeap Agency - One-Command Deploy Script
# Run this from the localleap-agency folder

echo "🚀 LocalLeap Agency Deployment"
echo "=============================="
echo ""

# Check if we're in the right directory
if [ ! -d "website" ]; then
    echo "❌ Error: Please run this from the localleap-agency folder"
    echo "   cd ~/localleap-agency && bash DEPLOY.sh"
    exit 1
fi

echo "Choose an option:"
echo "1) Deploy to Vercel (recommended)"
echo "2) Run locally (dev server)"
echo "3) Build for production"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "📦 Deploying to Vercel..."
        cd website
        npx vercel --prod
        ;;
    2)
        echo ""
        echo "🌐 Starting development server..."
        cd website
        npm run dev
        ;;
    3)
        echo ""
        echo "🔨 Building for production..."
        cd website
        npm run build
        echo ""
        echo "✅ Build complete! Run 'npm start' to test locally"
        echo "   or deploy the .next folder to your hosting provider"
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "✅ Done!"
