# Copilot Instructions for Nexus Landing Page

## Project Overview

This is the **Nexus Landing Page** - a professional marketing website for Nexus, an enterprise AI governance and adoption platform. The landing page showcases Nexus's four core pillars: Govern, Guide, Validate, and Measure.

## Technology Stack

- **Frontend Framework**: React 19.2.1 with TypeScript 5.6.3
- **Build Tool**: Vite 7.1.7
- **Routing**: Wouter 3.3.5 (lightweight React router)
- **Styling**: Tailwind CSS 4.1.14 with custom theme
- **UI Components**: Radix UI primitives + custom components
- **Animations**: Framer Motion 12.23.22
- **Forms**: React Hook Form 7.64.0 with Zod 4.1.12 validation
- **Charts**: Recharts 2.15.2
- **Icons**: Lucide React 0.453.0
- **Backend** (Optional): Express 4.21.2 for SSR/API (minimal usage)
- **Testing**: Vitest 2.1.4 (unit tests), Playwright (e2e tests)

## Project Structure

```
nexus-landing-page/
├── .github/                    # GitHub workflows and configuration
│   └── workflows/             
│       └── deploy-pages.yml   # Automated GitHub Pages deployment
├── client/                     # Frontend application
│   ├── index.html             # Entry HTML file
│   ├── public/                # Static assets
│   └── src/
│       ├── App.tsx            # Root component with routing
│       ├── main.tsx           # React entry point
│       ├── index.css          # Global styles and Tailwind base
│       ├── components/        # Reusable React components
│       │   ├── ui/           # shadcn/ui components (Radix UI based)
│       │   ├── Layout.tsx    # Page layout wrapper
│       │   ├── ErrorBoundary.tsx
│       │   └── ...
│       ├── pages/             # Route components
│       │   ├── Home.tsx
│       │   ├── product/      # Product feature pages
│       │   ├── company/      # Company pages
│       │   └── legal/        # Legal pages
│       ├── contexts/          # React contexts
│       ├── hooks/             # Custom React hooks
│       ├── lib/               # Utility functions
│       └── const.ts           # Constants
├── server/                     # Optional backend (Express)
│   └── index.ts
├── shared/                     # Shared code between client/server
├── patches/                    # pnpm patches for dependencies
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── pnpm-lock.yaml             # Lock file (using pnpm)
```

## Design Philosophy

**Design Movement**: Precision Engineering / Swiss Style 2.0

### Color Palette

- **Midnight Navy (#1A2B4C)**: Primary background, conveying depth and authority
- **Electric Violet (#6A0DAD)**: Accent color for active states, CTAs, and highlights
- **Cyber Teal (#00CED1)**: Secondary accent for data visualization and connectors
- **Stark White/Grey**: Text and information display

### Design Principles

1. **Absolute Clarity**: Information presented with mathematical precision
2. **Grid-Based Order**: Rigorous grid system throughout
3. **Typographic Hierarchy**: Clear visual hierarchy using size and weight
4. **High Contrast**: Sharp distinction between elements for maximum readability

## Development Guidelines

### Code Style

- **TypeScript**: Use strict mode, avoid `any` types
- **Components**: Functional components with hooks (no class components)
- **File Naming**: PascalCase for components (e.g., `ProductCard.tsx`), camelCase for utilities
- **Imports**: Use path aliases `@/` for client src, `@shared/` for shared code
- **CSS**: Use Tailwind utility classes; create custom components in `components/ui/` for reusable patterns

### Component Patterns

1. **Layout Components**: Use `Layout.tsx` wrapper for consistent page structure
2. **UI Components**: Leverage existing Radix UI components from `components/ui/`
3. **Forms**: Use React Hook Form + Zod for validation
4. **Routing**: Use Wouter's `<Route>` and `useLocation` hooks
5. **Theme**: Dark theme is default; use ThemeContext for theme switching if needed

### Routing

- Base path is `/nexus-landing-page/` (for GitHub Pages)
- All routes defined in `client/src/App.tsx`
- Use Wouter's `<Link>` component for navigation
- 404 handling via catch-all route

### Building and Deployment

- **Development**: `pnpm dev` - Runs Vite dev server on port 3000
- **Production Build**: `pnpm build` - Builds client + server
- **GitHub Pages Build**: `pnpm build:pages` - Static site only
- **Type Check**: `pnpm check` - TypeScript validation
- **Format**: `pnpm format` - Prettier formatting

### Testing

- **Unit Tests**: Use Vitest for component and utility testing
- **E2E Tests**: Use Playwright for end-to-end testing
- Test files: `*.test.ts`, `*.test.tsx`, `*.spec.ts`, `*.spec.tsx`

### Performance Considerations

- Use React.lazy() for code splitting on route level
- Optimize images before adding to `client/public/`
- Keep bundle size minimal (tree-shake unused Radix components)
- Use Vite's fast refresh for development

### Accessibility

- Use semantic HTML elements
- Ensure keyboard navigation works
- Add ARIA labels where needed
- Maintain sufficient color contrast
- Test with screen readers

## Common Tasks

### Adding a New Page

1. Create component in `client/src/pages/` (e.g., `NewPage.tsx`)
2. Add route in `client/src/App.tsx`:
   ```tsx
   import NewPage from './pages/NewPage';
   // In Routes component:
   <Route path={"/new-page"} component={NewPage} />
   ```
3. Add navigation link in header/footer if needed

### Adding a New UI Component

1. If it's a Radix UI component, use shadcn/ui CLI or manually add to `components/ui/`
2. For custom components, create in `components/` directory
3. Export from component file for easy imports
4. Document props with TypeScript interfaces

### Updating Styles

- Global styles: `client/src/index.css`
- Tailwind config: Uses Tailwind v4 (configured via CSS)
- Custom utilities: Add to Tailwind configuration or create CSS modules

### Environment Variables

- Prefix with `VITE_` to expose to client (e.g., `VITE_API_URL`)
- Access via `import.meta.env.VITE_API_URL`
- Define in `.env` file (git-ignored)

## Dependencies Management

- **Package Manager**: pnpm (required)
- **Node Version**: 20+
- Add dependencies: `pnpm add <package>`
- Add dev dependencies: `pnpm add -D <package>`
- **Patches**: If needed, use `pnpm patch <package>` (see `patches/` directory)

## Important Notes

- The project uses Vite, not Next.js (despite some references in problem statements)
- Base path `/nexus-landing-page/` is crucial for GitHub Pages deployment
- React 19.2.1 has breaking changes from v18 - use new patterns
- Wouter is used instead of React Router for lightweight routing
- The project supports both static (GitHub Pages) and server (Express) deployments

## Best Practices

1. **Keep It Simple**: Prefer simple, readable code over clever solutions
2. **Type Safety**: Leverage TypeScript's type system fully
3. **Component Reusability**: Extract common patterns into reusable components
4. **Performance**: Lazy load routes, optimize images, minimize re-renders
5. **Documentation**: Comment complex logic, update this file when architecture changes
6. **Testing**: Write tests for critical user flows and complex logic

## Resources

- [Vite Documentation](https://vite.dev/)
- [React 19 Documentation](https://react.dev/)
- [Wouter Documentation](https://github.com/molefrog/wouter)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Playwright Documentation](https://playwright.dev/)
