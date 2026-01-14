#!/bin/bash

# Quick script to upload files to Hugging Face Space

echo "🚀 Uploading to Hugging Face Space"
echo "===================================="
echo ""

# Check if in correct directory
if [ ! -f "app.py" ]; then
    echo "❌ Error: Please run this from the huggingface_space directory"
    echo "   cd huggingface_space"
    exit 1
fi

# Clone the space
echo "📥 Cloning your Space..."
cd ..
git clone https://huggingface.co/spaces/NinaDNJ/image-colorizer hf_space_temp
cd hf_space_temp

# Copy files
echo "📋 Copying files..."
cp ../huggingface_space/app.py .
cp ../huggingface_space/requirements.txt .
cp ../huggingface_space/README.md .

# Check for model file
echo ""
echo "⚠️  IMPORTANT: Copy your model file manually!"
echo "   cp /path/to/your/colorizer_model.h5 ."
echo ""
read -p "Have you copied your model file? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Please copy your model file first, then run:"
    echo "  git add ."
    echo "  git commit -m 'Add colorizer app'"
    echo "  git push"
    exit 1
fi

# Git add and commit
echo "📦 Committing files..."
git add .
git commit -m "Add image colorizer Gradio app"

echo ""
echo "🔐 Pushing to Hugging Face..."
echo "   You'll need to enter your HF access token as password"
echo "   Get it from: https://huggingface.co/settings/tokens"
echo ""

git push

echo ""
echo "✅ Done! Check your Space in 2-3 minutes:"
echo "   https://huggingface.co/spaces/NinaDNJ/image-colorizer"
echo ""

# Cleanup
cd ..
rm -rf hf_space_temp
