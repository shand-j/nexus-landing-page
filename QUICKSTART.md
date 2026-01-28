# Quick Start: Using GitHub Project Management

This is a quick reference guide to get started with the new GitHub project management features.

## 🚀 For Issue Creators

### Creating a Bug Report
1. Go to: https://github.com/shand-j/nexus-landing-page/issues/new/choose
2. Click "Bug Report"
3. **Required fields:**
   - Summary
   - Current Behavior
   - Expected Behavior
   - Steps to Reproduce
   - Severity (Critical/High/Medium/Low)
   - Component/Area
   - Browser & Version
   - Device/OS
   - Acceptance Criteria

4. Title format: `[BUG] Description here`
5. Submit → Issue is auto-labeled

### Creating a Feature Request
1. Go to: https://github.com/shand-j/nexus-landing-page/issues/new/choose
2. Click "Feature Request"
3. **Required fields:**
   - Feature Title
   - Problem Statement
   - Proposed Solution
   - User Stories
   - Priority (P0-P3)
   - Component/Area
   - Effort Estimate (XS/S/M/L/XL)
   - Acceptance Criteria

4. Title format: `[FEATURE] Description here`
5. Submit → Issue is auto-labeled

### Creating a Governance Task ⭐
1. Go to: https://github.com/shand-j/nexus-landing-page/issues/new/choose
2. Click "Governance Task"
3. **Required fields:**
   - Task Title
   - Governance Category
   - Objective
   - Current State
   - Target State
   - Priority (P0-P3)
   - Impact (High/Medium/Low)
   - **Target Start Date** (YYYY-MM-DD) ← **REQUIRED**
   - **Target Due Date** (YYYY-MM-DD) ← **REQUIRED**
   - Scope (In Scope / Out of Scope)
   - Acceptance Criteria
   - Implementation Plan

4. Title format: `[GOVERNANCE] Description here`
5. Submit → Issue is auto-labeled and validated

**Date Format Example:** `2026-02-15`

### Creating Documentation Task
1. Go to: https://github.com/shand-j/nexus-landing-page/issues/new/choose
2. Click "Documentation"
3. Fill required fields
4. Title format: `[DOCS] Description here`

## 🔄 For Developers

### Claiming an Issue
1. Find an issue in the backlog
2. Comment "I'll take this"
3. Assign yourself
4. Issue moves to "In Progress"

### Creating a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
# or
git checkout -b governance/task-name
```

### Creating a Pull Request
1. Push your branch
2. Open PR on GitHub
3. **Fill out the template:**
   - Description
   - Type of change
   - Related issues (use "Fixes #123")
   - Acceptance criteria met
   - Testing performed
   - Screenshots (for UI changes)

4. Complete all checklist items
5. Request review

## 📊 For Project Managers

### Setting Up GitHub Project (First Time)
1. Go to: https://github.com/users/shand-j/projects
2. Click "New Project" → "Table" view
3. Name: "Nexus Landing Page - Development"

4. **Add these custom fields:**
   - Status (Single Select): Backlog, Ready, In Progress, In Review, Done, Blocked
   - Priority (Single Select): P0 - Critical, P1 - High, P2 - Medium, P3 - Low
   - Target Start Date (Date)
   - Due Date (Date)
   - Epic (Text)
   - Area (Single Select): Navigation, Hero Section, Features, Contact Form, Footer, Infrastructure, Documentation, Governance
   - Size (Single Select): XS, S, M, L, XL
   - Assignee (People)

5. **Update workflow:**
   - Edit `.github/workflows/project-automation.yml`
   - Update `project-url` to your project URL
   - Format: `https://github.com/users/shand-j/projects/1`

6. Save and commit changes

### Managing the Project
- Issues are automatically added to the board
- Update Status as work progresses
- Filter by Priority, Area, or Assignee
- Sort by Due Date to focus on urgent items
- Monitor "approaching-due-date" and "overdue" labels

## 🤖 Automated Features

### Auto-Labeling
Issues are automatically labeled based on:
- Title: `[BUG]` → `bug` label
- Title: `[FEATURE]` → `enhancement` label
- Title: `[GOVERNANCE]` → `governance` label
- Title: `[DOCS]` → `documentation` label
- Priority in body: "P0 - Critical" → `priority:critical` label

### Due Date Reminders (Daily at 9 AM UTC)
- **3 days before due:** Comment + `approaching-due-date` label
- **Overdue:** Comment + `overdue` label
- **30 days stale:** Comment + `stale` label

### Project Board Automation
- New issues → Automatically added to board
- Assigned → Status changes to "In Progress"
- PR merged → Status changes to "Done"
- Governance issues → Validated for required fields

## 📖 Full Documentation

For complete details, see:
- **Setup Guide:** `.github/PROJECT_MANAGEMENT.md`
- **Examples:** `.github/GOVERNANCE_EXAMPLES.md`
- **Contributing:** `CONTRIBUTING.md`
- **Implementation:** `IMPLEMENTATION_SUMMARY.md`

## ⚡ Pro Tips

### Writing Acceptance Criteria
Use checkboxes and be specific:
```markdown
- [ ] User can click the button
- [ ] Button changes color on click
- [ ] Action completes within 2 seconds
- [ ] Success message displays
- [ ] No console errors
```

### Setting Due Dates
Use `YYYY-MM-DD` format in issue body:
```
Target Start Date: 2026-02-01
Target Due Date: 2026-02-15
```

### Linking Issues in PRs
Use keywords to auto-close issues:
```
Fixes #123
Closes #456
Resolves #789
```

### Priority Guidelines
- **P0** - Critical: Security, site down, blocking
- **P1** - High: Major features, important deadlines
- **P2** - Medium: Normal work, minor bugs
- **P3** - Low: Nice-to-have, future work

## 🆘 Troubleshooting

### Issue not auto-labeled?
- Check title has correct prefix: `[BUG]`, `[FEATURE]`, etc.
- Wait a few seconds for workflow to run
- Check Actions tab for errors

### Reminder not working?
- Check date format: `2026-02-15` (not `2/15/2026`)
- Workflow runs at 9 AM UTC daily
- Can manually trigger in Actions tab

### Issue not added to project?
- Verify project URL in `project-automation.yml`
- Check Actions tab for errors
- Manually add to project as fallback

## 📞 Need Help?

- 💬 [Discussions](https://github.com/shand-j/nexus-landing-page/discussions)
- 📚 [Full Documentation](.github/PROJECT_MANAGEMENT.md)
- 🐛 [Report Issue](https://github.com/shand-j/nexus-landing-page/issues/new/choose)

---

**Start creating well-scoped tickets now!** 🎯
