# Stratech Website

A modern, responsive website for Stratech, a technology solutions company, built with Next.js, Tailwind CSS, and TypeScript.

## Features

- Responsive design optimized for all devices
- Modern UI with a professional blue and white color scheme
- Interactive components and smooth animations
- SEO-friendly with Next.js App Router
- TypeScript for type safety
- Tailwind CSS for styling

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd stratech-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add any necessary environment variables:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
stratech-website/
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
├── public/               # Static assets
│   ├── logo.png         # Company logo
│   └── partners/        # Partner logos
├── styles/              # Global styles
└── types/              # TypeScript type definitions
```

## Deployment

The website is configured for deployment on Vercel. To deploy:

1. Install the Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons in React

## License

This project is licensed under the MIT License - see the LICENSE file for details. 