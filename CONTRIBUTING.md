# Contributing to Nexus Landing Page

Thank you for your interest in contributing to the Nexus Landing Page! This document provides guidelines and instructions for contributing.

## Table of Contents
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Code Standards](#code-standards)
- [Project Management](#project-management)
- [Need Help?](#need-help)

## Getting Started

### Prerequisites
- Node.js 20 or higher
- pnpm package manager

### Setup
```bash
# Clone the repository
git clone https://github.com/shand-j/nexus-landing-page.git
cd nexus-landing-page

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Project Structure
```
nexus-landing-page/
├── .github/               # GitHub configuration
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   ├── workflows/        # GitHub Actions workflows
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── PROJECT_MANAGEMENT.md
├── client/               # Frontend code
├── server/               # Backend code (if applicable)
├── shared/               # Shared utilities
├── scripts/              # Build and utility scripts
└── ...
```

## Development Workflow

1. **Check Existing Issues**
   - Search existing issues before creating new ones
   - Comment on issues you'd like to work on

2. **Create or Claim an Issue**
   - Use our detailed issue templates
   - Assign yourself to issues you're working on

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

4. **Make Changes**
   - Write clean, readable code
   - Follow existing code style
   - Add tests for new features
   - Update documentation as needed

5. **Test Your Changes**
   ```bash
   # Type check
   pnpm check
   
   # Format code
   pnpm format
   
   # Build
   pnpm build
   
   # Test locally
   pnpm dev
   ```

6. **Commit Your Changes**
   - Write clear, descriptive commit messages
   - Reference issue numbers in commits
   ```bash
   git commit -m "feat: add dark mode toggle (#123)"
   git commit -m "fix: resolve mobile menu issue (#456)"
   ```

7. **Push and Create PR**
   ```bash
   git push origin your-branch-name
   ```
   - Open a pull request on GitHub
   - Fill out the PR template completely
   - Link to related issues

8. **Review Process**
   - Address review comments
   - Make requested changes
   - Keep PR updated with main branch if needed

9. **Merge**
   - PRs will be merged by maintainers
   - Delete your branch after merge

## Issue Guidelines

We use detailed issue templates to ensure clear scoping. See [PROJECT_MANAGEMENT.md](.github/PROJECT_MANAGEMENT.md) for complete details.

### Creating Issues

**Choose the Right Template:**
- **Bug Report:** Something is broken
- **Feature Request:** New functionality or enhancement
- **Governance Task:** Security, compliance, or automation
- **Documentation:** Documentation updates

**Best Practices:**
- ✅ Use descriptive titles
- ✅ Fill in ALL required fields
- ✅ Provide clear acceptance criteria
- ✅ Add screenshots/videos when relevant
- ✅ Search for duplicates first
- ❌ Don't leave fields blank
- ❌ Don't be vague or unclear

### Issue Titles
Use prefixes for easy identification:
- `[BUG]` Bug reports
- `[FEATURE]` Feature requests
- `[GOVERNANCE]` Governance tasks
- `[DOCS]` Documentation

Examples:
- `[BUG] Mobile menu doesn't open on iOS Safari`
- `[FEATURE] Add dark mode toggle`
- `[GOVERNANCE] Implement automated security scanning`
- `[DOCS] Update API integration guide`

### Acceptance Criteria
Every issue should have clear, testable acceptance criteria:

```markdown
- [ ] User can click the theme toggle button
- [ ] Theme switches between light and dark modes
- [ ] Theme preference persists across sessions
- [ ] All components render correctly in both themes
- [ ] No console errors during theme switching
```

## Pull Request Guidelines

### PR Title Format
- Use descriptive titles
- Include issue number
- Examples:
  - `feat: add dark mode toggle (#123)`
  - `fix: resolve mobile menu bug (#456)`
  - `docs: update setup instructions (#789)`

### PR Description
Use our PR template and:
- Describe what changed and why
- Link to related issues
- Mark type of change
- List acceptance criteria met
- Include screenshots for UI changes
- Document any breaking changes
- Note deployment requirements

### Before Submitting
- [ ] Code follows project style guidelines
- [ ] All tests pass locally
- [ ] Added tests for new features
- [ ] Updated documentation
- [ ] No new warnings or errors
- [ ] Self-reviewed code
- [ ] Added meaningful commit messages
- [ ] Linked to related issue(s)

### Review Process
- Maintainers will review your PR
- Address feedback promptly
- Keep discussions professional and constructive
- Updates may be requested
- PR will be merged once approved

## Code Standards

### TypeScript/JavaScript
- Use TypeScript for type safety
- Follow existing code style
- Use functional components (React)
- Prefer composition over inheritance
- Write self-documenting code

### Naming Conventions
- **Components:** PascalCase (`Button.tsx`)
- **Functions:** camelCase (`handleClick`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **Files:** kebab-case (`user-profile.tsx`)

### Code Style
```typescript
// ✅ Good
interface UserProps {
  name: string;
  email: string;
}

export function UserCard({ name, email }: UserProps) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// ❌ Avoid
function user_card(props: any) {
  return <div><h2>{props.name}</h2></div>;
}
```

### Styling
- Use Tailwind CSS utility classes
- Follow existing design patterns
- Ensure responsive design
- Test on multiple browsers/devices
- Maintain accessibility standards

### Accessibility
- Use semantic HTML
- Include ARIA labels where appropriate
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios

### Performance
- Optimize images and assets
- Minimize bundle size
- Use lazy loading where appropriate
- Avoid unnecessary re-renders
- Profile performance changes

## Project Management

We use GitHub Projects for tracking work. See [PROJECT_MANAGEMENT.md](.github/PROJECT_MANAGEMENT.md) for complete details.

### Key Concepts

**Issue Fields:**
- **Status:** Backlog, Ready, In Progress, In Review, Done, Blocked
- **Priority:** P0 (Critical), P1 (High), P2 (Medium), P3 (Low)
- **Target Start Date:** When work begins (YYYY-MM-DD)
- **Due Date:** When work should complete (YYYY-MM-DD)
- **Area:** Which part of the application
- **Size:** XS, S, M, L, XL

**Automated Workflows:**
- Issues are auto-labeled based on type and content
- Due date reminders sent automatically
- Stale issues flagged after 30 days
- Project board updates automatically

### For Governance Tasks
Governance tasks require special attention:
- Set **Target Start Date** and **Due Date**
- Document current state and target state
- Provide detailed implementation plan
- List dependencies and risks
- Define success metrics

See the [Governance Task Template](.github/ISSUE_TEMPLATE/governance_task.yml) for details.

## Need Help?

### Documentation
- [Project Management Guide](.github/PROJECT_MANAGEMENT.md)
- [Issue Templates](.github/ISSUE_TEMPLATE/)
- [Main Nexus Project](https://github.com/shand-j/nexus)

### Getting Help
- 💬 [GitHub Discussions](https://github.com/shand-j/nexus-landing-page/discussions) - Ask questions
- 🐛 [Issue Tracker](https://github.com/shand-j/nexus-landing-page/issues) - Report bugs
- 📧 Contact: @shand-j

### Resources
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Assume good intentions
- Keep discussions professional

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Nexus Landing Page! 🚀
