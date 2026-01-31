#!/bin/bash

echo "🚀 Deploying Image Colorizer to Hugging Face"
echo "=============================================="
echo ""

# Check if logged in
echo "Checking Hugging Face authentication..."
if ! huggingface-cli whoami &> /dev/null; then
    echo ""
    echo "⚠️  You need to login to Hugging Face first!"
    echo ""
    echo "Run this command and follow the prompts:"
    echo "  huggingface-cli login"
    echo ""
    echo "Get your token from: https://huggingface.co/settings/tokens"
    echo ""
    exit 1
fi

echo "✅ Authenticated as: $(huggingface-cli whoami)"
echo ""

# Upload files using HF CLI
echo "📤 Uploading files to NinaDNJ/image-colorizer..."
echo ""

cd "/Users/ninadoinjashvili/NIna_Portfolio /huggingface_space"

# Upload each file
echo "  → Uploading app.py..."
huggingface-cli upload NinaDNJ/image-colorizer app.py app.py --repo-type=space

echo "  → Uploading requirements.txt..."
huggingface-cli upload NinaDNJ/image-colorizer requirements.txt requirements.txt --repo-type=space

echo "  → Uploading README.md..."
huggingface-cli upload NinaDNJ/image-colorizer README.md README.md --repo-type=space

echo "  → Uploading model (140MB - this may take a minute)..."
huggingface-cli upload NinaDNJ/image-colorizer colorizer_model.keras colorizer_model.keras --repo-type=space

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🎨 Your Space will be live in 2-3 minutes at:"
echo "   https://huggingface.co/spaces/NinaDNJ/image-colorizer"
echo ""
echo "📊 Check the build logs to see when it's ready!"
