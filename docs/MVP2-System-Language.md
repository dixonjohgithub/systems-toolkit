# MVP2 — Intake Classification: System-Level Framing

## The One-Sentence Version

**An unclassified backlog cannot be prioritized — it can only be ordered. Without classification, the organization has no way to know whether its intake pipeline is actually serving its strategic objectives, or simply processing whatever arrives loudest and most recently.**

---

## Why This Is a System-Level Problem

Every organization believes it prioritizes its work. In practice, most organizations order their work — they sequence submissions by recency, urgency, political weight, or the persistence of the requester. This is not prioritization. Prioritization requires a basis for comparison: what kind of work is this, what does it serve, what does it displace, and what is it worth relative to everything else competing for the same resources.

Without classification, none of those questions can be answered systematically. A new AI initiative, a feature request on an existing Epic, an analytics report, and a support ticket all enter the same intake queue and compete for the same review attention — with no structural information that would allow a reviewer to assess them against each other or against the portfolio's strategic direction.

This is the system-level failure: **the organization is making prioritization decisions without the information that prioritization requires. The intake pipeline is a volume processor, not a strategic filter. It moves submissions through — it does not sort them by what they are, what they serve, or what they cost in terms of the capacity they will consume.**

---

## The Visibility Asymmetry

At the reviewer level, prioritization feels like judgment. The reviewer reads a submission, assesses it against their understanding of current priorities, and makes a call. This works when a reviewer has deep context about the full portfolio, current OKR status, team capacity, and the strategic direction of each business line. It does not scale — and it produces inconsistent outcomes when different reviewers apply different mental models to the same submission.

At the portfolio level, the aggregate effect of unclassified intake is a portfolio composition that nobody designed. The distribution of net-new initiatives versus Epic extensions versus operational requests versus AI-specific work is whatever the intake volume happened to be — not a deliberate allocation of organizational capacity against strategic priorities.

Leadership looks at this portfolio and sees a list of approved work. What they cannot see is:

- What fraction of approved capacity is going to net-new initiatives versus maintaining and extending existing work
- Whether the intake pipeline is producing submissions aligned to current OKRs — or whether OKR-aligned work is being crowded out by high-volume operational requests
- Whether AI-specific submissions are being evaluated through the appropriate governance lens, or being processed through the same queue as a data report request
- Whether teams are building new Epics for problem spaces that already have active Epics — because no one classified the submission against the existing portfolio structure

**None of this is visible without classification. The portfolio is whatever the queue produced — not what strategic intent would have produced.**

---

## What Prioritization Actually Requires

Genuine prioritization — the kind that produces a portfolio composition aligned to organizational strategy — requires three inputs that classification provides:

**What kind of work is this?** A net-new initiative requires full business case review, resource allocation decision, and Epic creation. A feature on an existing Epic requires a sprint planning conversation with the owning team. A support request requires triage and routing. Treating these identically — as submissions in a queue — is not prioritization. It is processing. Classification is what converts a submission from a queue item into a typed work request that can be routed, reviewed, and compared appropriately.

**Does existing work already own this problem space?** Without portfolio position data — which classification provides by connecting the submission to the existing Epic landscape — a reviewer cannot know whether they are approving a net-new initiative or a duplicate effort in a slightly different framing. Two submissions can describe the same business problem in completely different vocabulary. Classification, built on top of MVP1's duplicate detection, gives reviewers the portfolio context they need to make an accurate determination.

**Does this serve a current OKR, and does the team that would own it have capacity?** These are the two questions that convert a submission from "interesting" to "actionable." Classification surfaces the work type and portfolio position signals that allow OKR alignment and capacity assessment to happen at review time — not after a team has been assigned and begun scoping.

Without these three inputs, prioritization is not a process — it is a guess made by whichever reviewer happens to receive the submission.

---

## The OKR Alignment Problem

OKRs are the mechanism by which organizations translate strategic intent into team-level execution. They are designed to filter: work that serves a current OKR gets resourced; work that does not gets deferred or deprioritized.

