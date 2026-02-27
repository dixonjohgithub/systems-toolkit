# Agentic Intake Platform — MVP Problem & Solution Framework
## Problem Definition · Severity · Risk of Inaction · Success Conditions · Acceptance Criteria · Done Definition · Metrics

---

# Introduction — The Portfolio Governance Problem

## What Portfolio Governance Means

Portfolio governance is the organizational discipline of ensuring that the work a company approves, funds, and executes is the work it actually intended to approve, fund, and execute — aligned to strategy, free of redundancy, and delivered with the quality and compliance standards the organization requires.

It is not project management. Project management governs how work gets done once it is approved. Portfolio governance governs what gets approved in the first place — and whether the aggregate of those approvals reflects strategic intent or simply the volume and velocity of whatever was submitted.

In practice, portfolio governance operates at three levels:

**Strategic alignment** — Is the work being approved serving the organization's current objectives? Are OKRs translating into funded initiatives, or are they planning artifacts that bear no operational relationship to what the intake pipeline is actually producing?

**Portfolio composition** — Is the mix of work being approved deliberate? Does leadership know what fraction of approved capacity is going to net-new initiatives versus extending existing work? Are they funding the right distribution of AI, automation, data, and operational requests — or just processing whatever arrived?

**Execution integrity** — Is the work that gets approved actually ready to execute? Are the artifacts that carry approved work into delivery compliant with organizational standards from the moment they are created — or does compliance get chased after the fact, mid-sprint, at the highest possible correction cost?

When portfolio governance is functioning, the organization builds what it intended to build, at the quality level it required, without funding the same work twice. When it is not functioning, the organization builds whatever got through — and discovers the misalignment, redundancy, and quality failures downstream, where they are most expensive to correct.

---

## The Problem This Platform Addresses

Most organizations believe they have an intake process. They have forms, templates, review committees, Jira workflows, and approval gates. What they do not have — and what almost no organization has — is a **governance layer** between the moment someone submits a work request and the moment that request enters the portfolio.

That gap is where the portfolio governance failure lives.

Without a governance layer at intake, four structural failures enter the portfolio simultaneously and silently, on every submission, at scale:

**Quality failures** enter because there is no enforced standard for what a submission must contain before it reaches a reviewer. The reviewer absorbs the cost of incomplete submissions through clarification cycles — back-and-forth that consumes the most expensive review capacity in the organization not on evaluation and decision, but on information retrieval. This cost is never measured, never attributed to the submission that created it, and never visible to anyone with the authority to fix it. It compounds with every submission.

**Duplication failures** enter because no individual team has systematic visibility into what other teams are building. A new submission is approved, resources are committed, and work begins — with no mechanism having checked whether the same work is already in progress somewhere else in the portfolio. The duplication is discovered mid-development, post-launch, or at a portfolio review, after the full cost of both parallel efforts is already sunk. The detection cost at intake time would have been near zero.

**Prioritization failures** enter because unclassified submissions cannot be prioritized — they can only be ordered. Without knowing what type of work a submission represents, where it sits relative to the existing portfolio, and whether it serves a current OKR, a reviewer cannot make a strategic prioritization decision. They make a local judgment call. Multiply that across hundreds of submissions and dozens of reviewers and the result is a portfolio composition that nobody designed — the aggregate of individual judgment calls made without shared context.

**Compliance failures** enter because the translation from approved intake to executable Jira artifact is manual, inconsistent, and unvalidated. Engineers and product managers re-enter structured data the system already holds, applying static templates that cannot encode work-type-specific compliance requirements. The artifacts that result are close to compliant but not fully compliant. The gaps surface mid-sprint, at governance audits, and at process gates — always later than discovery at creation time, always at higher correction cost.

---

## Why These Failures Are Invisible Until They Are Expensive

The defining characteristic of all four failures is that their costs are **decoupled from the events that caused them**.

A reviewer who receives an incomplete submission and runs three clarification cycles does not connect that experience to a quality failure at intake — they experience it as a normal part of their job. A portfolio manager who discovers two teams built the same capability does not connect that discovery to a missing detection mechanism at intake — they experience it as a coordination failure. A product manager whose stories get sent back for compliance corrections mid-sprint does not connect that interruption to artifact creation seven weeks earlier — they experience it as sprint churn.

Because the cost and the cause are never connected in any reporting system, the failures are never diagnosed at their source. They are treated as symptoms — slow review queues, overwhelmed teams, missed deadlines, audit findings — and addressed with local interventions that do not change the underlying structural condition.

The underlying structural condition is always the same: **there is no governance layer at intake.**

---

## The Seriousness of the Problem at Portfolio Scale

