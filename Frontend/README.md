# DentaVision Frontend

This is the frontend application for DentaVision, built with React, TypeScript, and Vite. The application provides a modern, responsive user interface for dental condition detection.

## Features

- Modern React application with TypeScript
- Built with Vite for fast development and optimized builds
- UI components using shadcn/ui
- Responsive design with Tailwind CSS
- Dark/Light mode support
- Form handling with React Hook Form
- Data visualization with Recharts
- Toast notifications with Sonner
- Client-side routing with React Router

## Prerequisites

- Node.js 16+
- npm or yarn package manager

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

## Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Build the application:
```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

- `/src` - Source code
- `/public` - Static assets
- `/dist` - Production build output

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- React Router
- React Hook Form
- Recharts
- Sonner
- Various Radix UI primitives

## Docker Support

Build and run using Docker:
```bash
docker build -t dentavision-frontend .
docker run -p 8080:8080 dentavision-frontend
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
VITE_API_URL=http://localhost:8005
``` 