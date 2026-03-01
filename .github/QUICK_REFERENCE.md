# Nexus MVP Milestone - Quick Reference

## 🎯 Quick Links
- **[Full Milestone Plan](../MILESTONE_MVP.md)** - Complete 6-phase breakdown with dates
- **[Label System](LABELS.md)** - All labels with colors and descriptions
- **[Issue Examples](ISSUE_EXAMPLES.md)** - Template issues for each phase
- **[Issue Template](ISSUE_TEMPLATE/mvp-task.md)** - Template for creating new issues

## 📅 Timeline at a Glance

| Phase | Duration | Priority | Status |
|-------|----------|----------|--------|
| 1. Planning & Documentation | Week 1 (Feb 3-9) | 🔴 Critical | In Progress |
| 2. MVP Scope Definition | Week 1-2 (Feb 3-16) | 🔴 High | Not Started |
| 3. Core UI Refactoring | Week 2-3 (Feb 10-23) | 🔴 High | Not Started |
| 4. Component Enhancement | Week 3-4 (Feb 17-Mar 2) | 🟡 Medium | Not Started |
| 5. Testing & QA | Week 4-5 (Feb 24-Mar 9) | 🔴 High | Not Started |
| 6. Documentation & Deployment | Week 5-6 (Mar 3-17) | 🟡 Medium | Not Started |

**Total Duration:** 6 weeks  
**Target Completion:** March 17, 2026

## 🏷️ Label Structure

Every issue needs:
1. ✅ **1 Priority:** critical, high, medium, or low
2. ✅ **1 Type:** enhancement, bug, refactor, documentation, or design
3. ✅ **1 Phase:** phase:1-planning through phase:6-deploy
4. ✅ **1+ Component:** ui, page, backend, or docs
5. ✅ **Milestone:** milestone:mvp

Example: `priority:high type:enhancement phase:3-refactor component:page milestone:mvp`

## 🚀 Quick Start

### 1. Set Up Labels
```bash
cd scripts
./setup-labels.sh
```

### 2. Create Milestone
```bash
gh api repos/shand-j/nexus-landing-page/milestones \
  -f title='MVP Launch' \
  -f description='Nexus MVP Launch with proper tagging - See MILESTONE_MVP.md for details' \
  -f due_on='2026-03-17T23:59:59Z'
```

### 3. Create Issues
Use the [Issue Template](ISSUE_TEMPLATE/mvp-task.md) or reference [examples](ISSUE_EXAMPLES.md)

### 4. Track Progress
- View issues by phase: `label:phase:1-planning`
- View by priority: `label:priority:critical`
- View milestone: `milestone:"MVP Launch"`

## ⚠️ Key Rules

### ✅ DO
- Refactor existing UI components to add functionality
- Build on top of existing backend integration
- Use the provided label system
- Follow execution order
- Test thoroughly

### ❌ DO NOT
- Wire new frontend to backend (mock/stub instead)
- Break existing backend connections
- Skip labels or proper tagging
- Change scope without approval

## 📊 Effort Summary

| Phase | Estimated Hours |
|-------|----------------|
| Phase 1 | 40 hours |
| Phase 2 | 60 hours |
| Phase 3 | 96 hours |
| Phase 4 | 60 hours |
| Phase 5 | 68 hours |
| Phase 6 | 48 hours |
| **Total** | **372 hours** |

With team: ~6 weeks calendar time

## 🎨 Design System

### Colors
- **Midnight Navy** `#0B1221` - Background
- **Electric Violet** `#6A0DAD` - Active states
- **Cyber Teal** `#00CED1` - Data flow

### Typography
- **Headers:** Space Grotesk or Chakra Petch
- **Body:** Inter

### Style
Cyber-Corporate Brutalism (see `ideas.md`)

## 📋 Success Criteria

### MVP Launch Ready When:
- [ ] All Phase 1-5 tasks completed
- [ ] Lighthouse scores > 90 (all categories)
- [ ] Zero critical bugs
- [ ] Documentation complete
- [ ] Stakeholder approval

## 🔗 Useful Commands

### View Issues
```bash
# By phase
gh issue list --label "phase:1-planning"

# By priority
gh issue list --label "priority:critical"

# In milestone
gh issue list --milestone "MVP Launch"
```

### Create Issue
```bash
gh issue create \
  --title "[MVP] Your task title" \
  --body "Description" \
  --label "priority:high,type:enhancement,phase:1-planning,milestone:mvp" \
  --milestone "MVP Launch"
```

### Update Issue
```bash
# Add label
gh issue edit <number> --add-label "status:in-progress"

# Assign
gh issue edit <number> --add-assignee @me
```

## 📞 Communication

### Weekly Sync
- **When:** Mondays @ 10:00 AM
- **Duration:** 30 minutes
- **Agenda:** Progress, blockers, planning

### Daily Updates
- **When:** 9:00 AM (async via Slack)
- **Format:** Yesterday, today, blockers

## 🆘 Need Help?

1. Check [Full Milestone Plan](../MILESTONE_MVP.md) for details
2. Review [Issue Examples](ISSUE_EXAMPLES.md) for templates
3. See [Label System](LABELS.md) for tagging guide
4. Ask in team chat for clarification

---

**Last Updated:** January 29, 2026  
**Maintained By:** Development Team
