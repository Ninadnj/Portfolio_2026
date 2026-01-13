#!/bin/bash

# Local Testing Script for Hugging Face Space
# Run this before deploying to test your app locally

echo "🚀 Testing Hugging Face Space Locally"
echo "======================================"
echo ""

# Check if in correct directory
if [ ! -f "app.py" ]; then
    echo "❌ Error: app.py not found"
    echo "Please run this script from the huggingface_space directory"
    exit 1
fi

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 not found"
    exit 1
fi

echo "✓ Found app.py"
echo "✓ Python 3 installed"
echo ""

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📥 Installing dependencies..."
pip install -q --upgrade pip
pip install -q -r requirements.txt

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 Starting Gradio app..."
echo "   Open http://localhost:7860 in your browser"
echo ""
echo "   Press Ctrl+C to stop"
echo ""

# Run the app
python app.py
