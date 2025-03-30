# Docker Deployment Guide

This guide explains how to deploy the Abingdon Antiques application using Docker.

## Prerequisites

- Docker installed on your server (instructions at [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/))
- Docker Compose installed (instructions at [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/))
- Your application code cloned to the server

## Deployment Steps

1. **Clone the repository** (if not already done)
   ```bash
   git clone https://github.com/yourusername/antiques.git
   cd antiques
   ```

2. **Ensure environment variables are properly set**
   
   Check that `.env.production` file has all the required variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   # other variables as needed
   ```

3. **Build and start the Docker container**
   ```bash
   # Build and run the container in detached mode
   docker-compose up -d
   ```

4. **Check the application is running**
   ```bash
   docker-compose ps
   # Or check the logs
   docker-compose logs -f
   ```

5. **Access your application**
   
   The application will be available at http://your-server-ip:3003

## Managing the Docker Deployment

- **Stop the application**
  ```bash
  docker-compose down
  ```

- **Restart the application**
  ```bash
  docker-compose restart
  ```

- **Update the application**
  ```bash
  git pull
  docker-compose down
  docker-compose up --build -d
  ```

## Production Considerations

1. **Use a reverse proxy** like Nginx to handle SSL termination and routing
2. **Configure proper domain** and HTTPS with Let's Encrypt
3. **Set up monitoring** for the container health

## Troubleshooting

- **Check container logs**
  ```bash
  docker-compose logs nextjs-app
  ```

- **Access the container shell**
  ```bash
  docker-compose exec nextjs-app sh
  ```

- **Rebuild the container**
  ```bash
  docker-compose up --build -d
  ``` 