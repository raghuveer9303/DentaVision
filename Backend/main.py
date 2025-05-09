from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import torch
from torchvision import transforms
from PIL import Image, ImageDraw, ImageFont
import io
import os
from torch.serialization import add_safe_globals
from timm.models.vision_transformer import VisionTransformer

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:8080",
        "https://dentavision.onrender.com"
    ],  # Frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Get the absolute path to the model file, cross-platform
MODEL_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'Pre-Trained_ViT.pkl')
add_safe_globals({'VisionTransformer': VisionTransformer})
model = torch.load(MODEL_PATH, weights_only=False, map_location=device)
model.eval()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.5]*3, [0.5]*3)
])

class_names = [
    'Calculus',
    'Caries',
    'Gingivitis',
    'Hypodontia',
    'Mouth Ulcer',
    'Tooth Discoloration',
    'healthy'
]

@app.post('/predict/')
async def predict(file: UploadFile = File(...)):
    # Verify file format
    if not file.filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        return {"error": "Only PNG and JPG/JPEG images are supported"}
    
    try:
        image_bytes = await file.read()
        image = Image.open(io.BytesIO(image_bytes))
        
        # Convert to RGB if the image is in a different mode (like RGBA)
        if image.mode != 'RGB':
            image = image.convert('RGB')
            
        input_tensor = transform(image).unsqueeze(0).to(device)
        
        with torch.no_grad():
            output = model(input_tensor)
            _, pred = torch.max(output, 1)
            pred_class = class_names[pred.item()]
        return {"prediction": pred_class}
        
    except Exception as e:
        return {"error": f"Error processing image: {str(e)}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8005, reload=True)
