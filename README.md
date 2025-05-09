# DentaVision

DentaVision is an AI-powered dental condition detection system that uses computer vision to identify various dental conditions from images. The system consists of a modern web frontend and a powerful backend service powered by Vision Transformer (ViT) model.

## Project Overview

DentaVision helps dental professionals and patients identify common dental conditions through image analysis. The system can detect:
- Calculus
- Caries
- Gingivitis
- Hypodontia
- Mouth Ulcer
- Tooth Discoloration
- Healthy teeth

## Architecture

The project is divided into two main components:

### Frontend
- Modern React application with TypeScript
- Built with Vite
- Uses shadcn/ui components
- Responsive design with Tailwind CSS
- See [Frontend README](./Frontend/README.md) for more details

### Backend
- FastAPI-based REST API
- Vision Transformer (ViT) model for image analysis
- Docker support
- See [Backend README](./Backend/README.md) for more details

## Getting Started

### Prerequisites
- Node.js 16+ (for Frontend)
- Python 3.8+ (for Backend)
- Docker (optional)

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dentavision.git
cd dentavision
```

2. Set up the Backend:
```bash
cd Backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

3. Set up the Frontend:
```bash
cd Frontend
npm install
npm run dev
```

4. Access the application:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8005

### Running with Docker

1. Build and run the Backend:
```bash
cd Backend
docker build -t dentavision-backend .
docker run -p 8005:8005 dentavision-backend
```

2. Build and run the Frontend:
```bash
cd Frontend
docker build -t dentavision-frontend .
docker run -p 8080:8080 dentavision-frontend
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Vision Transformer (ViT) model for image analysis
- FastAPI for the backend framework
- React and Vite for the frontend framework
- shadcn/ui for the component library
