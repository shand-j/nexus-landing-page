# Example Governance Tickets

This document provides examples of well-scoped governance tickets using our governance task template. These serve as references for creating your own detailed tickets.

## Example 1: Automated Security Scanning

### Title
`[GOVERNANCE] Implement automated security scanning workflow`

### Fields

**Governance Category:** Security & Compliance

**Objective:**
Establish automated security scanning to detect vulnerabilities in dependencies and code before deployment, ensuring continuous security monitoring and compliance with security best practices.

**Current State:**
- No automated security scanning in place
- Dependencies are not regularly audited
- Manual security reviews are inconsistent and time-consuming
- No visibility into security posture
- Vulnerabilities may go undetected until production
- No process for tracking security issues

**Target State:**
- Automated security scans run on every PR
- Weekly dependency vulnerability reports generated
- Failed security checks block PR merges
- Security dashboard showing current posture
- Automated alerts for critical vulnerabilities
- Documentation and training for team
- Compliance with SOC 2 security controls

**Priority:** P1 - High

**Impact:** High - Significantly improves security/compliance

**Target Start Date:** 2026-02-01

**Target Due Date:** 2026-02-15

**Scope:**

*In Scope:*
- GitHub Actions workflow for security scanning
- CodeQL configuration for static code analysis
- npm audit integration for dependency scanning
- OWASP dependency check integration
- Branch protection rules configuration
- Security findings dashboard
- Automated notifications for critical findings
- Process documentation
- Team training materials

*Out of Scope:*
- Remediation of existing vulnerabilities (separate tickets)
- Third-party commercial security tool integration (e.g., Snyk, Veracode)
- Penetration testing
- Security policy documentation (separate effort)
- Infrastructure security scanning

**Acceptance Criteria:**
- [ ] GitHub Actions workflow created and configured
- [ ] CodeQL scans execute on every PR and push to main
- [ ] npm audit runs and reports all vulnerability severities
- [ ] OWASP dependency check integrated
- [ ] Branch protection rules prevent merge with critical findings
- [ ] Security dashboard accessible to all developers
- [ ] Slack notifications configured for critical vulnerabilities
- [ ] False positive suppression mechanism implemented
- [ ] Documentation created covering entire security workflow
- [ ] Team training session conducted with >90% attendance
- [ ] All existing PRs pass new security checks
- [ ] Zero critical or high vulnerabilities in main branch
- [ ] Workflow tested on at least 3 PRs successfully

**Implementation Plan:**
1. **Research & Design (2 days)**
   - Review available security scanning tools (CodeQL, npm audit, OWASP)
   - Design workflow architecture and integration points
   - Define severity thresholds and blocking criteria
   - Create runbook for handling security findings

2. **Workflow Implementation (3 days)**
   - Create `.github/workflows/security-scan.yml`
   - Configure CodeQL for JavaScript/TypeScript analysis
   - Integrate npm audit with custom reporting
   - Add OWASP dependency check
   - Configure result aggregation

3. **Branch Protection Setup (1 day)**
   - Configure branch protection rules
   - Set required status checks
   - Define bypass procedures for emergencies
   - Test protection rules

4. **Dashboard & Notifications (2 days)**
   - Set up GitHub Security dashboard
   - Configure Slack webhook integration
   - Create notification rules by severity
   - Test notification delivery

5. **Documentation & Training (2 days)**
   - Write security workflow documentation
   - Create troubleshooting guide
   - Develop training materials
   - Conduct team training session

6. **Testing & Rollout (2 days)**
   - Test workflow on multiple PRs
   - Identify and fix any issues
   - Gradual rollout with monitoring
   - Post-rollout review

**Dependencies & Blockers:**
- Depends on: Repository admin access for branch protection rules
- Requires: Slack webhook URL from IT team
- Requires: GitHub Advanced Security enabled (CodeQL)
- Blocked by: None currently

**Risks & Mitigation:**

*Risk 1: False positives may slow down development*
- **Likelihood:** High
- **Impact:** Medium
- **Mitigation:** 
  - Configure appropriate severity thresholds
  - Implement suppression mechanism for known false positives
  - Create clear escalation process
  - Allow security team override with justification

*Risk 2: Team unfamiliarity with security tools*
- **Likelihood:** Medium
- **Impact:** Medium
- **Mitigation:**
  - Comprehensive training session
  - Detailed documentation with examples
  - Designate security champions in each team
  - Office hours for questions

*Risk 3: Performance impact on CI/CD pipeline*
- **Likelihood:** Medium
- **Impact:** Low
- **Mitigation:**
  - Run scans in parallel where possible
  - Use caching for dependencies
  - Monitor pipeline performance
  - Optimize scan configuration