These failures are not individually catastrophic. A single clarification cycle, a single duplicate discovery, a single compliance correction — each is manageable. The severity of the problem is not in any one instance. It is in the aggregate, and the aggregate is large.

Consider the math at the scale this platform is designed to operate at:

- **120+ active intake processes.** Every one of them is producing submissions without a quality standard, without duplication detection, without classification against strategic context, without compliant artifact generation. The failure rate is not 100% on every submission — but it is consistent, and it applies to every submission across every process.

- **Hundreds of in-flight submissions at any given time.** Each one that arrived below the quality bar consumed review capacity on clarification. Each one that duplicated existing work consumed double the resource commitment. Each one that was approved without classification contributed to a portfolio composition that was not deliberately designed. Each one whose artifacts were manually created introduced compliance risk into the delivery pipeline.

- **Review capacity is the organization's most expensive governance resource.** Senior reviewers, intake committees, and executive sponsors who sit on intake panels are not interchangeable with other forms of organizational capacity. When their time is consumed by information retrieval, clarification cycles, and post-approval compliance work, the opportunity cost is the strategic evaluation and decision-making those same people cannot do because their time is already spent.

- **Each failure compounds.** A quality failure that produces a vague submission creates a classification failure downstream — vague inputs produce unreliable classification. A duplication failure that allows redundant work into the portfolio creates a capacity failure downstream — the same engineering resources are committed twice, reducing available capacity for genuinely new work. A compliance failure that produces non-compliant artifacts creates a velocity failure downstream — mid-sprint corrections consume the sprint capacity those corrections were supposed to protect.

The compounding is the point. These are not four separate problems. They are four expressions of the same structural gap — the absence of a governance layer at intake — and they amplify each other at portfolio scale.

---

## What Portfolio Governance Looks Like When It Works

When a governance layer exists at intake, the organization gains something it has never had before: **a controlled entry point to the portfolio.**

Every submission that passes through the controlled entry point has met a quality standard. Every submission has been checked against the full portfolio for duplication. Every submission has been classified against the strategic framework — OKRs, portfolio structure, team capacity. Every approved submission generates artifacts that are compliant at creation.

The downstream effects are structural and durable:

- Review capacity is applied to evaluation and decision — not to information retrieval, duplicate discovery, or compliance remediation
- Portfolio composition reflects deliberate strategic allocation — not the aggregate of uncoordinated individual judgment calls
- Leadership can answer composition questions from data: what fraction of approved work is net-new, OKR-aligned, within team capacity, free of known duplication
- Delivery teams begin sprint planning from compliant artifacts — not from templates that require completion before planning can begin
- The organization has, for the first time, a measurable signal on intake quality, duplication rate, classification accuracy, and artifact compliance — the four dimensions of portfolio governance that currently have no measurement at all

This is what the platform builds, one MVP at a time. Each phase closes one of the four structural gaps. Each phase makes the portfolio more governable, more accurate, and more aligned to what the organization actually intends to build.

---

## How to Read This Document

What follows is the problem-solution framework for each of the four MVP phases. Each section follows the same structure:

1. **The Problem** — what is happening today and why
2. **Severity** — why this problem is serious at organizational scale
3. **What Happens If It Is Not Solved** — the compounding cost of inaction
4. **What Happens When It Is Solved** — the structural change the MVP produces
5. **Approach** — how the platform solves it technically
6. **Acceptance Criteria** — the verifiable conditions that confirm the MVP is working
7. **Definition of Done** — the human sign-off that confirms the MVP is complete
8. **Quantifiable Metrics** — the measurements that track progress and outcomes

The MVPs are ordered by dependency. MVP0 is the foundation — nothing else works without a quality floor. MVP1 extends that foundation with duplication detection. MVP2 connects the validated, deduplicated pipeline to the strategic framework. MVP3 closes the loop by generating compliant execution artifacts from the structured data the preceding phases produced.

Each MVP delivers immediate value independently. Each one also makes the next one more effective. The platform is designed to accumulate governance capability across phases — not to require all four phases before any value is realized.

---

# MVP0 — Intake Quality

## The Problem

Every intake submission entering the review chain today is created under the same structural condition: the submitter decides how much effort to put in, and whatever they produce moves forward. There is no enforced quality standard. There is no real-time validation. There is no mechanism that prevents an incomplete or vague submission from reaching a reviewer.

The result is a consistent pattern: reviewers receive submissions that are not ready to evaluate. Fields are populated but not substantive. Scope descriptions are generic. Business justifications are one-liners. The reviewer now has two options — reject the submission outright (which creates its own friction) or begin a clarification cycle. Most choose the clarification cycle. Two to three rounds of back-and-forth later, the submission is finally workable.

