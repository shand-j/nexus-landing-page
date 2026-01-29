# Copilot Instructions for Nexus Landing Page

## Project Overview

**Nexus Landing Page** is a professional marketing/landing website for Nexus, an enterprise AI governance and adoption platform. The application showcases the platform's four core pillars: Govern, Guide, Validate, and Measure.

### Tech Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS v4 with custom theme
- **UI Components**: Radix UI primitives (shadcn/ui patterns)
- **Routing**: Wouter 3.7.1 (lightweight client-side router, with custom patch applied)
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Backend**: Express.js (minimal server for production)
- **Package Manager**: pnpm (v10.4.1+)

## Project Structure

```
nexus-landing-page/
├── client/                      # Frontend application
│   ├── public/                  # Static assets (images, fonts)
│   ├── src/
│   │   ├── pages/              # Route components
│   │   │   ├── Home.tsx
│   │   │   ├── product/        # Product pages (Govern, Guide, Validate, Measure)
│   │   │   ├── company/        # Company pages (About, Careers, Contact, Blog)
│   │   │   └── legal/          # Legal pages (Privacy, Terms, Security)
│   │   ├── components/
│   │   │   ├── ui/             # 50+ Radix UI-based components
│   │   │   ├── Layout.tsx      # Main layout with header/footer
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── Map.tsx
│   │   ├── contexts/           # React contexts (ThemeContext)
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/                # Utilities (utils.ts)
│   │   ├── App.tsx             # Main app with routing
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Tailwind config and theme
│   └── index.html
├── server/                      # Express server
│   └── index.ts
├── shared/                      # Shared constants/types
└── .github/
    └── workflows/
        └── deploy-pages.yml     # GitHub Pages deployment

```

## Architecture & Patterns

### Routing
- Uses **Wouter** for client-side routing (not React Router)
- All routes are defined in `client/src/App.tsx`
- Base path is configured via `import.meta.env.BASE_URL`
- SPA routing enabled on GitHub Pages via 404.html fallback

### Component Patterns
1. **UI Components** (`client/src/components/ui/`):
   - Based on Radix UI primitives
   - Follow shadcn/ui patterns
   - Use class-variance-authority (cva) for variants
   - All use the `cn()` utility for className merging

2. **Page Components** (`client/src/pages/`):
   - Each page is a default export
   - Wrapped in `<Layout>` component
   - Use Framer Motion for animations
   - Follow the established design system

3. **Layout Component**:
   - Fixed header with navigation
   - Mobile-responsive with Sheet component for mobile menu
   - Footer with links and branding

