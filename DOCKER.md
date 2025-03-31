# Docker Setup Guide

This guide explains how to set up and run the Abingdon Antiques website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/Jaredy899/antiques.git
cd antiques
```

2. Build and start the container:
```bash
docker compose up -d
```

The website will be available at http://localhost:3000

## Image Management

### Building Images

```bash
# Build the image
docker compose build

# Rebuild with no cache
docker compose build --no-cache
```

### Container Management

```bash
# Start containers
docker compose up -d

# Stop containers
docker compose down

# View logs
docker compose logs -f

# Restart containers
docker compose restart
```

## Technical Details

- The application runs on Node.js 20
- Uses pnpm for package management
- Built with Next.js and TypeScript
- Styled with Tailwind CSS
- Serves static files from the `public` directory

## Troubleshooting

1. If the container fails to start:
   ```bash
   # Check container logs
   docker compose logs
   
   # Check container status
   docker compose ps
   ```

2. If you need to rebuild:
   ```bash
   docker compose down
   docker compose build --no-cache
   docker compose up -d
   ```

3. If you need to access the container shell:
   ```bash
   docker compose exec nextjs-app sh
   ```