This happens on every intake type, across every business line, for every submission that arrives below the quality bar. It is so normalized that it is not experienced as a problem — it is experienced as how intake works.

---

## Severity

**High. This is the foundational failure that every other MVP builds on top of.**

Without a quality floor, duplicate detection surfaces incomplete submissions. Classification operates on vague descriptions. Artifact generation inherits the gaps. Every downstream governance layer is only as reliable as the quality of the intake data feeding it.

Beyond the technical dependency, the organizational cost is real and aggregate. Review capacity — the attention of senior reviewers, intake committees, and business line leads — is being consumed by information retrieval rather than evaluation. This is not a minor inefficiency. In any organization with 120+ active intake processes and hundreds of in-flight submissions, the misallocation is systemic. It simply does not appear on any report because the cost is absorbed locally, invisibly, at every point in the review chain.

The problem also has no self-correcting mechanism. Submitters receive no feedback that their incomplete intake created downstream cost. Reviewers have no tool to surface that cost upstream. Intake designers have no signal that their form is generating low-quality submissions. The system reproduces the problem indefinitely because nothing penalizes it.

---

## What Happens If It Is Not Solved

- Review capacity continues to be consumed by clarification cycles rather than evaluation decisions — permanently
- Senior reviewers remain over-capacity not because of volume, but because a fraction of every review engagement is untracked information retrieval
- Intake approval timelines remain unpredictable — not because of genuine complexity, but because submission quality is inconsistent and clarification cycles are variable
- Every downstream MVP (duplicate detection, classification, artifact generation) operates on unreliable input data, reducing their effectiveness
- The organization has no basis for measuring intake quality over time, cannot identify which intake types are producing the most rework, and cannot hold submitters or intake designers accountable to a standard that does not exist
- The problem compounds as intake volume grows — more submissions means more clarification cycles means more review capacity consumed

---

## What Happens When It Is Solved

- Every submission that reaches a reviewer has already been validated: every required field is complete and substantive, every answer meets the intake owner's quality criteria for that specific question
- Reviewers open a submission and can begin evaluating it immediately — no back-and-forth, no information chase, no context reconstruction across multiple rounds
- Intake designers gain a feedback mechanism: they can see which questions are generating the most validation failures and tune the quality criteria accordingly
- The quality bar is consistent — it does not vary by who submitted, which reviewer received it, or what day of the week the submission arrived
- Review capacity is freed for its intended purpose: evaluation and decision
- The organization has a measurable baseline for intake quality that can be tracked, improved, and reported against

---

## Approach

The platform enforces quality through a conversational intake loop powered by a Validation Agent. Instead of a static form, the submitter engages in a structured conversation. Each question is answered, and the Validation Agent evaluates the response in real time against per-question quality criteria defined by the intake owner in the YAML configuration file for that intake type.

If a response does not meet the criteria — too vague, too short, missing required specificity — the Validation Agent returns targeted guidance and asks the question again. The submitter has up to three attempts per question. If the quality bar is not met after three attempts, the submission is flagged for human review before proceeding.

No submission exits the intake conversation without passing validation on every required field. The quality criteria are not static across all intake types — they are specific to each question on each intake, defined by the intake owner, and versioned in configuration. Adding or updating a quality criterion requires a YAML change — no code deployment.

---

## Acceptance Criteria

MVP0 is complete when the following conditions are verifiably true:

1. **Validation is enforced on every required field** — no submission can advance past a question with an empty, one-word, or obviously non-responsive answer without triggering the Validation Agent
2. **Per-question quality criteria are configurable** — intake owners can define specific validation instructions for each question in YAML without requiring engineering involvement
3. **Retry logic is implemented** — submitters receive specific, actionable guidance on failed validation attempts; the maximum retry count per question is configurable
4. **Validation failures are logged** — every validation failure, retry, and resolution is written to the audit log with session ID and trace ID
5. **At least one full intake type is running end-to-end** — from first question through validation through Jira ticket creation — with all quality criteria enforced
6. **Intake owners can review and update quality criteria** without a code deployment
7. **The conversational interface handles all defined intake types** — the platform does not require separate implementations per intake type

---

## Definition of Done

MVP0 is done when:

- The Validation Agent is enforcing quality criteria on all active intake configurations in the production environment
- Zero submissions are reachable in Jira that bypassed validation (audit log confirms)
- At least one intake owner has reviewed, modified, and redeployed a quality criterion without engineering support
- End-to-end audit trail is complete: every submission has a full log of questions asked, answers provided, validation outcomes, retry attempts, and final submission status
- The intake team has signed off that the quality criteria for their intake type reflect their actual standard — not a placeholder

---

## Quantifiable Success Metrics

