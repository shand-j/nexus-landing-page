# GitHub Project Management Guide

This guide explains how to use the GitHub project management features configured for this repository.

## Table of Contents
- [Issue Templates](#issue-templates)
- [Pull Request Template](#pull-request-template)
- [Automated Workflows](#automated-workflows)
- [GitHub Projects Configuration](#github-projects-configuration)
- [Best Practices](#best-practices)

## Issue Templates

We have four issue templates to ensure tickets are scoped with appropriate detail:

### 1. Bug Report (`bug_report.yml`)
Use for reporting bugs or issues with the landing page.

**Required Fields:**
- Summary
- Current Behavior
- Expected Behavior
- Steps to Reproduce
- Severity (Critical/High/Medium/Low)
- Component/Area
- Browser & Version
- Device/OS
- Acceptance Criteria

**When to Use:**
- Something is broken or not working as intended
- Visual/layout issues
- Performance problems
- Error messages or console errors

### 2. Feature Request (`feature_request.yml`)
Use for proposing new features or enhancements.

**Required Fields:**
- Feature Title
- Problem Statement
- Proposed Solution
- User Stories
- Priority (P0-P3)
- Component/Area
- Estimated Effort (XS/S/M/L/XL)
- Acceptance Criteria
- Technical Considerations

**When to Use:**
- Proposing new functionality
- Suggesting improvements to existing features
- UI/UX enhancements

### 3. Governance Task (`governance_task.yml`)
Use for governance, compliance, security, or automation tasks.

**Required Fields:**
- Task Title
- Governance Category
- Objective
- Current State
- Target State
- Priority (P0-P3)
- Impact (High/Medium/Low)
- **Target Start Date** (YYYY-MM-DD)
- **Target Due Date** (YYYY-MM-DD)
- Scope (In Scope / Out of Scope)
- Acceptance Criteria
- Implementation Plan

**Additional Fields:**
- Dependencies & Blockers
- Risks & Mitigation
- Stakeholders
- Compliance/Regulatory Requirements
- Success Metrics
- Rollout Plan
- Automation Details

**When to Use:**
- Setting up CI/CD workflows
- Implementing security measures
- Compliance and audit tasks
- Process automation
- Documentation standards
- Quality assurance initiatives

### 4. Documentation (`documentation.yml`)
Use for creating or updating documentation.

**Required Fields:**
- Documentation Title
- Documentation Type
- Purpose
- Current State
- Target State
- Priority (P0-P3)
- Scope
- Acceptance Criteria

**When to Use:**
- Creating new documentation
- Updating existing docs
- API documentation
- Setup guides
- Architecture documentation

## Pull Request Template

Our PR template ensures comprehensive documentation of changes.

**Key Sections:**
- Description of changes
- Type of change (bug fix, feature, etc.)
- Related issues
- Acceptance criteria met
- Testing performed
- Screenshots/videos for UI changes
- Performance and security considerations
- Deployment notes
- Documentation updates

**Checklist Items:**
- Code follows style guidelines
- Self-review performed
- Tests added and passing
- Documentation updated
- Security checked
- Browser/device testing (if applicable)

## Automated Workflows

### Auto Label Issues (`auto-label-issues.yml`)
Automatically labels issues based on:
- Issue title prefix ([BUG], [FEATURE], [GOVERNANCE], [DOCS])
- Priority indicators (P0-P3)
- Security keywords
- Accessibility keywords

**Labels Applied:**
- `bug`, `enhancement`, `governance`, `documentation`
- `priority:critical`, `priority:high`, `priority:medium`, `priority:low`
- `security`, `accessibility`

### Project Board Automation (`project-automation.yml`)
Automates project board management:
- Adds new issues/PRs to the project board
- Updates status based on events
- Validates governance issues have required fields
- Notifies stakeholders on critical issues

**Features:**
- Automatic project assignment
- Status updates (Backlog → In Progress → Done)
- Validation comments on governance issues
- Critical priority notifications

### Due Date Reminders (`due-date-reminders.yml`)
Monitors and reminds about due dates:
- Runs daily at 9 AM UTC
- Checks for approaching due dates (within 3 days)
- Identifies overdue issues
- Flags stale issues (no activity in 30 days)

**Labels Applied:**
- `approaching-due-date` - Due within 3 days
- `overdue` - Past due date
- `stale` - No activity in 30 days

**Automated Actions:**
- Posts reminder comments
- Suggests next actions
- Flags stale issues for review

## GitHub Projects Configuration

### Setting Up Your Project

1. **Create a GitHub Project:**
   ```
   Go to: https://github.com/users/shand-j/projects
   Click: "New Project" → "Board" or "Table"
   Name: "Nexus Landing Page - Development"
   ```

2. **Add Custom Fields:**
   
   Create these custom fields in your project:
   
   - **Status** (Single Select)
     - Backlog
     - Ready
     - In Progress
     - In Review
     - Done
     - Blocked
   
   - **Priority** (Single Select)
     - P0 - Critical
     - P1 - High
     - P2 - Medium
     - P3 - Low
   
   - **Target Start Date** (Date)
     - When work should begin
   
   - **Due Date** (Date)
     - When work should be completed
   
   - **Epic** (Text)
     - Group related issues
   
   - **Area** (Single Select)
     - Navigation
     - Hero Section
     - Features
     - Contact Form
     - Footer
     - Infrastructure
     - Documentation
     - Governance
   
   - **Size** (Single Select)
     - XS (< 1 day)
     - S (1-2 days)
     - M (3-5 days)
     - L (1-2 weeks)
     - XL (> 2 weeks)
   
   - **Assignee** (People)
     - Who is working on this

3. **Configure Project URL:**
   
   Update the project URL in `.github/workflows/project-automation.yml`:
   ```yaml
   project-url: https://github.com/users/shand-j/projects/YOUR_PROJECT_NUMBER
   ```

4. **Enable Workflows:**
   
   Ensure GitHub Actions are enabled in your repository settings.

### Using the Project Board

#### Creating Issues
1. Click "New issue" in the repository
2. Select the appropriate template
3. Fill in all required fields
4. Pay special attention to:
   - **Target Start Date** (for governance tasks)
   - **Target Due Date** (for governance tasks)
   - **Acceptance Criteria** (all templates)
   - **Priority** (all templates)

#### Managing Issues
- Issues are automatically added to the project board
- Update the **Status** field as work progresses
- Assign issues to team members
- Add issues to **Epics** for better organization
- Monitor **Due Date** and respond to reminders

#### Tracking Progress
- Use the board view for kanban-style workflow
- Use the table view for detailed information
- Filter by Priority, Area, or Assignee
- Sort by Due Date to focus on urgent items

## Best Practices

### Issue Creation
1. **Use the Right Template:** Choose the template that best matches your need
2. **Be Specific:** Provide detailed descriptions and clear acceptance criteria
3. **Set Dates:** Always set target start and due dates for governance tasks
4. **Link Related Issues:** Reference related issues using #issue_number
5. **Add Labels:** Labels are auto-applied but you can add more if needed

### Acceptance Criteria
Write clear, testable acceptance criteria:
- Use checkboxes: `- [ ] Criteria item`
- Be specific and measurable
- Include all success conditions
- Consider edge cases

**Good Example:**
```markdown
- [ ] Contact form validates email format before submission
- [ ] Success message displays after successful submission
- [ ] Error messages show for invalid inputs
- [ ] Form clears after successful submission
- [ ] No console errors during form interaction
```

**Bad Example:**
```markdown
- [ ] Form works
- [ ] No errors
```

### Target Dates (Governance Tasks)
- **Target Start Date:** When you plan to begin work
- **Target Due Date:** When the work should be complete
- Use format: YYYY-MM-DD (e.g., 2026-02-15)
- Be realistic with estimates
- Update dates if priorities change

### Priority Guidelines
- **P0 - Critical:** 
  - Security vulnerabilities
  - Site is down or unusable
  - Compliance violations
  - Blocking other work
  
- **P1 - High:**
  - Major features broken
  - Significant user impact
  - Important deadlines
  
- **P2 - Medium:**
  - Minor bugs
  - Feature improvements
  - Normal development work
  
- **P3 - Low:**
  - Nice-to-have features
  - Minor enhancements
  - Future considerations

### Governance Tasks
For governance tasks, ensure you document:
1. **Current State:** What exists today?
2. **Target State:** What should exist?
3. **Gap Analysis:** What's missing?
4. **Implementation Plan:** Step-by-step approach
5. **Dependencies:** What blocks this work?
6. **Risks:** What could go wrong?
7. **Success Metrics:** How to measure success?

### Pull Requests
1. **Link to Issues:** Always reference the issue being addressed
2. **Complete the Template:** Fill in all sections
3. **Add Screenshots:** For any UI changes
4. **Test Thoroughly:** Check all acceptance criteria
5. **Update Documentation:** Keep docs in sync with code changes

### Responding to Automation
- **Due Date Reminders:** Respond within 24 hours
  - Update status if in progress
  - Adjust due date if needed
  - Close if complete
  
- **Stale Issue Notices:** Respond within 7 days
  - Comment with update
  - Close if no longer relevant
  
- **Validation Comments:** Address feedback
  - Add missing information
  - Update issue as requested

## Workflow Example

### Complete Issue Lifecycle

1. **Issue Created**
   - Use governance task template
   - Set target start: 2026-02-01
   - Set due date: 2026-02-15
   - Add detailed acceptance criteria

2. **Auto-Labeled**
   - Workflow adds `governance` and `priority:high` labels
   - Issue added to project board in "Backlog" status

3. **Work Begins**
   - Assign issue to yourself
   - Move to "In Progress" status
   - Create PR with changes

4. **PR Created**
   - Use PR template
   - Link to issue with "Fixes #123"
   - Request reviews

5. **Review & Merge**
   - Address review comments
   - Merge when approved
   - Issue auto-closes

6. **Monitoring**
   - If approaching due date, receive reminder
   - If overdue, receive overdue notice
   - If stale, receive stale notice

## Configuration Files

All configuration files are in `.github/`:

- **Issue Templates:** `.github/ISSUE_TEMPLATE/`
  - `bug_report.yml`
  - `feature_request.yml`
  - `governance_task.yml`
  - `documentation.yml`
  - `config.yml`

- **PR Template:** `.github/PULL_REQUEST_TEMPLATE.md`

- **Workflows:** `.github/workflows/`
  - `auto-label-issues.yml`
  - `project-automation.yml`
  - `due-date-reminders.yml`
  - `deploy-pages.yml`

## Troubleshooting

### Workflows Not Running
- Check GitHub Actions are enabled in repository settings
- Verify workflow permissions in `.github/workflows/*.yml`
- Check Actions tab for error messages

### Issues Not Auto-Labeled
- Ensure issue title includes correct prefix ([BUG], [FEATURE], etc.)
- Check that workflow has `issues: write` permission
- Review workflow logs in Actions tab

### Project Board Not Updating
- Verify project URL is correct in `project-automation.yml`
- Ensure project has proper permissions
- Check that `repository-projects: write` permission is set

### Due Date Reminders Not Working
- Ensure dates are in YYYY-MM-DD format
- Check that workflow schedule is running (Actions tab)
- Manually trigger workflow to test

## Support

For questions or issues:
- Open a discussion: https://github.com/shand-j/nexus-landing-page/discussions
- Review the main project: https://github.com/shand-j/nexus
- Contact: @shand-j

---

**Last Updated:** 2026-01-28
**Version:** 1.0
