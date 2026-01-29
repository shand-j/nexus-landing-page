# Nexus Landing Page

Enterprise AI governance platform landing page featuring modern web technologies and a cyber-corporate brutalist design aesthetic.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📋 MVP Milestone

This project is currently in active MVP development. See detailed milestone planning:

- **[Complete Milestone Plan](MILESTONE_MVP.md)** - Full 6-phase breakdown with dates, priorities, and execution order
- **[Quick Reference](.github/QUICK_REFERENCE.md)** - Timeline, labels, and quick commands
- **[Label System](.github/LABELS.md)** - Complete tagging structure
- **[Issue Examples](.github/ISSUE_EXAMPLES.md)** - Template issues for each phase

### Timeline
- **Start:** February 3, 2026
- **Target Completion:** March 17, 2026 (6 weeks)
- **Status:** Phase 1 - Planning & Documentation

### Current Phase Tasks
1. ✅ Review codebase structure
2. ✅ Create milestone documentation
3. 🔄 Set up GitHub labels and milestone
4. 🔄 Create detailed issues with proper tagging

## 🏷️ Issue Tagging System

All issues use a structured labeling system:
- **Priority:** critical, high, medium, low
- **Type:** enhancement, bug, refactor, documentation, design
- **Phase:** phase:1-planning through phase:6-deploy
- **Component:** ui, page, backend, docs
- **Milestone:** milestone:mvp

See [Label System](.github/LABELS.md) for complete details.

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **Radix UI** - Component primitives
- **Framer Motion** - Animations
- **Wouter** - Routing

### Backend
- **Express** - Node.js server
- **TypeScript** - Type safety

### Development
- **ESBuild** - Fast bundling
- **Prettier** - Code formatting
- **Vitest** - Testing (configured)

## 🎨 Design System

Following the **Cyber-Corporate Brutalism** approach (detailed in [ideas.md](ideas.md)):

### Colors
- **Midnight Navy** `#0B1221` - Primary background
- **Electric Violet** `#6A0DAD` - Active states and alerts
- **Cyber Teal** `#00CED1` - Data flow and connectors
- **Stark White/Grey** - Content and data

### Typography
- **Headers:** Space Grotesk or Chakra Petch (monospace, bold)
- **Body:** Inter (clean, readable)

### Layout Principles
- Grid-based modular system
- Asymmetric balance
- Visible structure and connections
- Command center aesthetic

## 📁 Project Structure

```
nexus-landing-page/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── contexts/      # React contexts
│   │   ├── lib/          # Utilities and helpers
│   │   ├── App.tsx       # Main app component
│   │   └── main.tsx      # Entry point
│   └── index.html        # HTML template
├── server/                # Backend application
│   └── index.ts          # Express server
├── shared/               # Shared types/utilities
├── scripts/              # Build and utility scripts
│   └── setup-labels.sh   # GitHub label setup
├── .github/              # GitHub configuration
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   ├── workflows/        # CI/CD workflows
│   ├── LABELS.md         # Label documentation
│   ├── ISSUE_EXAMPLES.md # Example issues
│   └── QUICK_REFERENCE.md # Quick reference guide
└── MILESTONE_MVP.md      # Milestone planning document
```

## 🔧 Available Scripts

### Development
- `npm run dev` - Start Vite dev server with HMR
- `npm run check` - Type check with TypeScript

### Build
- `npm run build` - Build frontend and backend for production
- `npm run build:pages` - Build for GitHub Pages deployment

### Production
- `npm start` - Start production server
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run format` - Format code with Prettier

## 🚢 Deployment

### GitHub Pages
The site can be deployed to GitHub Pages:

```bash
npm run build:pages
# Commit and push the dist/public directory
```

See [GITHUB_PAGES.md](GITHUB_PAGES.md) for detailed deployment instructions.

### Production Server
For Express server deployment:

```bash
npm run build
NODE_ENV=production npm start
```

See [HTTPS.md](HTTPS.md) for HTTPS configuration details.

## 🧪 Testing

```bash
# Run tests (Vitest configured)
npm test

# Run tests in watch mode
npm test -- --watch
```

## 📐 Architecture Principles

### MVP Development Rules

**✅ DO:**
- Refactor existing UI components to add functionality
- Build on top of existing backend integration
- Use proper milestone tagging for all work
- Follow the design system consistently

**❌ DO NOT:**
- Wire new frontend to backend (mock/stub instead)
- Break existing backend connections
- Skip proper issue tagging and tracking
- Deviate from approved scope without discussion

## 🤝 Contributing

1. Check the [Milestone Plan](MILESTONE_MVP.md) for current priorities
2. Review [Issue Examples](.github/ISSUE_EXAMPLES.md) for proper formatting
3. Use the [Issue Template](.github/ISSUE_TEMPLATE/mvp-task.md) when creating issues
4. Follow the [Label System](.github/LABELS.md) for consistent tagging
5. Ensure all changes maintain or improve:
   - Lighthouse scores > 90
   - Accessibility (WCAG 2.1 AA)
   - Performance metrics
   - Existing backend integrations

## 📊 Success Metrics

### Launch Criteria
- [ ] All Phase 1-5 tasks completed
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90
- [ ] Zero critical bugs
- [ ] Documentation complete
- [ ] Stakeholder sign-off

## 📞 Support

- **Issues:** Use GitHub Issues with proper labels
- **Milestone:** [MVP Launch](https://github.com/shand-j/nexus-landing-page/milestones)
- **Documentation:** See [MILESTONE_MVP.md](MILESTONE_MVP.md)
- **Quick Help:** See [Quick Reference](.github/QUICK_REFERENCE.md)

## 📄 License

MIT

---

**Current Status:** Phase 1 - Planning & Documentation  
**Last Updated:** January 29, 2026  
**Maintained By:** Development Team