| Metric | Baseline (Current State) | Target |
|--------|--------------------------|--------|
| Average clarification rounds per submission | Measure at go-live | Reduce by 70% within 60 days |
| Percentage of submissions actionable on first reviewer contact | Measure at go-live | >85% within 60 days |
| Average time from submission to reviewer first action | Measure at go-live | Reduce by 40% within 60 days |
| Validation failure rate per intake type | 0% (no measurement exists) | Tracked and visible; used to tune criteria |
| Intake owner configuration changes made without engineering | 0 | >1 per intake type per quarter |
| Submissions flagged for human review after max retries | Not tracked | Tracked; target <10% of submissions |

---
---

# MVP1 — Duplicate Detection

## The Problem

When a team submits a new work request, they have full visibility into their own backlog and zero systematic visibility into anyone else's. There is no mechanism — before submission, before approval, before any resource commitment — that checks whether the work they are proposing already exists in the portfolio, is currently in progress at another team, or was recently completed by someone else.

The result is redundant work. Two teams independently build the same capability. Both receive Jira assignments. Both get environment access. Both begin scoping and sprint planning. The overlap is discovered — if it is discovered — mid-development, at a portfolio review, or post-launch when both outputs are presented to the same audience. By then, both efforts have consumed full cost.

This is not a communication failure. Teams cannot coordinate against information they do not have. The portfolio data that would surface the duplication exists — it lives in Jira — but it is not connected to the intake decision point. The gap between existing portfolio data and the moment a new submission is created is where redundancy enters the system.

---

## Severity

**High. A single prevented duplicate typically recovers the cost of the platform many times over.**

The cost structure of undetected duplicate work is asymmetric and severe. The cost of checking for duplicates at submission time is near zero — the platform executes the search automatically in the background. The cost of missing a duplicate is the full sunk cost of both parallel efforts: environment provisioning, data access approvals, engineering sprint capacity, leadership steering time, and in some cases vendor or tooling costs.

Beyond the direct cost, undetected duplicates create compounding downstream problems: fragmented data models when two teams build against the same data source with different schema decisions, capability confusion when two versions of the same tool exist in production, and planning interference when dependency conflicts surface mid-sprint.

The problem is invisible in standard reporting. Duplicate work appears as normal project expenditure until the collision is discovered — at which point it appears as a cost overrun, a delivery delay, or a post-launch reconciliation effort, never as "duplicate detection failure."

---

## What Happens If It Is Not Solved

- The organization continues to fund redundant work it cannot see is redundant — at a rate proportional to intake volume and portfolio size
- Portfolio composition remains inaccurate: leadership makes investment decisions against a picture of "what we are building" that contains redundant efforts they would not have approved if they knew
- The downstream costs of duplication — data fragmentation, capability confusion, maintenance burden for two versions of the same tool — compound with every sprint that passes before discovery
- Teams that built duplicated capabilities face a forced reconciliation: one must be deprecated, data migrated, and users redirected — all at delivery cost
- The organization has no way to measure the true rate of duplication in its portfolio because the problem is invisible until it surfaces catastrophically
- The asset reuse opportunity — connecting a new submitter to an existing capability that already solves their problem — is missed entirely

---

## What Happens When It Is Solved

- Every submission is checked against the full Jira portfolio — all 120+ intake types, all active Epics, all in-progress features — before any ticket is created
- Submitters who are proposing redundant work are surfaced to that fact before approval, with the existing ticket, its current status, and the owner's contact information visible to them
- Submitters can make an informed decision: collaborate with the existing owner, reuse the existing asset, or consciously proceed as distinct with documented justification
- No ticket is created until the submitter has acknowledged all duplicate candidates — the submission is blocked, not just warned
- Portfolio composition becomes more accurate: leadership is approving net-new work with confidence that it is genuinely net-new
- Asset reuse increases: teams discover existing capabilities they did not know existed and redirect effort to higher-value work
- The organization gains a measurable signal on portfolio duplication rate for the first time

---

## Approach

After all intake questions are answered and validated (MVP0), the platform executes a three-layer duplicate detection pipeline before creating any Jira ticket.

**Layer 1 — Exact Match:** JQL-based Jira query against identical or near-identical ticket titles and descriptions. Highest confidence — when this fires, the duplication is unambiguous.

**Layer 2 — Fuzzy Match:** Token-level similarity scoring surfaces overlapping requests phrased differently. Catches the same initiative described in different departmental vocabulary — the kind of duplication exact match misses entirely.

**Layer 3 — Semantic Match:** Gemini text-embedding-004 plus cosine similarity detects meaning-level duplicates regardless of wording. This layer identifies "build a customer churn prediction model" and "develop an attrition risk score for retail clients" as functionally identical, even though they share no common tokens.