**Stakeholders:**
- **Engineering Team:** Implementation and daily use
- **Security Team:** Review configuration and approve rollout
- **Product Owner:** Prioritization and timeline approval
- **DevOps Team:** CI/CD pipeline integration
- **Compliance Officer:** Regulatory requirements validation

**Compliance/Regulatory Requirements:**
- **SOC 2 Type II:** 
  - CC7.1: System monitoring for security events
  - CC7.2: Continuous security monitoring procedures
- **ISO 27001:** 
  - A.12.6.1: Management of technical vulnerabilities
  - A.14.2.8: System security testing
- **Internal Policy:**
  - All code must be scanned before production deployment
  - Critical vulnerabilities must be remediated within 24 hours

**Success Metrics:**
- [ ] 100% of PRs scanned before merge (target: 100%)
- [ ] Zero critical vulnerabilities in production (target: 0)
- [ ] Mean time to detect vulnerabilities <1 hour (target: <1hr)
- [ ] Mean time to remediate critical issues <24 hours (target: <24hr)
- [ ] Team satisfaction score >4/5 with workflow (target: >4/5)
- [ ] False positive rate <10% (target: <10%)
- [ ] CI/CD pipeline time increase <5 minutes (target: <5min)

**Rollout Plan:**
- **Phase 1 (Week 1):** 
  - Implement workflow in non-production branch
  - Test with 3-5 sample PRs
  - Gather feedback from early adopters
  
- **Phase 2 (Week 2):** 
  - Enable in main repository in advisory mode (no blocking)
  - Monitor for false positives
  - Tune configuration based on findings
  - Conduct team training
  
- **Phase 3 (Week 3):** 
  - Enable blocking mode for critical vulnerabilities
  - Monitor impact on development velocity
  - Quick response team for issues
  
- **Phase 4 (Week 4):** 
  - Full rollout with all severity levels
  - Post-rollout review
  - Document lessons learned

**Automation Details:**
- **Trigger:** PR creation, push to main, scheduled daily scan
- **Tools:** GitHub Actions, CodeQL, npm audit, OWASP Dependency-Check
- **Outputs:** 
  - PR comments with security findings
  - GitHub Security tab updates
  - Slack notifications
  - Weekly summary reports
- **Integration:** 
  - Project board auto-creates issues for findings
  - Labels applied based on severity
  - Assignees set based on code ownership

---

## Example 2: CI/CD Pipeline Optimization

### Title
`[GOVERNANCE] Optimize CI/CD pipeline for faster deployments`

### Fields

**Governance Category:** CI/CD & DevOps

**Objective:**
Reduce CI/CD pipeline execution time by 50% while maintaining quality gates, enabling faster feedback loops and increased developer productivity.

**Current State:**
- Average pipeline execution time: 15 minutes
- Build step takes 8 minutes
- Test step takes 5 minutes
- Deploy step takes 2 minutes
- No caching strategy implemented
- Sequential execution of independent jobs
- Redundant dependency installations
- No build artifact reuse

**Target State:**
- Average pipeline execution time: <7 minutes
- Parallel execution of independent jobs
- Effective caching of dependencies and build artifacts
- Optimized Docker layers
- Conditional job execution based on changes
- Build artifact reuse across stages
- Monitoring and alerting for pipeline performance

**Priority:** P2 - Medium

**Impact:** Medium - Moderate improvement to developer experience

**Target Start Date:** 2026-02-10

**Target Due Date:** 2026-02-24

**Scope:**

*In Scope:*
- Analysis of current pipeline bottlenecks
- Implementation of dependency caching
- Parallelization of independent jobs
- Docker layer optimization
- Conditional job execution
- Build artifact caching and reuse
- Pipeline performance monitoring
- Documentation updates

*Out of Scope:*
- Migration to different CI/CD platform
- Changes to test suite itself
- Infrastructure scaling
- Cost optimization (separate initiative)

**Acceptance Criteria:**
- [ ] Pipeline execution time reduced to <7 minutes (average)
- [ ] Dependency caching implemented with >90% cache hit rate
- [ ] Independent jobs execute in parallel
- [ ] Docker builds use layer caching effectively
- [ ] Conditional execution prevents unnecessary job runs
- [ ] Build artifacts reused in deploy stage
- [ ] Pipeline performance dashboard created
- [ ] No regression in test coverage or quality gates
- [ ] Documentation updated with new pipeline architecture
- [ ] Team trained on new pipeline features

