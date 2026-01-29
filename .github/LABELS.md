# GitHub Labels Configuration for Nexus MVP
# This file documents the label structure for proper milestone tagging

## Priority Labels (Required for all issues)

### priority:critical
- **Color:** #d73a4a (Red)
- **Description:** Must be done first, blocks other work
- **Usage:** Assign to tasks that prevent progress on other items

### priority:high  
- **Color:** #ff6b6b (Light Red)
- **Description:** Important for MVP, should be done soon
- **Usage:** Core features and functionality needed for launch

### priority:medium
- **Color:** #fbca04 (Yellow)
- **Description:** Nice to have for MVP
- **Usage:** Enhancements that improve but aren't critical

### priority:low
- **Color:** #0e8a16 (Green)
- **Description:** Can defer to post-MVP
- **Usage:** Future improvements and optimizations

---

## Type Labels (Required for all issues)

### type:enhancement
- **Color:** #a2eeef (Light Blue)
- **Description:** New feature or improvement
- **Usage:** Adding new functionality or improving existing features

### type:bug
- **Color:** #d73a4a (Red)
- **Description:** Something that's broken
- **Usage:** Fixing defects or issues

### type:refactor
- **Color:** #d4c5f9 (Purple)
- **Description:** Code improvement without changing behavior
- **Usage:** Code cleanup, reorganization, performance improvements

### type:documentation
- **Color:** #0075ca (Blue)
- **Description:** Documentation updates
- **Usage:** README, guides, code comments, API docs

### type:design
- **Color:** #f9d0c4 (Pink)
- **Description:** Design-related work
- **Usage:** UI/UX changes, visual design, branding

---

## Status Labels (Workflow tracking)

### status:blocked
- **Color:** #b60205 (Dark Red)
- **Description:** Cannot proceed due to dependency
- **Usage:** Issues waiting on external factors

### status:in-progress
- **Color:** #0052cc (Blue)
- **Description:** Actively being worked on
- **Usage:** Currently assigned and under development

### status:review
- **Color:** #fbca04 (Yellow)
- **Description:** Ready for review
- **Usage:** Code complete, awaiting peer review

### status:testing
- **Color:** #c5def5 (Light Blue)
- **Description:** In QA testing
- **Usage:** Ready for quality assurance validation

---

## Component Labels (Area identification)

### component:ui
- **Color:** #d876e3 (Purple)
- **Description:** UI component work
- **Usage:** Individual component development

### component:page
- **Color:** #c2e0c6 (Green)
- **Description:** Page-level work
- **Usage:** Full page implementations

### component:backend
- **Color:** #5319e7 (Dark Purple)
- **Description:** Backend-related (integration testing only)
- **Usage:** Backend connection verification

### component:docs
- **Color:** #0075ca (Blue)
- **Description:** Documentation
- **Usage:** Documentation-specific work

---

## Phase Labels (Milestone tracking)

### phase:1-planning
- **Color:** #bfdadc (Teal)
- **Description:** Phase 1: Planning & Documentation
- **Usage:** Week 1 tasks

### phase:2-scope
- **Color:** #bfd4f2 (Light Blue)
- **Description:** Phase 2: MVP Scope Definition
- **Usage:** Week 1-2 tasks

### phase:3-refactor
- **Color:** #d4c5f9 (Lavender)
- **Description:** Phase 3: Core UI Refactoring
- **Usage:** Week 2-3 tasks

### phase:4-enhance
- **Color:** #f9d0c4 (Peach)
- **Description:** Phase 4: Component Enhancement
- **Usage:** Week 3-4 tasks

### phase:5-testing
- **Color:** #c5def5 (Sky Blue)
- **Description:** Phase 5: Testing & Quality Assurance
- **Usage:** Week 4-5 tasks

### phase:6-deploy
- **Color:** #0e8a16 (Green)
- **Description:** Phase 6: Documentation & Deployment
- **Usage:** Week 5-6 tasks

---

## Milestone Label

### milestone:mvp
- **Color:** #ff9f1c (Orange)
- **Description:** Part of MVP Launch milestone
- **Usage:** All issues in this milestone

---

## Label Application Guidelines

### Every Issue Should Have:
1. **One Priority Label** (critical, high, medium, or low)
2. **One Type Label** (enhancement, bug, refactor, documentation, or design)
3. **One Phase Label** (phase:1-planning through phase:6-deploy)
4. **At least one Component Label** (ui, page, backend, or docs)
5. **The Milestone Label** (milestone:mvp)

### Optional Labels:
- **Status Labels** (only when needed to track workflow)
- **Multiple Component Labels** (if work spans multiple areas)

### Example Issue Label Set:
```
priority:high
type:enhancement
phase:3-refactor
component:page
component:ui
milestone:mvp
```

---

## Creating Labels via GitHub CLI

```bash
# Priority Labels
gh label create "priority:critical" --color d73a4a --description "Must be done first, blocks other work"
gh label create "priority:high" --color ff6b6b --description "Important for MVP, should be done soon"
gh label create "priority:medium" --color fbca04 --description "Nice to have for MVP"
gh label create "priority:low" --color 0e8a16 --description "Can defer to post-MVP"

# Type Labels
gh label create "type:enhancement" --color a2eeef --description "New feature or improvement"
gh label create "type:bug" --color d73a4a --description "Something that's broken"
gh label create "type:refactor" --color d4c5f9 --description "Code improvement without changing behavior"
gh label create "type:documentation" --color 0075ca --description "Documentation updates"
gh label create "type:design" --color f9d0c4 --description "Design-related work"

# Status Labels
gh label create "status:blocked" --color b60205 --description "Cannot proceed due to dependency"
gh label create "status:in-progress" --color 0052cc --description "Actively being worked on"
gh label create "status:review" --color fbca04 --description "Ready for review"
gh label create "status:testing" --color c5def5 --description "In QA testing"

# Component Labels
gh label create "component:ui" --color d876e3 --description "UI component work"
gh label create "component:page" --color c2e0c6 --description "Page-level work"
gh label create "component:backend" --color 5319e7 --description "Backend-related"
gh label create "component:docs" --color 0075ca --description "Documentation"

# Phase Labels
gh label create "phase:1-planning" --color bfdadc --description "Phase 1: Planning & Documentation"
gh label create "phase:2-scope" --color bfd4f2 --description "Phase 2: MVP Scope Definition"
gh label create "phase:3-refactor" --color d4c5f9 --description "Phase 3: Core UI Refactoring"
gh label create "phase:4-enhance" --color f9d0c4 --description "Phase 4: Component Enhancement"
gh label create "phase:5-testing" --color c5def5 --description "Phase 5: Testing & QA"
gh label create "phase:6-deploy" --color 0e8a16 --description "Phase 6: Documentation & Deployment"

# Milestone Label
gh label create "milestone:mvp" --color ff9f1c --description "Part of MVP Launch milestone"
```

---

## Label Usage in Project Board

When using GitHub Projects for tracking:

### Columns:
1. **Backlog** - All issues with `priority:*` labels
2. **Ready** - Issues with clear acceptance criteria
3. **In Progress** - Issues with `status:in-progress` label
4. **Review** - Issues with `status:review` label
5. **Testing** - Issues with `status:testing` label
6. **Done** - Closed issues

### Filtering:
- By phase: `label:phase:3-refactor`
- By priority: `label:priority:high`
- By component: `label:component:ui`
- Current sprint: `milestone:"MVP Launch" label:phase:3-refactor`

---

**Last Updated:** January 29, 2026
