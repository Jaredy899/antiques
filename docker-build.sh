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

# Build the Docker image
echo "Building Docker image..."
docker compose -f compose.yaml build

# Run the Docker container
echo "Starting Docker container..."
docker compose -f compose.yaml up -d

echo "Docker container is now running at http://localhost:3000" 