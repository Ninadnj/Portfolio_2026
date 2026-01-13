# Hugging Face Space Deployment Guide

## 📋 Prerequisites

1. Hugging Face account (free): https://huggingface.co/join
2. Your trained colorizer model file (.h5 or .keras)
3. (Optional) Example images for the demo

## 🚀 Deployment Steps

### Option 1: Web UI (Easiest)

1. **Create Space**
   - Go to https://huggingface.co/new-space
   - Name: `image-colorizer`
   - SDK: Select "Gradio"
   - Click "Create Space"

2. **Upload Files**
   - Click "Files" tab
   - Upload `app.py`
   - Upload `requirements.txt`
   - Upload `README.md`
   - Upload your model file (e.g., `colorizer_model.h5`)

3. **Wait for Build**
   - Space will automatically build (2-3 minutes)
   - Check "Logs" tab if there are errors

4. **Test**
   - Upload a grayscale image
   - Verify colorization works
   - Share the URL!

### Option 2: Git (Advanced)

```bash
# 1. Clone the space repo
git clone https://huggingface.co/spaces/YOUR_USERNAME/image-colorizer
cd image-colorizer

# 2. Copy files
cp /path/to/huggingface_space/* .
cp /path/to/your/colorizer_model.h5 .

# 3. Push to HF
git add .
git commit -m "Initial commit: Image colorizer"
git push
```

## 🔧 Customization

### Update Model Path
In `app.py`, line 9:
```python
MODEL_PATH = "colorizer_model.h5"  # Change to your model filename
```

### Adjust Image Size
In `app.py`, line 23:
```python
image = image.resize((256, 256))  # Match your model's input size
```

### Add Example Images
1. Create `examples/` folder in your Space
2. Upload example images
3. Update `app.py`, line 60:
```python
examples=[
    ["examples/landscape.jpg"],
    ["examples/portrait.jpg"],
],
```

## 📊 After Deployment

1. **Get the URL**
   - Your space will be at: `https://huggingface.co/spaces/YOUR_USERNAME/image-colorizer`

2. **Update Portfolio**
   - Add the live demo link to your Projects section
   - Update the colorizer project card

3. **Share**
   - Add to LinkedIn featured section
   - Include in resume
   - Share on Twitter/X

## 🐛 Troubleshooting

### "Model not found" error
- Make sure model file is uploaded
- Check MODEL_PATH matches filename
- Verify file uploaded correctly in "Files" tab

### Out of memory
- Reduce batch size in app.py
- Use smaller model
- Request more resources (Settings > Hardware)

### Slow inference
- Normal for free tier
- Consider upgrading to GPU (paid)
- Or optimize model (quantization, pruning)

## 💡 Tips

- **Free tier** is fine for portfolio demos
- **GPU upgrade** ($0.60/hour) for faster inference
- **Private space** if model is proprietary
- **Analytics** available in Space settings

## 📝 Next Steps

After deployment:
1. Test with various images
2. Add to portfolio Projects section
3. Update LinkedIn
4. Share on social media

---

Need help? Check:
- HF Docs: https://huggingface.co/docs/hub/spaces-overview
- Gradio Docs: https://www.gradio.app/docs
