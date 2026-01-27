# Nexus Landing Page

A professional landing page for **Nexus**, an enterprise AI governance and adoption platform. This project showcases Nexus's four core pillars: **Govern**, **Guide**, **Validate**, and **Measure**.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme**: Professional dark theme with Electric Violet and Cyber Teal accents
- **Performance**: Fast loading times with optimized assets
- **Accessibility**: WCAG-compliant with keyboard navigation support
- **SEO Ready**: Proper meta tags and semantic HTML
- **Comprehensive Testing**: End-to-end tests with Playwright across multiple browsers

## 📋 Prerequisites

- **Node.js**: 20+ (recommended)
- **pnpm**: 10.4.1+ (package manager)

## 🛠️ Getting Started

### Installation

```bash
# Install pnpm globally (if not already installed)
npm install -g pnpm

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Building

```bash
# Build for production (includes server)
pnpm build

# Build for GitHub Pages (static only)
pnpm build:pages

# Preview production build
pnpm preview
```

### Type Checking

```bash
# Run TypeScript type checker
pnpm check
```

### Code Formatting

```bash
# Format code with Prettier
pnpm format
```

## 🧪 Testing

This project uses **Playwright** for comprehensive end-to-end testing.

### Install Playwright Browsers

```bash
pnpm playwright install
```

### Run Tests

```bash
# Run all tests (headless)
pnpm test

# Run tests with UI (interactive)
pnpm test:ui

# Run tests in headed mode (visible browser)
pnpm test:headed

# Run tests for specific browser
pnpm test:chromium
pnpm test:firefox
pnpm test:webkit

# Run mobile tests
pnpm test:mobile

# Debug tests
pnpm test:debug

# View test report
pnpm test:report
```

### Test Coverage

Our test suite includes:

- **Navigation Tests**: Routing and page transitions
- **Home Page Tests**: Hero section, CTAs, product pillars
- **Product Pages Tests**: All four product pages (Govern, Guide, Validate, Measure)
- **Responsive Design Tests**: Mobile, tablet, and desktop viewports
- **Accessibility Tests**: WCAG compliance, keyboard navigation, screen readers
- **Performance Tests**: Load times, SEO, console errors

**Total: 220 tests across 6 test files**

For more details, see [TESTING.md](./TESTING.md).

## 📁 Project Structure

```
nexus-landing-page/
├── .github/                    # GitHub workflows and configuration
│   ├── copilot-instructions.md # AI coding agent guidelines
│   └── workflows/             
│       └── deploy-pages.yml   # Automated deployment
├── client/                     # Frontend application
│   ├── public/                # Static assets
│   └── src/
│       ├── components/        # React components
│       ├── pages/             # Route components
│       ├── contexts/          # React contexts
│       ├── hooks/             # Custom hooks
│       ├── lib/               # Utilities
│       └── App.tsx            # Root component
├── e2e/                        # Playwright tests
├── server/                     # Optional Express server
├── shared/                     # Shared utilities
├── playwright.config.ts       # Playwright configuration
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

- **Midnight Navy (#1A2B4C)**: Primary background
- **Electric Violet (#6A0DAD)**: Accent color for CTAs and highlights
- **Cyber Teal (#00CED1)**: Secondary accent for data visualization
- **Stark White/Grey**: Text and information display

### Design Philosophy

Based on **Precision Engineering / Swiss Style 2.0**:
- Absolute clarity in information presentation
- Grid-based order throughout
- Typographic hierarchy
- High contrast for readability

## 🚢 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push to `main` branch
2. GitHub Actions builds and deploys automatically
3. Site available at: `https://shand-j.github.io/nexus-landing-page/`

For more details, see [GITHUB_PAGES.md](./GITHUB_PAGES.md).

### Custom Deployment

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

The server runs on the port specified in your environment or defaults to port 3000.

## 📚 Documentation

- [Testing Guide](./TESTING.md) - Comprehensive testing documentation
- [GitHub Pages Deployment](./GITHUB_PAGES.md) - Deployment guide
- [Copilot Instructions](./.github/copilot-instructions.md) - AI coding agent guidelines

## 🛡️ Technology Stack

| Category | Technology |
|----------|-----------|
| Frontend | React 19.2.1 |
| Language | TypeScript 5.6.3 |
| Build Tool | Vite 7.1.7 |
| Routing | Wouter 3.3.5 |
| Styling | Tailwind CSS 4.1.14 |
| UI Components | Radix UI |
| Animations | Framer Motion 12.23.22 |
| Forms | React Hook Form + Zod |
| Testing | Playwright 1.58.0 |
| Icons | Lucide React |

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production (client + server) |
| `pnpm build:pages` | Build static site for GitHub Pages |
| `pnpm start` | Start production server |
| `pnpm preview` | Preview production build |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run all Playwright tests |
| `pnpm test:ui` | Run tests in interactive UI mode |
| `pnpm test:headed` | Run tests with visible browser |
| `pnpm test:chromium` | Run tests in Chromium only |
| `pnpm test:firefox` | Run tests in Firefox only |
| `pnpm test:webkit` | Run tests in WebKit only |
| `pnpm test:mobile` | Run mobile viewport tests |
| `pnpm test:debug` | Debug tests with Playwright Inspector |
| `pnpm test:report` | View HTML test report |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`pnpm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Vite](https://vite.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Testing with [Playwright](https://playwright.dev/)
