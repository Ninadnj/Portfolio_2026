import gradio as gr
import numpy as np
from PIL import Image
import tensorflow as tf
from tensorflow import keras

# Define custom loss function (mae - Mean Absolute Error)
def mae(y_true, y_pred):
    """Mean Absolute Error loss function"""
    return tf.reduce_mean(tf.abs(y_true - y_pred))

# Load your trained model
# Using the model trained on Colab (December 2025)
MODEL_PATH = "colorizer_model.keras"

print("=" * 50)
print("LOADING MODEL...")
try:
    # Load model with custom objects
    model = keras.models.load_model(
        MODEL_PATH,
        custom_objects={'mae': mae}
    )
    print("✅ MODEL LOADED SUCCESSFULLY!")
    print(f"Input shape: {model.input_shape}")
    print(f"Output shape: {model.output_shape}")
    print("🎨 USING REAL AI COLORIZATION")
except Exception as e:
    print("❌ MODEL LOADING FAILED!")
    print(f"Error: {e}")
    print("⚠️ USING DEMO MODE (Sepia Filter)")
    model = None
print("=" * 50)


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
    
    # Handle None input
    if input_image is None:
        return None
    
    # Convert to grayscale if it's a color image
    if len(input_image.shape) == 3 and input_image.shape[2] == 3:
        # Color image - convert to grayscale
        grayscale = np.mean(input_image, axis=2).astype(np.uint8)
    elif len(input_image.shape) == 2:
        # Already grayscale
        grayscale = input_image.astype(np.uint8)
    else:
        # Handle RGBA or other formats
        grayscale = np.mean(input_image[:, :, :3], axis=2).astype(np.uint8)
    
    if model is None:
        # Demo mode: return a visible sepia-toned version
        # Create a warm sepia effect so users can see it's working
        sepia_r = np.clip(grayscale * 1.2, 0, 255).astype(np.uint8)
        sepia_g = np.clip(grayscale * 1.0, 0, 255).astype(np.uint8)
        sepia_b = np.clip(grayscale * 0.7, 0, 255).astype(np.uint8)
        colored = np.stack([sepia_r, sepia_g, sepia_b], axis=-1)
        return colored
    
    
    try:
        # Preprocess
        processed = preprocess_image(grayscale)
        
        # Predict
        colorized = model.predict(processed, verbose=0)
        
        # Post-process
        colorized = colorized[0]  # Remove batch dimension
        colorized = np.clip(colorized, 0, 1)
        colorized = (colorized * 255).astype(np.uint8)
        
        # Resize back to original size
        original_size = grayscale.shape[:2][::-1]
        colorized = Image.fromarray(colorized)
        colorized = colorized.resize(original_size, Image.LANCZOS)
        
        return np.array(colorized)
        
    except Exception as e:
        print(f"Error during colorization: {e}")
        # Fallback: return grayscale as RGB
        return np.stack([grayscale] * 3, axis=-1)

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
    - Works best on cats, portraits, and animals
    - May struggle with abstract or highly stylized images
    - Color choices are learned from training data
    """,
)

if __name__ == "__main__":
    demo.launch(theme=gr.themes.Soft())
