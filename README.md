# Abingdon Antiques Website

A modern, responsive website for Abingdon Antiques built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Fast page loads with Next.js
- Beautiful UI with Tailwind CSS
- Contact form integration
- Hours and location information
- Image gallery

## Getting Started

### Prerequisites

- Node.js 20.x or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jaredy899/antiques.git
cd antiques
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start the development server:
```bash
pnpm dev
```

The site will be available at http://localhost:3000

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── hours-location/    # Hours and location page
│   └── page.tsx           # Home page
├── components/            # React components
├── hooks/                 # Custom React hooks
├── styles/               # Global styles
└── utils/                # Utility functions
```

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Deployment

The site is configured for deployment on Vercel. Simply push to the main branch and Vercel will automatically deploy your changes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Important Notice about the Logo Image

The website is designed to use your Abingdon Antiques logo as the main header for each page. Please save the logo image to:

```
public/images/abingdon-antiques.webp
```

The image will automatically be used as the site header on all pages.

## Customization

### Adding Antique Items

To add or update antique items, edit the `antiqueItems` array in `