When candidates are found across any layer, the submitter is presented with each candidate — title, description, status, owner contact — and must make an explicit decision before the submission can proceed. The decision and its rationale are logged. No ticket is created until all candidates are acknowledged.

The detection pipeline is configurable: similarity thresholds, search scope, and candidate presentation logic are defined in configuration, not in code.

---

## Acceptance Criteria

MVP1 is complete when the following conditions are verifiably true:

1. **All three detection layers are operational** — exact, fuzzy, and semantic match are all executing as part of the submission pipeline
2. **Detection runs before ticket creation** — no Jira ticket is created until the duplicate detection pipeline has completed and the submitter has acknowledged all candidates
3. **Submission is blocked, not warned** — a submitter who has unacknowledged duplicate candidates cannot advance to ticket creation; the block is enforced in the platform, not advisory
4. **Candidate presentation is complete** — each candidate surfaces title, description, current status, and owner contact information
5. **Submitter decision is captured and logged** — the decision (collaborate / proceed as distinct / request more detail) and any justification text are written to the audit log
6. **Similarity thresholds are configurable** — intake owners or administrators can tune detection sensitivity without a code deployment
7. **Detection covers the full Jira portfolio** — search scope includes all 120+ intake types, all Epics, and all active features — not just the submitting team's backlog
8. **False positive rate is within acceptable range** — semantic layer is not surfacing unrelated tickets at a rate that degrades submitter experience (threshold defined before go-live)

---

## Definition of Done

MVP1 is done when:

- The three-layer detection pipeline is running in production on all active intake types
- Zero Jira tickets have been created for submissions with unacknowledged duplicate candidates (audit log confirms)
- At least one confirmed duplicate has been detected and resolved through the platform (submitter acknowledged, decision logged, no redundant ticket created)
- Similarity thresholds have been reviewed and approved by an intake owner or portfolio manager — not left at default
- The submitter decision log is queryable: administrators can pull a report of all duplicate candidates surfaced, decisions made, and outcomes
- Portfolio managers have confirmed they can see duplicate detection activity in the audit log

---

## Quantifiable Success Metrics

| Metric | Baseline (Current State) | Target |
|--------|--------------------------|--------|
| Confirmed duplicate submissions detected before ticket creation | 0 (no detection exists) | Tracked from day 1; report monthly |
| Duplicate detection rate (% of submissions surfacing at least one candidate) | Unknown | Establish baseline in first 30 days |
| Submitter decisions: collaborate / proceed as distinct / request detail | Not tracked | Tracked; "collaborate" rate is the asset reuse signal |
| Time from submission to duplicate candidate acknowledgment | Not applicable | <5 minutes (platform-presented, not async) |
| False positive rate (candidates surfaced that submitter dismisses as unrelated) | Not applicable | <20% of all candidates surfaced |
| Redundant Jira tickets created post-MVP1 go-live | Not tracked | Target: 0 for known duplicate scenarios |
| Cost avoidance from prevented duplicates | Not tracked | Estimated and reported quarterly based on logged decisions |

---
---

# MVP2 — Intake Classification

## The Problem

Every submission that enters the intake pipeline today arrives unclassified. It is a description of work — but the system does not know what kind of work it is, where it sits relative to the existing portfolio, which team should own it, which governance criteria apply to it, or whether it aligns to any current organizational objective.

The practical effect is that prioritization — one of the most consequential activities in portfolio governance — happens without the information that prioritization requires. Reviewers assess submissions against their personal understanding of current priorities. Different reviewers apply different mental models. Submissions are approved or deferred based on recency, urgency, or the persistence of the requester — not based on a structured comparison of work type, portfolio position, OKR alignment, and team capacity.

This is not prioritization. It is ordering. And the portfolio composition it produces is whatever the queue generated — not what strategic intent would have produced.

---

## Severity

**High. This is the mechanism that connects the intake pipeline to the organization's strategic framework.**

Without classification, OKRs govern planning documents — not what actually gets built. A group or enterprise OKR that calls for increased AI capability, accelerated automation, or improved data infrastructure has no operational connection to the intake pipeline unless submissions are classified against it. Classification is the link between stated strategy and funded work.

The severity compounds at portfolio review time. Leadership looking at an unclassified backlog cannot answer basic composition questions: What fraction of approved work is net-new versus extensions of existing Epics? Are we building the right mix of AI, automation, data, and operational work? Is the intake pipeline producing OKR-aligned submissions or crowding them out with high-volume operational requests? Without classification, none of these questions can be answered from the data. They can only be guessed.

---

## What Happens If It Is Not Solved

