# Quality Work Granite

Modern website for Quality Work Granite, showcasing premium granite and stone solutions. Built with Next.js 16, React 19, and modern web technologies.

## Features

- 🎨 Responsive design with modern UI
- 🌓 Dark mode support with system preference detection
- 🖼️ Interactive image gallery
- 📧 Contact form with EmailJS integration
- 🏗️ Service showcase pages
- ⚡ Optimized performance with Turbopack
- 🎭 Smooth animations with Framer Motion

## Tech Stack

- **Framework**: Next.js 16.0.0 with Turbopack
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.0.0
- **Theme**: next-themes 0.2.1
- **Icons**: Lucide React 0.462.0
- **Email**: EmailJS Browser 4.4.1, Nodemailer 7.0.9

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 11.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cbalaur91/quality-work-granite.git
   cd quality-work-granite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Project Structure

```
quality-work-granite/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── gallery/      # Gallery page
│   │   ├── services/     # Services page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   └── components/       # React components
│       ├── Footer.tsx
│       ├── navigation.tsx
│       └── theme-provider.tsx
├── public/               # Static assets
└── VERIFICATION_CHECKLIST.md  # Deployment checklist
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint (Note: Known issue in Next.js 16.0.0)

## Known Issues

### ESLint Circular Reference (Non-Breaking)
There's a known bug in Next.js 16.0.0 with ESLint 9 causing `npm run lint` to fail with a circular reference error. This:
- **Only affects** local linting command
- **Does not affect** production builds, deployments, or runtime
- **Workaround**: Use `npx tsc --noEmit` for type checking

See [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md) for more details.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

For detailed verification steps before deployment, see [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md).

## Contact Information

- **Phone**: (734) 334-7522
- **Email**: tonytzaeu@yahoo.com
- **Address**: 26086 W 8 Mile Rd, Southfield, Michigan
- **Hours**: Mon-Fri: 8am-6pm | Sat: 9am-4pm | Sun: Closed

## License

This project is private and proprietary.
