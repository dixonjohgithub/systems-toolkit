# MVP3 — Agile Artifact Generation: System-Level Framing

## The One-Sentence Version

**Artifact compliance is assessed after the work is designed — at the most expensive possible moment. MVP3 moves compliance from an audit activity to a creation condition, eliminating the rework cycle before it begins.**

---

## Why This Is a System-Level Problem

Every organization with Jira standards has a compliance problem. The standards exist — required fields, acceptance criteria format, definition-of-done structure, dependency documentation, regulatory tagging. Teams know the standards exist. They intend to follow them. And yet non-compliant artifacts consistently make it into backlogs, into sprint planning, and into execution — where they are discovered mid-delivery and corrected at the highest possible cost.

The standard response is more training, better templates, stricter review gates. None of these work at scale because they all share the same structural flaw: they address compliance after the artifact is created. The non-compliant artifact is already in the system. Someone has already read it, planned against it, and in many cases begun executing on it. The correction requires reconstructing context, reopening planning decisions, and consuming the attention of the people most focused on delivery — at the moment when their focus is most valuable.

This is the system-level failure: **compliance is a creation-time problem being treated as an audit-time problem. The cost of non-compliance compounds with every sprint that passes between creation and discovery. MVP3 eliminates the gap by making compliance the output condition, not the review condition.**

---

## The Visibility Asymmetry

At the team level, artifact creation happens under delivery pressure. An engineer or product manager translating an approved intake into Jira stories is doing mechanical work — applying known templates to structured intake data — but doing it manually, under time pressure, with incomplete context about what the governance framework requires for this specific work type. The result is artifacts that are close to compliant but not fully compliant: missing a regulatory tag, acceptance criteria in the wrong format, a dependency link left unresolved.

No one flags this at creation time because no one is watching. The artifact goes into the backlog. Sprint planning proceeds. Work begins. The compliance gap surfaces — if it surfaces — at a sprint review, a governance audit, or a process gate downstream. By then, the team is mid-execution. Correcting the artifact requires pulling people out of delivery mode, reconstructing the context of decisions made weeks earlier, and reopening planning agreements that both teams thought were settled.

At the portfolio level, the aggregate effect is a consistent pattern of mid-sprint disruption that is never attributed to its root cause. Leadership sees delivery delays, scope churn, and sprint velocity that falls short of planning estimates. The actual cause — that significant engineering and product management time is being spent correcting artifacts that should have been correct at creation — is invisible because it appears in the data as normal delivery variance, not as a compliance rework cost.

**The cost of non-compliant artifacts is paid in delivery capacity — the same delivery capacity that leadership is trying to protect. And it is never visible as an artifact quality problem because by the time it surfaces, it looks like a delivery problem.**

---

## What Artifact Creation Actually Costs Without Automation

When a product manager or engineer creates Jira artifacts manually from an approved intake, the work is:

**Translation, not design.** The information required to populate a compliant Epic — business problem, scope, acceptance criteria, regulatory classification, dependency links, OKR alignment — already exists in the validated intake. The manual artifact creation step is not adding value. It is re-entering structured data that the system already holds into a format the system also already knows. This is mechanical work performed by people who should be focused on delivery design, not data re-entry.

**Inconsistent by construction.** Manual translation produces variation. Two product managers applying the same template to the same intake will produce artifacts with different field completeness, different acceptance criteria specificity, different dependency link coverage. There is no mechanism that enforces consistency across artifacts created manually by different people at different times under different delivery pressures. The compliance standard exists, but its application varies.

**Expensive to correct.** The cost of correcting a non-compliant artifact scales with how far into delivery the correction happens. At sprint planning, correction is a conversation. At sprint execution, correction is an interruption. At sprint review or governance audit, correction is a reopened planning decision with downstream consequences for dependencies, timelines, and resource commitments.

The structural pattern is predictable: **the further compliance correction happens from the creation event, the more expensive it is. MVP3 moves correction to before creation — which means the cost approaches zero.**

---

## Why Compliance Cannot Be Solved by Better Templates

The standard response to non-compliant artifacts is to improve the template. Add clearer field descriptions. Add required field indicators. Add a checklist. Run a training session.

This approach consistently fails at scale for a structural reason: it addresses the symptom at the wrong point in the process. A better template does not change the fact that the person filling it out is doing so manually, under delivery pressure, with incomplete context, and with no real-time validation that their inputs meet the compliance criteria for this specific work type.

