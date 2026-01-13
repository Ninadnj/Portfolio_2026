import gradio as gr
import numpy as np
from PIL import Image
import tensorflow as tf
from tensorflow import keras

# Load your trained model
# Replace this path with your actual model
MODEL_PATH = "colorizer_model.h5"  # or .keras

try:
    model = keras.models.load_model(MODEL_PATH)
    print("✓ Model loaded successfully")
except Exception as e:
    print(f"⚠️ Model not found. Using demo mode. Error: {e}")
    model = None

def preprocess_image(image):
    """Preprocess grayscale image for the model"""
    # Convert to grayscale if needed
    if len(image.shape) == 3:
        image = np.mean(image, axis=2)
    
    # Resize to model input size (adjust to your model's expected size)
    image = Image.fromarray(image.astype('uint8'))
    image = image.resize((256, 256))  # Adjust size as needed
    
    # Normalize
    image = np.array(image) / 255.0
    
    # Add batch and channel dimensions
    image = np.expand_dims(image, axis=[0, -1])
    
    return image

def colorize_image(input_image):
    """Colorize a grayscale image using the trained model"""
    
    if model is None:
        # Demo mode: return a simple tinted version
        colored = np.stack([input_image * 0.8, input_image * 0.9, input_image], axis=-1)
        return (colored * 255).astype(np.uint8)
    
    try:
        # Preprocess
        processed = preprocess_image(input_image)
        
        # Predict
        colorized = model.predict(processed, verbose=0)
        
        # Post-process
        colorized = colorized[0]  # Remove batch dimension
        colorized = np.clip(colorized, 0, 1)
        colorized = (colorized * 255).astype(np.uint8)
        
        # Resize back to original size
        original_size = input_image.shape[:2][::-1]
        colorized = Image.fromarray(colorized)
        colorized = colorized.resize(original_size, Image.LANCZOS)
        
        return np.array(colorized)
        
    except Exception as e:
        print(f"Error during colorization: {e}")
        # Fallback: return grayscale as RGB
        return np.stack([input_image] * 3, axis=-1)

# Create Gradio interface
demo = gr.Interface(
    fn=colorize_image,
    inputs=gr.Image(label="Upload Grayscale Image", type="numpy"),
    outputs=gr.Image(label="Colorized Result", type="numpy"),
    title="🎨 Deep Learning Image Colorizer",
    description="""
    ## AI-Powered Image Colorization
    
    Upload a grayscale image and watch it come to life with color!
    
    **Technology:** Conditional GAN (Pix2Pix architecture)
    - **Generator:** U-Net with skip connections
    - **Discriminator:** PatchGAN for realistic textures
    - **Training:** Paired grayscale-color image dataset
    
    Built by **Nina Doinjashvili** | [Portfolio](https://ninadnj.github.io/Portfolio_2026) | [GitHub](https://github.com/Ninadnj)
    """,
    examples=[
        # Add paths to example images if you have them
        # ["examples/example1.jpg"],
        # ["examples/example2.jpg"],
    ],
    article="""
    ### How It Works
    
    This model uses a **conditional Generative Adversarial Network (GAN)** based on the Pix2Pix architecture:
    
    1. **U-Net Generator**: Learns to map grayscale images to color
    2. **PatchGAN Discriminator**: Ensures realistic color distributions
    3. **L1 Loss + Adversarial Loss**: Balances color accuracy with realism
    
    ### Technical Details
    - **Framework:** TensorFlow/Keras
    - **Architecture:** Pix2Pix (Conditional GAN)
    - **Input:** 256x256 grayscale images
    - **Output:** RGB colorized images
    
    ### Limitations
    - Works best on natural images (landscapes, portraits)
    - May struggle with abstract or highly stylized images
    - Color choices are learned from training data
    """,
    theme=gr.themes.Soft(),
    allow_flagging="never",
)

if __name__ == "__main__":
    demo.launch()
