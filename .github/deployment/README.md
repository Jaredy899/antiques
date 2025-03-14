# Server Deployment

This directory contains files needed for deploying the Antiques application to a production server.

## Prerequisites

1. Docker and Docker Compose installed on the server
2. A `.env` file with the required environment variables

## Environment Variables

Create a `.env` file in this directory with the following variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

## Deployment

The GitHub Actions workflow will automatically:

1. Build and push the Docker image to Docker Hub
2. Copy the deployment files to the server
3. Pull the latest image and restart the container

## Manual Deployment

If you need to deploy manually, run:

```bash
docker compose pull
docker compose up -d
```

## Network Setup

The compose file assumes you have a Docker network named `web` already set up. If not, create it:

```bash
docker network create web
```

This is useful if you're using a reverse proxy like Traefik or Nginx Proxy Manager. 