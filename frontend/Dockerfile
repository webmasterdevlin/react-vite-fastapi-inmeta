# Continue from the build stage
FROM node:20-slim as build

# Your existing setup...
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Install `serve` to serve your static files
RUN npm install -g serve

# Expose your chosen port
EXPOSE 5137

# Serve your static files on the chosen port
CMD ["serve", "-s", "build", "-l", "5137"]
