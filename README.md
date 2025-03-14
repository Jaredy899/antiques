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

## Customization

### Adding Antique Items

To add or update antique items, edit the `antiqueItems` array in `src/app/antiques/page.tsx`.

### Updating Hours and Location

Update your business hours and address in:
- `src/app/hours-location/page.tsx`
- `src/components/Footer.tsx`

### Map Integration

To add a real Google Maps embed, uncomment and update the iframe code in `src/app/hours-location/page.tsx`.

### Environment Variables

If your application requires environment variables, create a `.env` file with the necessary variables for local development and a `.env.production` file for production deployment.
