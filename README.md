# Abingdon Antiques Website

This is the website for Abingdon Antiques and More Vendor Mall, built with Next.js and styled with Tailwind CSS.

## Important Notice about the Logo Image

The website is designed to use your Abingdon Antiques logo as the main header for each page. Please save the logo image to:

```
public/images/abingdon-antiques.webp
```

The image will automatically be used as the site header on all pages.

## Features

- Sepia-themed design to match the antique aesthetic
- Responsive layout that works on all devices
- Gallery for displaying antique items
- Hours and location information with map
- Contact form
- Vendor information
- SEO-friendly page structure

## Running the Website

### Development

To run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

To create a production build:

```bash
npm run build
# or
pnpm build
```

Then start the production server:

```bash
npm run start
# or
pnpm start
```

## Docker Support

This project can be run in a Docker container for easier deployment and consistent environments.

### Building and Running with Docker

1. Build the Docker image locally (only needed for testing):

```bash
docker build -t abingdon-antiques .
```

2. Run the container:

```bash
docker run -p 9000:3000 abingdon-antiques
```

The website will be available at [http://localhost:9000](http://localhost:9000).

### Using Docker Compose

For deployment, you can use Docker Compose with our pre-built image:

```bash
docker compose up -d
```

This will start the container in detached mode. The website will be available at [http://localhost:9000](http://localhost:9000).

### Continuous Integration/Deployment

This project uses GitHub Actions for CI/CD. Every push to the main branch automatically:
1. Builds a new Docker image
2. Pushes it to Docker Hub as `jaredy89/antiques-app:latest`

To use this feature:
1. Fork/clone this repository
2. Add your Docker Hub credentials as GitHub secrets:
   - `DOCKERHUB_USERNAME`
   - `DOCKERHUB_TOKEN`

### Deploying Updates

To deploy updates after pushing changes to GitHub:

```bash
# Pull the latest image
docker compose pull

# Restart the container with the new image
docker compose up -d
```

### Changing the Port

If you want to use a different port, edit the `compose.yaml` file and change the port mapping:
```yaml
ports:
  - "YOUR_PORT:3000"
```

### Environment Variables

If your application requires environment variables, create a `.env.production` file and uncomment the `env_file` section in the `compose.yaml` file.

### Production Deployment

For production deployment, consider using a reverse proxy like Nginx to handle SSL termination and serve the Next.js application.

## Customization

### Adding Antique Items

To add or update antique items, edit the `antiqueItems` array in `src/app/antiques/page.tsx`.

### Updating Hours and Location

Update your business hours and address in:
- `src/app/hours-location/page.tsx`
- `src/components/Footer.tsx`

### Map Integration

To add a real Google Maps embed, uncomment and update the iframe code in `src/app/hours-location/page.tsx`.
