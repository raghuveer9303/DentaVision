# syntax=docker/dockerfile:1

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy index.html and public assets before build
COPY index.html ./
COPY public ./public

# Copy source files before build
COPY src ./src

# Copy Vite and TS config files before build
COPY vite.config.ts ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./

# Build the app for production
RUN npm run build

# Install a lightweight static server
RUN npm install -g serve

# Copy all files
COPY . .

# Expose the port Vite preview/serve uses by default
EXPOSE 4173

# Start the production server
CMD ["serve", "-s", "dist", "-l", "4173"]