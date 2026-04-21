# Swiss Guest House Website

This is a modern [Next.js](https://nextjs.org) 16 project for Swiss Guest House, styled with Tailwind CSS v4 and shadcn-inspired UI components. It features a language switcher, smooth hero slideshow, and a responsive, visually rich homepage.

## Getting Started

## Features

- **Next.js 16 App Router**: Static prerendered pages for fast loads.
- **Tailwind CSS v4**: Custom design tokens, modern utilities, and responsive layouts.
- **shadcn-style UI**: Button, Sheet (mobile nav), and other primitives.
- **Lucide Icons**: Used for navigation, social, and section highlights.
- **Language Switcher**: Simple English/German toggle in the navbar.
- **Hero Slideshow**: Crossfade hero banner with smooth transitions and image preloading.
- **Feature Sections**: Each feature (Rooms, Meals, Location) has a custom icon, text, and responsive image grid.
- **Mobile Polish**: FeatureSection tiles stack and center for small screens; last image centers if odd count.
- **Global Polish**: White, bordered, rounded navbar/footer; smooth scrolling; hidden scrollbars.

## Getting Started

### Prerequisites

- **Node.js**: v18 or newer (recommended: [LTS version](https://nodejs.org/))
- **npm**: v9 or newer (comes with Node.js)

### 1. Install dependencies

In the `frontend` directory:

```bash
cd frontend
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Development server

Start the dev server (default: http://localhost:3000):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 3. Production build

To build and preview production output:

```bash
npm run build
npm start
```

### 4. Environment variables

No environment variables are required for local development. If you add API keys or secrets, create a `.env.local` file in the `frontend` directory.

### 5. Project structure

```
frontend/
├── public/                # Static assets (images, logo.svg, etc)
├── src/
│   ├── app/
│   │   ├── Home/
│   │   │   ├── components/ # Homepage sections (hero, welcome, highlights, feature-section, etc)
│   │   │   └── page.tsx    # Homepage layout
│   │   ├── components/     # Shared UI (navbar, footer, language-switcher, etc)
│   │   ├── layout.tsx      # App shell
│   │   └── page.tsx        # Root redirect
│   ├── lib/                # Utilities
│   └── styles/             # Tailwind, variables, global CSS
├── package.json
├── tailwind.config.js      # Tailwind config
├── postcss.config.mjs
└── ...
```

### 6. Linting & formatting

Run lint checks:

```bash
npm run lint
```

Format code with Prettier (if configured):

```bash
npm run format
```

### 7. Customization

- **Branding**: Replace images in `public/` and update logo.svg.
- **Colors & tokens**: Edit `src/styles/variables.css` and `globals.css` for theme.
- **Homepage content**: Edit `src/app/Home/page.tsx` and components in `src/app/Home/components/`.
- **Navigation**: Update links in `src/components/site-navbar.tsx` and `site-footer.tsx`.

---

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## Deployment

Deploy on [Vercel](https://vercel.com/) or your preferred static host. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
