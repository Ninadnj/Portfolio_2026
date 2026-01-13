---
title: Image Colorizer
emoji: 🎨
colorFrom: slate
colorTo: gray
sdk: gradio
sdk_version: 4.16.0
app_file: app.py
pinned: false
license: mit
---

# 🎨 Deep Learning Image Colorizer

AI-powered image colorization using a conditional GAN (Pix2Pix architecture).

## Features

- **U-Net Generator** with skip connections for detailed colorization
- **PatchGAN Discriminator** for realistic texture generation
- **Real-time inference** on grayscale images

## Technology Stack

- **Framework:** TensorFlow/Keras
- **Architecture:** Pix2Pix (Conditional GAN)
- **Interface:** Gradio
- **Deployment:** Hugging Face Spaces

## Usage

1. Upload a grayscale image
2. Click "Submit"
3. Download your colorized result!

## Model Details

- **Input:** 256x256 grayscale images
- **Output:** RGB colorized images
- **Training:** Paired grayscale-color dataset
- **Loss:** L1 + Adversarial loss

## Author

**Nina Doinjashvili**  
Applied AI Engineer | Machine Learning Systems & AI Automation

- Portfolio: [ninadnj.github.io/Portfolio_2026](https://ninadnj.github.io/Portfolio_2026)
- GitHub: [@Ninadnj](https://github.com/Ninadnj)
- LinkedIn: [nina-doinjashvili](https://linkedin.com/in/nina-doinjashvili-8928815a)

## License

MIT License - feel free to use and modify!
