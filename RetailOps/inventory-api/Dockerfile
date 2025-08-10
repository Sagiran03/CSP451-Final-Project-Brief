# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port (e.g., 3000)
EXPOSE 3000

# Start the service
CMD ["node", "app.js"]
