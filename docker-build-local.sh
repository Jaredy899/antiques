#!/bin/bash

# Check if .env file exists
if [ ! -f .env ]; then
  echo "Error: .env file not found. Please create one based on .env.example"
  exit 1
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
  echo "Error: Docker is not running. Please start Docker Desktop and try again."
  exit 1
fi

# Load environment variables from .env file
source .env

# Build the Docker image with environment variables
echo "Building Docker image..."
docker build \
  --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}" \
  --build-arg CLERK_SECRET_KEY="${CLERK_SECRET_KEY}" \
  -t jaredy89/antiques-app:latest .

# Run the Docker container
echo "Starting Docker container..."
docker compose -f compose.yaml up -d

echo "Docker container is now running at http://localhost:3000" 