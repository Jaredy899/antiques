# GitHub Actions Workflows

This directory contains GitHub Actions workflows for building, pushing, and deploying the Antiques application.

## Required Secrets

You need to set up the following secrets in your GitHub repository:

### Docker Hub Secrets

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: A Docker Hub access token (not your password)

### Clerk Authentication Secrets

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
- `CLERK_SECRET_KEY`: Your Clerk secret key

### Deployment Secrets

- `SERVER_HOST`: The hostname or IP address of your deployment server
- `SERVER_USERNAME`: The SSH username for your deployment server
- `SERVER_SSH_KEY`: The private SSH key for connecting to your deployment server

## Setting Up Secrets

1. Go to your GitHub repository
2. Click on "Settings"
3. Click on "Secrets and variables" > "Actions"
4. Click on "New repository secret"
5. Add each of the required secrets

## Workflows

### `docker-build-push.yml`

This workflow builds and pushes the Docker image to Docker Hub when changes are pushed to the main branch.

### `deploy.yml`

This workflow deploys the application to your server after the Docker image is built and pushed.

## Manual Deployment

You can manually trigger either workflow from the "Actions" tab in your GitHub repository. 