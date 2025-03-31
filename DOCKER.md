# Docker Setup for Abingdon Antiques

This guide explains how to run the Abingdon Antiques website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd abingdon-antiques
```

2. Build and start the container:
```bash
docker-compose up -d
```

The website will be available at `http://localhost:3003`.

## Image Management

Images for the antiques and vendors pages are stored in the `public/images` directory:
- Antique images go in `public/images/antiques/`
- Vendor images go in `public/images/vendors/`

The Docker setup includes a volume mount for the images directory, so any images you add to these folders will be immediately available on the website.

## Container Management

### Start the container
```bash
docker-compose up -d
```

### Stop the container
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs -f
```

### Rebuild the container
```bash
docker-compose build --no-cache
docker-compose up -d
```

## Technical Details

- The application runs on Node.js 20 with the Alpine Linux base image
- Uses pnpm as the package manager
- Exposes port 3003 by default (can be changed in docker-compose.yml)
- Images directory is mounted as a volume for persistent storage

## Troubleshooting

1. If the website is not accessible:
   - Check if the container is running: `docker-compose ps`
   - Check the logs: `docker-compose logs -f`
   - Verify port 3003 is not in use by another application

2. If images are not showing up:
   - Verify the images are in the correct directory
   - Check folder permissions
   - Restart the container: `docker-compose restart` 