- Portfolio composition remains ungoverned — the distribution of work types in the approved portfolio is whatever happened, not what was intended
- OKR accountability at the intake layer is impossible — there is no mechanism to audit whether approved work serves current objectives
- Net-new initiatives continue to be created for problem spaces that already have active Epics — because no classification mechanism surfaces the existing portfolio structure at intake time
- Reviewers continue to make prioritization decisions in isolation, without shared context, producing inconsistent outcomes for similar submissions
- Team capacity planning remains reactive — teams discover they have been assigned work they cannot absorb after the approval decision has been made
- The intake pipeline and the strategic planning process remain disconnected — strategy is set in one room, intake is processed in another, and the two are never systematically reconciled

---

## What Happens When It Is Solved

- Every submission is classified at intake time: work type, portfolio position (net-new / extension of existing Epic / related to in-progress work), and prioritization signals (OKR alignment, complexity tier, routing destination)
- Reviewers receive submissions with context pre-assembled — they are not starting from a blank description, they are reviewing a classified submission that tells them what the work is, where it belongs, and what it will cost the team that owns it
- Portfolio composition becomes measurable and governable: administrators can report on the distribution of approved work by type, OKR alignment, and portfolio position
- Prioritization becomes more consistent: submissions of the same type, with the same portfolio position and OKR alignment, are evaluated against the same criteria — not against whatever the reviewer happened to know that day
- OKR owners can track how much intake volume is aligned to their objectives, and identify whether their OKR is being served by the pipeline or deprioritized by it
- Net-new Epic creation decreases for problem spaces already owned by active Epics — submissions are correctly routed as feature candidates rather than new initiatives

---

## Approach

After validation (MVP0) and duplicate detection (MVP1), the platform executes a classification pipeline that determines three things for every submission:

**Work Type:** The submission is classified into one of six categories — net-new initiative, feature on existing Epic, AI/GenAI, automation, data/analytics, or support/operational. Each type has a distinct review path, governance criteria, and routing destination defined in configuration.

**Portfolio Position:** Building on MVP1's duplicate detection output, classification determines the structural relationship between the submission and the existing portfolio. Is there an existing Epic that owns this problem space? (Feature candidate, not new initiative.) Is there related in-progress work that requires coordination? (Flagged for cross-team alignment.) Is this genuinely net-new? (Routes to new initiative queue for business case review.)

**Prioritization Inputs:** Classification surfaces the two signals that drive prioritization: resource availability (routes to the right team, surfaces complexity tier so leads can assess manpower impact before commitment) and OKR alignment (tags work type and portfolio position so reviewers can assess in-scope versus defer at intake time, not at planning time).

Classification logic is defined in configuration per intake type. The classification output is attached to the submission record and visible to all reviewers and approvers in the review chain.

---

## Acceptance Criteria

MVP2 is complete when the following conditions are verifiably true:

1. **Work type classification is operational** — every submission is assigned one of the six defined work types before reaching the review queue
2. **Portfolio position is determined** — every submission is assessed against the existing Epic landscape and tagged as net-new, feature candidate, or coordination-required
3. **Prioritization inputs are surfaced** — complexity tier and OKR alignment signals are attached to every classified submission
4. **Classification is visible to reviewers** — the classification output is presented to reviewers as part of the submission record, not buried in a log
5. **Classification is configurable** — intake owners can adjust classification logic and routing rules in YAML without a code deployment
6. **Routing is operational** — classified submissions route to the correct review queue, team, and governance path based on work type
7. **Classification accuracy is validated** — a sample of classified submissions has been reviewed by intake owners or portfolio managers and confirmed as correctly classified
8. **OKR tags are queryable** — administrators can run a report of submissions by OKR alignment tag for any date range

---

## Definition of Done

MVP2 is done when:

- Classification is running in production on all active intake types
- Every submission record in Jira contains the classification output: work type, portfolio position, complexity tier, OKR alignment tag
- At least one routing rule has been exercised: a submission has been classified as a feature candidate on an existing Epic and routed to that Epic's backlog rather than creating a new initiative
- Portfolio managers have confirmed that the classification output matches their mental model of how these submissions should be categorized — not just that the system produced a label
- An OKR alignment report has been generated and reviewed by at least one OKR owner
- Classification accuracy on a 30-submission sample review is above 85%

---

## Quantifiable Success Metrics

| Metric | Baseline (Current State) | Target |
|--------|--------------------------|--------|
| % of submissions classified correctly on first pass | 0% (no classification exists) | >85% within 30 days of go-live |
| Net-new Epics created for problem spaces with existing active Epics | Not tracked | Tracked; target reduction of 30% within 90 days |
| Reviewer time spent reconstructing submission context before evaluation | Not tracked | Establish baseline; target 50% reduction |
| Submissions with OKR alignment tag | 0% | 100% of submissions classified within 60 days |
| OKR coverage rate (% of active OKRs with at least one aligned intake submission) | Not tracked | Tracked and reported monthly to OKR owners |
| Routing accuracy (submissions routed to correct team and queue) | Not applicable | >90% routing accuracy within 60 days |
| Prioritization consistency score (similar submissions receiving similar outcomes) | Not measured | Establish measurement framework at go-live |

