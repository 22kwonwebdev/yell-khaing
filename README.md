# Yell Khaing - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library built on Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Framer Motion 12.15.0](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[pnpm](https://pnpm.io/)** - Package manager

### Additional Libraries
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching
- **[Sonner](https://sonner.emilkowalski.to/)** - Toast notifications

## 📁 Project Structure

```
yell-khaing/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── portfolio.tsx      # Main portfolio component
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui components (51+ items)
│   ├── loader.tsx         # Loading component
│   ├── theme-provider.tsx # Theme provider wrapper
│   └── theme-toggle.tsx   # Theme toggle button
├── hooks/                  # Custom React hooks
│   ├── use-mobile.tsx     # Mobile detection hook
│   └── use-toast.ts       # Toast notification hook
├── lib/                    # Utility functions and helpers
│   └── utils.ts           # Utility functions
├── public/                 # Static assets
└── styles/                 # Additional styles
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- pnpm package manager

### Installation Steps

1. **Install pnpm (if not already installed):**
   ```bash
   npm install -g pnpm
   ```

2. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd yell-khaing
   pnpm install
   ```

3. **Start development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Commands

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
```


## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Deployment
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
