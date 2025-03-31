# Use Node.js 18 as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@10.6.3

# Copy package.json and lockfile
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Copy environment variables for production
COPY .env.production .env

# Build the application
RUN pnpm build

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