---
---

# MVP3 — Agile Artifact Generation

## The Problem

When a submission is approved, the work of translating that approval into executable Jira artifacts begins. An engineer or product manager opens Jira, applies a template, and manually populates an Epic, user stories, acceptance criteria, dependency links, regulatory tags, and complexity estimates. They do this from memory, from the approved intake document, and under delivery pressure.

The information required to populate a compliant artifact correctly already exists. The validated intake contains the scope. The duplicate detection output contains the portfolio relationships. The classification output contains the work type, regulatory tags, and routing. All of it is structured, validated, and sitting in the submission record.

None of it transfers automatically. The product manager re-enters it manually, imperfectly, and inconsistently. The result is artifacts that are close to compliant but not fully compliant: a missing acceptance criteria field, a regulatory tag not applied, a dependency link from MVP1's detection output not reflected in the story, a complexity estimate that contradicts the classification tier. These gaps are not caught at creation because no one is watching. They surface at sprint planning, at a governance audit, or mid-execution — at the worst possible time.

---

## Severity

**High. Non-compliant artifacts are a delivery risk, a planning integrity risk, and in regulated industries, a compliance liability.**

The cost of correcting a non-compliant artifact scales directly with how far into delivery the correction occurs. At sprint planning, correction is a conversation that takes an hour. At sprint execution, correction is an interruption that pulls engineers and product managers out of delivery mode, requires reconstructing context from decisions made weeks earlier, and reopens planning agreements that both teams thought were final. At a governance audit, correction is an escalation event with formal remediation requirements.

The problem is invisible in reporting. Mid-sprint artifact corrections appear in the data as sprint velocity variance, scope churn, or unplanned work — never as "artifact quality failure." The root cause is never attributed to the creation event that produced the non-compliant artifact. Nothing changes.

Beyond the delivery cost, there is an organizational cost that is rarely counted: the time engineers and product managers spend manually translating structured intake data into Jira fields is not design work. It is data re-entry. It is mechanical, error-prone, and a poor use of delivery capacity that should be focused on delivery design.

---

## What Happens If It Is Not Solved

- Non-compliant artifacts continue to enter the backlog and surface mid-sprint, consuming delivery capacity for correction instead of delivery
- Sprint velocity remains artificially suppressed by untracked artifact rework
- Governance audits continue to find compliance gaps in Jira artifacts — not because teams are not trying to comply, but because manual creation is inconsistent by construction
- Engineers and product managers continue spending time on mechanical data re-entry that the system could perform automatically and accurately
- The structured, validated data collected by MVP0, MVP1, and MVP2 is never fully leveraged — it informs a human translation that introduces errors, rather than directly generating the compliant output it was designed to produce
- The compliance guarantee at the portfolio level remains aspirational — "we have standards" — rather than operational — "every artifact meets standards at the moment it is created"

---

## What Happens When It Is Solved

- Every approved submission generates a fully compliant Jira artifact set automatically — Epic, user stories, acceptance criteria, dependency links, regulatory tags, and complexity estimates — populated from the validated, classified intake data
- Engineers and product managers begin sprint planning from a compliant artifact, not from a template that needs to be completed
- Compliance is a creation-time condition, not an audit-time finding — every artifact that enters the backlog meets the standard from the moment it is created
- The structured data chain from MVP0 through MVP2 is closed: validation output feeds artifact scope, duplicate detection output feeds dependency links, classification output feeds work type tags and routing
- Audit exposure from non-compliant artifacts is eliminated — the portfolio is compliant by construction
- Engineering and product management capacity previously spent on mechanical translation is redirected to delivery design

---

## Approach

After a submission has been validated (MVP0), cleared of duplication (MVP1), and classified (MVP2), approval triggers the artifact generation pipeline.

The pipeline generates the following artifacts from the structured submission data:

**Epic:** Required fields pre-populated from validated intake scope. Work type tag from MVP2 classification. OKR alignment tag from MVP2 prioritization output. Portfolio position from MVP1 and MVP2 output.

**User Stories:** Scoped from the validated intake questions. Acceptance criteria structured according to the company definition-of-done standard, populated from the intake's scope and validation output.

**Dependency Links:** Populated from MVP1 duplicate detection output (related existing tickets) and MVP2 portfolio position data (existing Epics this work extends or relates to).