In practice, this filter only works if the intake pipeline produces OKR-labeled submissions. If submissions arrive unlabeled — as raw requests with no structural connection to the OKR framework — then OKR alignment is assessed by individual reviewers applying individual judgment, inconsistently, at review time. Some submissions will be correctly aligned. Some will be approved despite weak OKR alignment because the reviewer did not have the context to assess it. Some OKR-aligned submissions will be delayed because they were not visibly aligned and were deprioritized in favor of submissions that felt more urgent.

**The OKR framework is only as effective as the classification layer that connects intake submissions to it.** Without classification, OKRs govern what gets written in planning documents — not what actually gets built. The intake pipeline becomes a parallel system that operates independently of strategic intent.

MVP2 closes this gap. By classifying each submission — work type, portfolio position, OKR relevance signals — it connects the intake pipeline to the strategic framework. Work that serves current OKRs becomes identifiable as such at submission time. Work that does not can be flagged for deferral before review capacity is spent evaluating it.

---

## The Capacity Alignment Problem

The second prioritization input — team capacity — is equally invisible without classification. An approved submission that routes to a team with no capacity to begin it is not a prioritization win. It is a queue entry that will age in a backlog, generate status update requests, and consume coordination overhead while producing no output.

Classification routes submissions to the team and queue that correspond to the work type. This is not just an efficiency improvement — it is a prerequisite for honest capacity assessment. A reviewer who does not know which team will own a submission cannot assess whether that team has capacity to take it on. A reviewer who knows the work type, the portfolio position, and the routing destination can make that assessment in the same review session.

**Prioritization without capacity data is scheduling. Classification provides the routing information that makes capacity-aware prioritization possible.**

---

## The Portfolio Governance Frame

From a portfolio governance perspective, classification is the mechanism that converts a volume metric — intake submissions processed — into a composition metric — what the organization is actually building and why.

**Portfolio composition is a governance concern.** If the intake pipeline is producing a distribution of work that does not align to strategic priorities, the governance failure is not in execution — it is at the intake layer. Work that should not be in the portfolio was approved because no classification mechanism existed to surface its misalignment before approval.

**OKR accountability requires classification.** You cannot hold an intake process accountable to OKR alignment if submissions are not classified at intake time. The accountability mechanism only works if the classification data exists to audit against.

**Capacity governance requires routing.** You cannot govern team capacity if intake submissions are not routed by work type. The resource allocation that classification enables — routing submissions to the right team, surfacing the right reviewers, enabling capacity-aware approval — is the operational expression of strategic prioritization at the portfolio level.

MVP2 is not a tagging exercise. It is the governance mechanism that makes the intake pipeline answerable to strategic intent — by producing the structured signals that connect each submission to the OKR framework, the portfolio structure, and the capacity landscape it will draw from.

---

## The Single Framing Statement for Executive Audiences

> *"Right now, the intake pipeline does not know what kind of work it is processing. A net-new AI initiative and a feature request on an existing Epic and a data report and a support ticket all enter the same queue and compete for the same review attention — with no structural information connecting them to our OKRs, our portfolio structure, or our capacity constraints. That is not prioritization. That is ordering by volume and urgency. MVP2 is the classification layer that converts intake from a queue into a strategic filter — so that what gets approved is what serves current priorities, what fits existing portfolio structure, and what the teams responsible for it can actually absorb."*

---

## One-Line Versions by Audience

| Audience | Framing |
|----------|---------|
| Executive / Portfolio Owner | "You cannot govern portfolio composition without classification. Right now the portfolio is whatever the queue produced — not what strategic intent would have produced." |
| VP / Senior Director | "Your OKR framework only governs what gets written in planning documents, not what actually gets built — because intake submissions are not classified against OKRs at submission time." |
| Program / Portfolio Manager | "You are prioritizing submissions without knowing what type of work they are, what Epic they belong under, or whether the team that would own them has capacity. Classification gives you all three." |
| Intake Reviewer | "Instead of assessing submissions cold, you will receive them with work type, portfolio position, and OKR signals already assembled — so your review time is spent on evaluation, not reconstruction." |

---

*This framing positions MVP2 not as a categorization feature, but as the structural link between the intake pipeline and the organization's strategic framework. Without classification, OKRs and portfolio strategy are planning artifacts. With classification, they are operational filters that govern what actually gets built.*