### Styling & Theme
- **Dark theme by default** (configurable in `App.tsx`)
- Design inspired by "Cyber-Corporate Brutalism" aesthetic
- Color palette:
  - Deep Void background (#050A14)
  - Electric Violet accent (#8B5CF6)
  - Cyber Teal accent (#06B6D4)
  - Subtle grid overlays
- Typography:
  - Headers: Space Grotesk (monospace feel)
  - Body: Inter
- All colors use CSS custom properties (CSS variables)
- TailwindCSS v4 with `@theme inline` directive

### State Management
- Theme: React Context (`ThemeContext`)
- Form state: React Hook Form
- Animation state: Framer Motion hooks
- No global state management library (Redux, Zustand, etc.)

## Coding Conventions

### TypeScript
- **Strict mode enabled**
- Use `interface` for object shapes, `type` for unions/intersections
- Prefer explicit types over inference for props and public APIs
- Use path aliases: `@/*` for client src, `@shared/*` for shared code

### Component Structure
```typescript
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface MyComponentProps {
  title: string;
  variant?: "default" | "outline";
  children?: React.ReactNode;
}

export default function MyComponent({ 
  title, 
  variant = "default", 
  children 
}: MyComponentProps) {
  return (
    <div className={cn("base-classes", variant === "outline" && "outline-classes")}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

### Styling Guidelines
- Use TailwindCSS utility classes (no CSS modules or styled-components)
- Use `cn()` helper for conditional/merged classNames
- Prefer semantic class grouping: layout → spacing → typography → colors
- Use Tailwind's design tokens (spacing, colors, etc.)
- Dark mode: Use `dark:` variant prefix (configured as `.dark` class)

### Code Formatting
- **Prettier** for code formatting (configured in `.prettierrc`)
- 2-space indentation
- Double quotes for strings
- Semicolons required
- Trailing commas in ES5
- Run `pnpm run format` before committing

### Naming Conventions
- Components: PascalCase (e.g., `Button.tsx`, `HomePage.tsx`)
- Files: PascalCase for components, camelCase for utilities
- CSS classes: Use Tailwind utilities, not custom classes
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE (if truly constant)

## Development Workflow

### Getting Started
```bash
# Install dependencies
pnpm install

# Start dev server (port 3000)
pnpm run dev

# Type check
pnpm run check

# Format code
pnpm run format
```

### Building
```bash
# Full build (client + server)
pnpm run build

# GitHub Pages build (static only)
pnpm run build:pages

# Preview production build
pnpm run preview
```

### Testing
- **No test suite currently configured** (vitest is installed but not used)
- Manual testing required for all changes
- Test in both desktop and mobile viewports
- Verify all routes and navigation

### Deployment
- **GitHub Pages** deployment via GitHub Actions
- Auto-deploys on push to `main` branch
- Workflow: `.github/workflows/deploy-pages.yml`
- Uses `build:pages` script (creates 404.html for SPA routing)
- Custom domain: `get-nexus.app`

## Common Tasks

### Adding a New Page
1. Create page component in `client/src/pages/`
2. Add route to `client/src/App.tsx`
3. Update navigation in `client/src/components/Layout.tsx` if needed
4. Follow existing page patterns (use Layout, Framer Motion)

### Adding a New UI Component
1. Create in `client/src/components/ui/` (if reusable)
2. Follow Radix UI + shadcn/ui patterns
3. Use cva for variants
4. Export component and any type definitions

### Updating Styles/Theme
1. CSS variables in `client/src/index.css`
2. TailwindCSS theme in `@theme inline` block
3. Use existing color system (background, foreground, primary, accent, etc.)

### Working with Assets
- Place images in `client/public/`
- Reference via `basePath` variable: `` `${basePath}image.png` ``
- basePath comes from `import.meta.env.BASE_URL`

## Important Notes

### What NOT to Do
- ❌ Don't install React Router (use Wouter)
- ❌ Don't add CSS modules or styled-components
- ❌ Don't modify the base TailwindCSS configuration without discussion
- ❌ Don't add large dependencies without justification
- ❌ Don't change the package manager from pnpm
- ❌ Don't modify the base path in vite.config.ts without understanding deployment implications

### Gotchas
- **Routing**: Use `<Link href="...">` from wouter, not `<a>` for internal links
- **Base Path**: Always use `${basePath}` prefix for public assets
- **Dark Mode**: Theme is dark by default, ensure all new components support it
- **Mobile**: Test all new UI on mobile (use Sheet for mobile menus)
- **TypeScript**: Run `pnpm run check` to catch type errors before building
- **Prettier**: Auto-format will change your code style to match project conventions

## Key Files to Review

When making changes, review these files first:
- `client/src/App.tsx` - Routing configuration
- `client/src/components/Layout.tsx` - Site-wide layout and navigation
- `client/src/index.css` - Theme and global styles
- `vite.config.ts` - Build configuration
- `package.json` - Scripts and dependencies
- `tsconfig.json` - TypeScript configuration

## Design Philosophy

The design follows a "Cyber-Corporate Brutalism" aesthetic:
- **Heavy, authoritative typography**
- **Grid-based layouts** with visible structure
- **High contrast** (dark navy background, bright accents)
- **Precise, mechanical interactions**
- **Data visualization** emphasis (charts, metrics)
- **Monospaced fonts** for technical feel (Space Grotesk)

When adding new features or components, maintain this aesthetic.

## Support & Documentation

- **Vite**: https://vitejs.dev/
- **React**: https://react.dev/
- **TailwindCSS**: https://tailwindcss.com/
- **Radix UI**: https://www.radix-ui.com/
- **shadcn/ui**: https://ui.shadcn.com/
- **Wouter**: https://github.com/molefrog/wouter
- **Framer Motion**: https://www.framer.com/motion/

---

**Last Updated**: January 2026
