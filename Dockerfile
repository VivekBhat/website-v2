# Stage 1: Build the Angular app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Angular app for production
RUN npx ng build --configuration production --base-href /website-v2/
