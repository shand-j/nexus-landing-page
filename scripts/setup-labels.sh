#!/bin/bash
# Script to create GitHub labels for Nexus MVP milestone
# Run this script after installing GitHub CLI: gh auth login

set -e

echo "🏷️  Creating GitHub labels for Nexus MVP milestone..."
echo ""

# Repository (automatically detected)
REPO=$(git config --get remote.origin.url | sed -E 's#.*github.com[:/]##' | sed 's/\.git$//')

# Verify repository was detected
if [ -z "$REPO" ]; then
  echo "❌ Error: Could not detect repository from git remote."
  echo "Please ensure you're in a git repository with a GitHub remote configured."
  exit 1
fi

echo "📦 Repository: $REPO"
echo ""

# Priority Labels
echo "Creating Priority Labels..."
gh label create "priority:critical" --color d73a4a --description "Must be done first, blocks other work" --force || true
gh label create "priority:high" --color ff6b6b --description "Important for MVP, should be done soon" --force || true
gh label create "priority:medium" --color fbca04 --description "Nice to have for MVP" --force || true
gh label create "priority:low" --color 0e8a16 --description "Can defer to post-MVP" --force || true

# Type Labels
echo "Creating Type Labels..."
gh label create "type:enhancement" --color a2eeef --description "New feature or improvement" --force || true
gh label create "type:bug" --color d73a4a --description "Something that's broken" --force || true
gh label create "type:refactor" --color d4c5f9 --description "Code improvement without changing behavior" --force || true
gh label create "type:documentation" --color 0075ca --description "Documentation updates" --force || true
gh label create "type:design" --color f9d0c4 --description "Design-related work" --force || true

# Status Labels
echo "Creating Status Labels..."
gh label create "status:blocked" --color b60205 --description "Cannot proceed due to dependency" --force || true
gh label create "status:in-progress" --color 0052cc --description "Actively being worked on" --force || true
gh label create "status:review" --color fbca04 --description "Ready for review" --force || true
gh label create "status:testing" --color c5def5 --description "In QA testing" --force || true

# Component Labels
echo "Creating Component Labels..."
gh label create "component:ui" --color d876e3 --description "UI component work" --force || true
gh label create "component:page" --color c2e0c6 --description "Page-level work" --force || true
gh label create "component:backend" --color 5319e7 --description "Backend-related" --force || true
gh label create "component:docs" --color 0075ca --description "Documentation" --force || true

# Phase Labels
echo "Creating Phase Labels..."
gh label create "phase:1-planning" --color bfdadc --description "Phase 1: Planning & Documentation" --force || true
gh label create "phase:2-scope" --color bfd4f2 --description "Phase 2: MVP Scope Definition" --force || true
gh label create "phase:3-refactor" --color d4c5f9 --description "Phase 3: Core UI Refactoring" --force || true
gh label create "phase:4-enhance" --color f9d0c4 --description "Phase 4: Component Enhancement" --force || true
gh label create "phase:5-testing" --color c5def5 --description "Phase 5: Testing & QA" --force || true
gh label create "phase:6-deploy" --color 0e8a16 --description "Phase 6: Documentation & Deployment" --force || true

# Milestone Label
echo "Creating Milestone Label..."
gh label create "milestone:mvp" --color ff9f1c --description "Part of MVP Launch milestone" --force || true

echo ""
echo "✅ All labels created successfully!"
echo ""
echo "Next steps:"
echo "1. Create milestone: gh api repos/$REPO/milestones -f title='MVP Launch' -f description='Nexus MVP Launch with proper tagging' -f due_on='2026-03-17T23:59:59Z'"
echo "2. View all labels: gh label list"
echo "3. See MILESTONE_MVP.md for detailed planning"
