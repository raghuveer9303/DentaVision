# DentaVision Backend

This is the backend service for the DentaVision application, a dental condition detection system using Vision Transformer (ViT) model.

## Features

- FastAPI-based REST API
- Vision Transformer (ViT) model for dental condition detection
- Supports image upload and prediction
- CORS enabled for frontend integration
- Docker support for containerization

## Supported Conditions

The model can detect the following dental conditions:
- Calculus
- Caries
- Gingivitis
- Hypodontia
- Mouth Ulcer
- Tooth Discoloration
- Healthy teeth

## Prerequisites

- Python 3.8+
- CUDA-capable GPU (optional, but recommended for faster inference)

## Installation

1. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

1. Start the server:
```bash
python main.py
```

The server will start on `http://localhost:8005`

## API Endpoints

### POST /predict/
- Accepts image files (PNG, JPG, JPEG)
- Returns prediction result in JSON format
- Example response:
```json
{
    "prediction": "Caries"
}
```

## Docker Support

Build and run using Docker:
```bash
docker build -t dentavision-backend .
docker run -p 8005:8005 dentavision-backend
```

## Model Information

The backend uses a pre-trained Vision Transformer (ViT) model stored in `Pre-Trained_ViT.pkl`. The model processes images at 224x224 resolution and provides predictions for various dental conditions. 