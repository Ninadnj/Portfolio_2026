# How to Replace requirements.txt on Hugging Face

## The Problem

You uploaded the file, but HF is still using the old one with version pins:
- Old file (still on HF): `gradio==4.16.0`, `tensorflow==2.15.0`
- New file (correct): `gradio`, `tensorflow` (no versions)

## Solution: Edit Directly on HF

### Step-by-Step:

1. **Go to:** https://huggingface.co/spaces/NinaDNJ/image-colorizer

2. **Click:** "Files" tab

3. **Click on:** `requirements.txt` (to open it)

4. **Click:** The **pencil icon** (✏️) to edit

5. **Delete everything** and replace with:
   ```
   gradio
   tensorflow
   numpy
   Pillow
   opencv-python-headless
   ```

6. **Click:** "Commit changes to main"

7. **Wait:** 2-3 minutes for rebuild

---

## Important: Edit, Don't Upload

**Don't use "Upload file"** - it might not replace correctly.

**Do use "Edit file"** - This ensures the old content is replaced.

---

## What the File Should Look Like

```
gradio
tensorflow
numpy
Pillow
opencv-python-headless
```

**No version numbers!**
**No `==` signs!**
**Just package names!**

---

## After Editing

The build should succeed because:
- ✅ `gradio` → HF installs latest compatible version (6.x)
- ✅ `tensorflow` → Installs latest (2.20.0)
- ✅ No version conflicts

---

## Quick Checklist

- [ ] Go to HF Space Files tab
- [ ] Click on requirements.txt
- [ ] Click edit (pencil icon)
- [ ] Delete all content
- [ ] Paste the 5 lines above
- [ ] Commit changes
- [ ] Wait for rebuild

---

**Edit the file directly on HF - don't upload!** 🎯