The template is static. Compliance criteria are not. The regulatory tagging requirement for an AI initiative is different from an automation request. The acceptance criteria format for a net-new Epic is different from a feature addition. The dependency linking requirement for a submission that surfaced overlap in MVP1 detection is different from a submission with no portfolio conflicts. A static template cannot encode this specificity. A static template produces the same form for every work type — which means it is never exactly right for any work type.

**Templates solve the form problem. MVP3 solves the compliance problem — because it generates artifacts that are specifically calibrated to the work type, portfolio position, and governance requirements of each individual submission, using the structured data that the intake process already collected.**

---

## The Accumulation Argument

MVP3 is the natural culmination of what the preceding phases built. By the time a submission reaches MVP3:

**MVP0** has ensured that every field in the intake is complete, specific, and validated against the intake owner's quality criteria. The data is trustworthy.

**MVP1** has searched the full portfolio for duplicate work and established the submission's relationship to existing Epics and active efforts. The portfolio position is known.

**MVP2** has classified the submission — work type, OKR alignment signals, routing destination, complexity tier. The governance context is assembled.

The artifact that MVP3 needs to generate is not a creative act. It is a structured output of structured inputs that the system has already collected, validated, and classified. The Epic description comes from the validated intake. The acceptance criteria come from the quality-validated scope. The dependency links come from MVP1's portfolio detection. The regulatory tags come from MVP2's work type classification. The complexity estimate comes from MVP2's routing signals.

**MVP3 is not adding a new capability. It is producing the natural output of a process that has been accumulating the right data since the first question of the intake conversation.** The only reason this output requires manual effort today is that no system has connected the intake data to the artifact creation step. MVP3 makes that connection.

---

## The Portfolio Governance Frame

From a portfolio governance perspective, artifact quality is a portfolio execution risk with a specific structure:

**Non-compliant artifacts create planning uncertainty.** When a story enters sprint planning without complete acceptance criteria, the team is planning against an incomplete specification. The gap will surface during execution — at the worst possible time, with the most expensive correction cost.

**Non-compliant artifacts create audit exposure.** Organizations in regulated industries — including financial services — are subject to governance audits that assess artifact compliance. A portfolio of manually-created, inconsistently-compliant artifacts is an audit risk that is difficult to quantify but impossible to ignore. The compliance gap is not in the process — it is in the artifacts the process produces.

**Compliant artifacts at creation time are a compound investment.** Every artifact that MVP3 generates correctly is an artifact that will not require correction mid-sprint, will not create planning uncertainty, and will not generate audit exposure. The value compounds across every sprint, every Epic, every initiative in the portfolio — because the correction cost that would have been paid later is simply never incurred.

**The governance argument for MVP3 is not efficiency — it is risk.** Non-compliant artifacts are not just slow. In regulated environments, they are a liability. MVP3 eliminates that liability at the source.

---

## The Single Framing Statement for Executive Audiences

> *"Right now, the translation from approved intake to Jira artifact is manual, inconsistent, and unvalidated. Engineers and product managers re-enter structured data the system already holds, applying static templates that cannot encode the specific compliance requirements for each work type. The result is artifacts that are consistently close to compliant — but not fully compliant — and the gap surfaces mid-sprint, at the highest possible correction cost. MVP3 closes the loop. The intake data is already collected, validated, classified, and positioned against the portfolio. Generating a compliant artifact from that data is the final step of a process that has been building toward it since submission. The correction cost does not move downstream — it disappears."*

---

## One-Line Versions by Audience

| Audience | Framing |
|----------|---------|
| Executive / Portfolio Owner | "Non-compliant artifacts are a mid-sprint risk that appears in the data as delivery variance. MVP3 eliminates the root cause before the sprint begins." |
| VP / Senior Director | "Your teams are spending engineering and product management time re-entering data the system already has, producing artifacts that are inconsistently compliant and expensive to correct. MVP3 automates the mechanical part so delivery focus stays on delivery." |
| Program / Portfolio Manager | "Every non-compliant artifact in your portfolio is a future interruption waiting to happen. MVP3 means every artifact that enters the backlog is compliant at creation — not corrected mid-execution." |
| Intake Reviewer / Scrum Master | "The Epic and stories are generated for you — populated from the validated intake, tagged by work type, linked to portfolio dependencies. Your sprint planning starts from a compliant artifact, not from a template." |

---

*This framing positions MVP3 not as an automation feature, but as the completion of the governance chain. MVP0 establishes quality at intake. MVP1 establishes portfolio integrity. MVP2 establishes strategic alignment. MVP3 ensures that the execution artifacts produced from that chain are compliant by construction — closing the loop between intake governance and delivery governance.*
