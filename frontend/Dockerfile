# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# Continue from the build stage
FROM node:20-slim as build

# Your existing setup...
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force
COPY . ./
RUN npm run build

# Install `serve` to serve your static files
RUN npm install -g serve

# Expose your chosen port of the container
EXPOSE 8080

# Serve your dist folder on the chosen port
CMD ["serve", "-s", "dist", "-l", "8080"]