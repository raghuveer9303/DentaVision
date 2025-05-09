# syntax=docker/dockerfile:1

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files (source, configs, public, etc.)
COPY . .

# Build the app for production
RUN npm run build

# Install a lightweight static server
RUN npm install -g serve

# Expose the port Vite preview/serve uses by default
EXPOSE 4173
EXPOSE 10000
EXPOSE 8080

# Start the production server with SPA mode enabled
CMD ["serve", "-s", "dist", "-l", "8080", "--single"]