# DentaVision

AI-Powered Oral Disease Detection

## Project Info

DentaVision is a web application that leverages AI to assist in the detection of oral diseases from images. The project features a modern React frontend styled with Tailwind CSS and shadcn-ui components.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)

### Installation

```sh
# Clone the repository
git clone https://github.com/raghuveer9303/DentaVision.git

# Navigate to the project directory
cd Denta-Vision-frontend

# Install dependencies
npm install
```

### Running the Development Server

```sh
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Project Structure
- `src/components/` – Reusable UI components
- `src/pages/` – Main application pages (Home, Dataset, Models, Results, Team, NotFound)
- `src/hooks/` – Custom React hooks
- `src/lib/` – Utility functions
- `public/` – Static assets

## Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui

## Deployment to GitHub Pages

To deploy this app to GitHub Pages:

1. Make sure your latest code is pushed to your GitHub repository.
2. Update the `base` option in `vite.config.ts` to match your repo name (already set to `/Denta-Vision-frontend/`).
3. Run the following command:

```sh
npm run deploy
```

This will build the app and publish the `dist` folder to the `gh-pages` branch. Your site will be available at:

```
https://<your-github-username>.github.io/Denta-Vision-frontend/
```

For more details, see the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages).

## License
© 2025 DentaVision. All rights reserved.

---

For deployment or further documentation, please refer to your preferred hosting provider's instructions or contact the project maintainer.