**Regulatory Tags:** Applied automatically from MVP2 work type classification — AI/GenAI, data, automation, and operational submissions each carry the corresponding regulatory and governance tags required by company policy.

**Complexity Estimates:** Derived from MVP2 complexity tier — feeding initial story point guidance for sprint planning without requiring a separate estimation session before planning begins.

All artifact templates are configurable in YAML per intake type. The generation pipeline applies the template for the classified work type — not a generic template that cannot encode type-specific compliance requirements.

---

## Acceptance Criteria

MVP3 is complete when the following conditions are verifiably true:

1. **Epic generation is operational** — every approved submission automatically generates a populated Epic in Jira with all required fields completed
2. **User stories are generated with acceptance criteria** — generated stories include acceptance criteria formatted to the company definition-of-done standard
3. **Dependency links are populated** — links to related existing tickets from MVP1 detection and MVP2 portfolio position are present in generated artifacts
4. **Regulatory tags are applied automatically** — work type classification from MVP2 drives tag application without manual intervention
5. **Complexity estimates are included** — generated Epics and stories include initial complexity guidance derived from MVP2 classification tier
6. **Artifact templates are configurable** — intake owners can modify artifact generation templates in YAML without a code deployment
7. **Generated artifacts pass compliance review** — a sample of generated artifacts has been reviewed by a governance or compliance stakeholder and confirmed as meeting company Jira artifact standards
8. **No generated artifact requires mandatory fields to be added post-creation** — all required fields per company standard are populated at generation time

---

## Definition of Done

MVP3 is done when:

- The artifact generation pipeline is running in production on at least two approved intake types end-to-end
- A governance or compliance reviewer has confirmed that generated artifacts meet company Jira standards without requiring post-creation field completion
- Dependency links from MVP1 and MVP2 output are present and accurate in generated artifacts — confirmed by cross-referencing the duplicate detection log and classification output
- Regulatory tags are correctly applied on at least one AI/GenAI submission and at least one automation submission
- At least one sprint planning session has been conducted starting from a generated artifact — and the team confirmed the artifact was plannable without requiring completion work
- Engineering or product management time saved per submission on artifact creation has been estimated or measured

---

## Quantifiable Success Metrics

| Metric | Baseline (Current State) | Target |
|--------|--------------------------|--------|
| % of approved submissions generating compliant artifacts automatically | 0% | 100% of submissions on active intake types within 60 days |
| Non-compliant artifacts discovered at sprint planning | Not tracked | Establish baseline; target 80% reduction within 90 days |
| Non-compliant artifacts discovered at governance audit | Not tracked | Establish baseline; target 90% reduction within 6 months |
| Engineering / PM time per submission spent on manual artifact creation | Estimate at go-live (likely 2–4 hours per Epic) | Target: <30 minutes review and approval of generated artifacts |
| Dependency links missing from generated artifacts | Not applicable | <5% missing rate on confirmed related submissions |
| Regulatory tag accuracy | Not applicable | 100% on classified work types |
| Sprint velocity variance attributable to artifact rework | Not measured | Establish measurement; target reduction of 50% within 90 days |
| Artifact compliance rate at audit | Not tracked | >95% within first audit cycle post-go-live |

---

---

## Cross-MVP Summary

| MVP | Core Problem | Severity | Primary Metric |
|-----|-------------|----------|----------------|
| MVP0 — Quality | Incomplete submissions consume review capacity on information retrieval instead of evaluation | High — foundational; all other MVPs depend on it | Clarification rounds per submission; % actionable on first reviewer contact |
| MVP1 — Duplication | Redundant work is funded invisibly and discovered after full cost is sunk | High — single prevented duplicate recovers platform cost many times over | Confirmed duplicates detected; cost avoidance logged |
| MVP2 — Classification | Intake pipeline is disconnected from OKRs, portfolio structure, and capacity — prioritization is queue ordering, not strategic allocation | High — connects intake to strategy | Classification accuracy; OKR coverage rate; net-new Epic reduction |
| MVP3 — Artifacts | Non-compliant artifacts enter the backlog and surface mid-sprint; manual translation of structured data is error-prone and a waste of delivery capacity | High — delivery risk and compliance liability | Compliant artifact rate; mid-sprint correction reduction; PM time saved |

**The through-line:** Each MVP eliminates a cost that the current system absorbs silently and attributes to the wrong cause. MVP0 makes quality a floor. MVP1 makes duplication visible before commitment. MVP2 makes the pipeline answerable to strategy. MVP3 makes compliance a starting condition, not an audit outcome.

---

*This document defines the problem-solution framework for each MVP phase. Acceptance criteria and definition-of-done should be reviewed and confirmed with the relevant intake owners, portfolio managers, and governance stakeholders before each phase is released to production.*