**Implementation Plan:**
1. **Analysis (2 days):** Profile current pipeline, identify bottlenecks
2. **Caching Implementation (2 days):** Add dependency and build caching
3. **Parallelization (2 days):** Restructure jobs for parallel execution
4. **Docker Optimization (2 days):** Optimize Dockerfile and layer caching
5. **Conditional Execution (1 day):** Add path filters and conditions
6. **Monitoring (1 day):** Set up performance tracking
7. **Testing & Validation (2 days):** Ensure all quality gates still pass
8. **Documentation (1 day):** Update docs and train team

**Dependencies & Blockers:**
- Depends on: None
- Requires: GitHub Actions runner availability
- Blocked by: None

**Risks & Mitigation:**

*Risk: Cache invalidation issues*
- Mitigation: Implement cache versioning, monitor cache hit rates

*Risk: Parallel execution race conditions*
- Mitigation: Ensure job independence, add explicit dependencies

**Stakeholders:**
- Engineering Team (primary users)
- DevOps Team (implementation)
- Product Owner (prioritization)

**Success Metrics:**
- Average pipeline time: <7 minutes (target: <7min)
- Cache hit rate: >90% (target: >90%)
- Developer satisfaction: >4/5 (target: >4/5)
- Deployment frequency increase: +20% (target: +20%)

**Automation Details:**
- GitHub Actions workflow optimization
- Automated performance tracking
- Slack notifications for pipeline failures
- Weekly performance reports

---

## Example 3: Access Control & Permissions Audit

### Title
`[GOVERNANCE] Conduct quarterly access control audit and implement least privilege`

### Fields

**Governance Category:** Access Control & Permissions

**Objective:**
Conduct comprehensive audit of all repository and organization access, implement principle of least privilege, and establish ongoing access review process.

**Current State:**
- No regular access reviews
- Many users have admin access
- No clear permission matrix
- External collaborators not documented
- No offboarding checklist
- Service accounts not rotated

**Target State:**
- Complete access audit performed
- Least privilege implemented
- Permission matrix documented
- External collaborators reviewed and documented
- Automated access reviews quarterly
- Service account rotation policy

**Priority:** P1 - High

**Impact:** High - Significantly improves security posture

**Target Start Date:** 2026-02-01

**Target Due Date:** 2026-02-08

**Scope:**

*In Scope:*
- Repository access audit
- Organization member review
- External collaborator review
- Service account inventory
- Permission matrix creation
- Least privilege implementation
- Automated review workflow
- Documentation

*Out of Scope:*
- Identity provider integration (separate project)
- SSO implementation
- Third-party tool access (separate audit)

**Acceptance Criteria:**
- [ ] Complete inventory of all users and their access levels
- [ ] Permission matrix documented and approved
- [ ] Admin access reduced by >50%
- [ ] All external collaborators reviewed and justified
- [ ] Service accounts inventoried and documented
- [ ] Automated quarterly review workflow implemented
- [ ] Offboarding checklist created
- [ ] Access request process documented
- [ ] Security team approval obtained

**Implementation Plan:**
1. **Inventory (1 day):** List all users, teams, and access levels
2. **Analysis (1 day):** Compare current vs required access
3. **Permission Matrix (1 day):** Define roles and permissions
4. **Implementation (2 days):** Adjust permissions to least privilege
5. **Automation (1 day):** Create automated review workflow
6. **Documentation (1 day):** Document process and matrix
7. **Review (1 day):** Security team review and sign-off

**Dependencies & Blockers:**
- Requires: Organization admin access
- Requires: Security team approval

**Risks & Mitigation:**
- Risk: Disruption to active work
- Mitigation: Communicate changes in advance, provide 48hr notice

**Stakeholders:**
- Security Team (approval)
- Engineering Team (affected users)
- HR (offboarding coordination)

**Compliance/Regulatory Requirements:**
- SOC 2: CC6.1, CC6.2, CC6.3 - Logical access controls
- ISO 27001: A.9.2.1 - User registration and de-registration

**Success Metrics:**
- Admin access reduction: >50%
- Unauthorized access incidents: 0
- Access review completion: 100% quarterly

---

## Usage

These examples demonstrate:
1. **Comprehensive scoping** with all required fields
2. **Clear acceptance criteria** that are specific and measurable
3. **Detailed implementation plans** broken into phases
4. **Risk assessment** with mitigation strategies
5. **Success metrics** for tracking outcomes
6. **Compliance mapping** to regulatory requirements

Use these as templates when creating your own governance tickets.

## Creating Your Own Tickets

1. Go to: https://github.com/shand-j/nexus-landing-page/issues/new/choose
2. Select "Governance Task" template
3. Fill in all required fields
4. Reference these examples for guidance
5. Submit and await auto-labeling

---

**Note:** These are example tickets for demonstration purposes. Create actual issues in the repository to track real work.
