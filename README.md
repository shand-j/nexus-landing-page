# Nexus Landing Page

A modern, responsive landing page for Nexus - AI Governance and Adoption Platform.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

Visit `http://localhost:5173` to see the site.

## 📋 Project Overview

This repository contains the landing page for Nexus, showcasing the platform's features and providing a contact point for potential users.

**Tech Stack:**
- React 19 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Radix UI components
- Framer Motion for animations
- Express server for production

## 🏗️ Project Structure

```
nexus-landing-page/
├── client/              # Frontend React application
│   ├── src/            # Source code
│   └── public/         # Static assets
├── server/             # Express server
├── .github/            # GitHub configuration
│   ├── ISSUE_TEMPLATE/ # Issue templates
│   ├── workflows/      # GitHub Actions
│   └── *.md           # Documentation
├── scripts/            # Build scripts
└── shared/            # Shared utilities
```

## 📚 Documentation

- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute to this project
- **[Project Management](.github/PROJECT_MANAGEMENT.md)** - GitHub project management guide
- **[Governance Examples](.github/GOVERNANCE_EXAMPLES.md)** - Example governance tickets
- **[GitHub Pages Deployment](GITHUB_PAGES.md)** - Deployment to GitHub Pages
- **[HTTPS Setup](HTTPS.md)** - HTTPS configuration

## 🎯 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

### Quick Contribution Steps

1. **Check existing issues** or create a new one using our detailed templates
2. **Assign yourself** to the issue you want to work on
3. **Create a branch** from main
4. **Make your changes** following our code standards
5. **Submit a PR** using our pull request template
6. **Address review feedback**

### Issue Templates

We have detailed issue templates to ensure comprehensive scoping:

- **🐛 [Bug Report](.github/ISSUE_TEMPLATE/bug_report.yml)** - Report bugs or issues
- **✨ [Feature Request](.github/ISSUE_TEMPLATE/feature_request.yml)** - Propose new features
- **🔒 [Governance Task](.github/ISSUE_TEMPLATE/governance_task.yml)** - Security, compliance, automation
- **📝 [Documentation](.github/ISSUE_TEMPLATE/documentation.yml)** - Documentation updates

## 🤖 Automated Workflows

This repository uses GitHub Actions for automation:

### Auto-Labeling
Issues are automatically labeled based on:
- Title prefix ([BUG], [FEATURE], [GOVERNANCE], [DOCS])
- Priority level (P0-P3)
- Security and accessibility keywords

### Project Board Automation
- New issues/PRs automatically added to project board
- Status updates based on events
- Validation of governance issue completeness
- Critical issue notifications

### Due Date Reminders
- Daily checks for approaching due dates (within 3 days)
- Overdue issue notifications
- Stale issue detection (30 days inactive)

See [Project Management Guide](.github/PROJECT_MANAGEMENT.md) for details.

## 📊 GitHub Project Setup

We use GitHub Projects for tracking work with custom fields:

**Custom Fields:**
- **Status:** Backlog → Ready → In Progress → In Review → Done
- **Priority:** P0 (Critical) → P1 (High) → P2 (Medium) → P3 (Low)
- **Target Start Date:** When work begins (YYYY-MM-DD)
- **Due Date:** When work should complete (YYYY-MM-DD)
- **Area:** Navigation, Hero, Features, Contact, Footer, etc.
- **Size:** XS, S, M, L, XL

### Setting Up the Project

1. Create a new GitHub Project at https://github.com/users/shand-j/projects
2. Add custom fields as listed above
3. Update project URL in `.github/workflows/project-automation.yml`
4. Enable GitHub Actions

Full setup instructions in [Project Management Guide](.github/PROJECT_MANAGEMENT.md).

## 🔐 Governance

For governance, security, and compliance tasks, use our [Governance Task Template](.github/ISSUE_TEMPLATE/governance_task.yml).

**Key Features:**
- Required target start and due dates
- Detailed scoping (in scope / out of scope)
- Implementation plans
- Risk assessment
- Success metrics
- Compliance requirements

See [Governance Examples](.github/GOVERNANCE_EXAMPLES.md) for detailed examples.

## 🧪 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start dev server with hot reload
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier

# Building
pnpm build        # Build for production (server + client)
pnpm build:pages  # Build for GitHub Pages

# Production
pnpm start        # Start production server
pnpm preview      # Preview production build locally
```

### Code Standards

- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Prettier** for code formatting
- **ESM** modules
- **Functional React** components

See [Contributing Guide](CONTRIBUTING.md) for detailed code standards.

## 🚢 Deployment

### GitHub Pages
The site is automatically deployed to GitHub Pages on push to main branch.

See [GITHUB_PAGES.md](GITHUB_PAGES.md) for details.

### Production Server
```bash
pnpm build
pnpm start
```

The Express server serves the built static files.

## 🔗 Related Projects

- **[Nexus](https://github.com/shand-j/nexus)** - Main Nexus project
- **[Discussions](https://github.com/shand-j/nexus-landing-page/discussions)** - Community discussions

## 📞 Support

- 💬 [GitHub Discussions](https://github.com/shand-j/nexus-landing-page/discussions) - Ask questions
- 🐛 [Issue Tracker](https://github.com/shand-j/nexus-landing-page/issues) - Report bugs
- 📧 Contact: @shand-j

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

**Ready to contribute?** Check out our [Contributing Guide](CONTRIBUTING.md) and [open issues](https://github.com/shand-j/nexus-landing-page/issues)!
