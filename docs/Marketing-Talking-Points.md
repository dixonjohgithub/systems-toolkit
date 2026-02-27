# Agentic Intake Platform — Marketing Talking Points
## For Marketing Conversations with Potential Intake Clients

---

## What You Are Selling

You are not selling a form. You are not selling a chatbot. You are not selling a Jira integration.

You are selling **portfolio governance** — specifically, the ability for an organization to know what it is building, whether it should be building it, and whether the work it approves is actually ready to execute.

Every organization with more than one team submitting work requests has this problem. Most of them do not know they have it — because the symptoms look like other things. That is the conversation you are opening.

---

## The Opening Question

Start here. Do not pitch the platform. Ask this:

> *"When someone submits a new initiative or a new request for work — before anyone approves it, before any resources are committed — how does your organization know it hasn't already been built, or isn't already being built by another team?"*

Let them answer. Most organizations will pause. Some will say "we have a process for that." Ask them to describe it. It will be ad hoc, inconsistent, or dependent on someone's personal knowledge of the portfolio.

That pause — or that answer — is the problem you are solving.

---

## The Four Conversations, In Order

Each MVP maps to a distinct pain point. You do not need to sell all four at once. Find which conversation resonates and go deep there.

---

### Conversation 1 — Quality (MVP0)
**The pain:** Reviewers spend significant time chasing clarification on incomplete submissions before they can evaluate them. This is so normalized it does not register as a problem — it is just "how intake works."

**The reframe:** That clarification cycle is not a process step. It is a tax on your most expensive review capacity — the attention of the people qualified to evaluate and approve work. Every clarification cycle is review capacity spent on information retrieval instead of decision-making.

**The question to ask:**
> *"How many rounds of back-and-forth does your team typically go through before a submission is complete enough to actually evaluate? And who is doing that back-and-forth — what is their time worth?"*

**The point to land:**
The quality problem is invisible because the cost is paid locally by individual reviewers and never aggregated. But across a portfolio of hundreds of submissions, the misallocation of review capacity is significant — and entirely preventable if the quality bar is enforced at submission, not chased after the fact.

---

### Conversation 2 — Duplicate Detection (MVP1)
**The pain:** Two teams independently build the same capability. Nobody catches it until mid-development — or post-launch. The organization has paid for the same thing twice and now owns two versions of it.

**The reframe:** This is not a communication failure. Teams cannot coordinate against information they do not have. No team has systematic visibility into what every other team is building. The solution is not more meetings — it is connecting every new submission to the full portfolio at the moment it is submitted.

**The question to ask:**
> *"Has your organization ever discovered that two teams were building the same thing at the same time? How far into development were they when it was caught? What did that cost?"*

**The point to land:**
The cost of detecting a duplicate before a submission is approved is near zero. The cost of discovering it after environment access, data provisioning, and engineering sprints are already committed is the full sunk cost of both efforts. The math on this one is easy — one prevented duplicate typically covers the cost of the platform many times over.

---

### Conversation 3 — Classification (MVP2)
**The pain:** Leadership believes they are prioritizing their portfolio. In practice, they are ordering a queue — processing submissions by recency, urgency, or whoever asked loudest. There is no structural mechanism connecting intake submissions to OKRs, team capacity, or existing portfolio structure.

**The reframe:** You cannot prioritize what you cannot classify. A net-new AI initiative and a feature request on an existing Epic and a data report should not compete in the same undifferentiated queue. They require different reviewers, different approval paths, different governance criteria, and different capacity assessments. Treating them identically is not prioritization — it is volume processing.

**The question to ask:**
> *"If I asked you right now what percentage of your current intake submissions are net-new initiatives versus extensions of existing work — and whether that ratio is intentional or just what happened — could you answer that?"*

**The point to land:**
Portfolio composition is a governance responsibility. If the distribution of work being approved is not deliberate — if it is whatever the queue produced — then strategic intent is not governing execution. Classification is the mechanism that connects intake to strategy. Without it, OKRs are planning documents, not operational filters.

---

### Conversation 4 — Artifact Generation (MVP3)
**The pain:** Approved intakes get translated into Jira artifacts manually by engineers and product managers under delivery pressure. The artifacts are inconsistently compliant with organizational standards. Gaps surface mid-sprint at the worst possible time — when correction is most expensive and most disruptive.

**The reframe:** This is not a template problem. Static templates cannot encode the specific compliance requirements for each work type, each regulatory classification, each portfolio position. The fix is not a better form — it is generating compliant artifacts automatically from the structured data the intake process already collected.

**The question to ask:**
> *"When your teams translate approved work into Jira stories and Epics, how often do those artifacts come back for correction during sprint planning or execution? What does that interruption cost in terms of delivery focus?"*

**The point to land:**
The information required to generate a fully compliant Jira artifact already exists in the validated, classified intake. The manual translation step is not adding value — it is introducing inconsistency and risk. Automating it does not remove human judgment from the process. It removes the mechanical rework that should never have been a human task in the first place.

---

## The System-Level Argument — When You Need to Go Bigger

If you are talking to a senior leader or executive sponsor who wants to understand the platform as a whole, not just one pain point, this is the argument:

**Most organizations do not have an intake problem. They have a portfolio governance problem that manifests as intake symptoms.**

The symptoms are: slow review queues, overwhelmed reviewers, redundant builds discovered mid-development, backlogs that do not reflect strategic priorities, and Jira artifacts that require mid-sprint correction. Each of these is treated as its own problem, addressed with its own local fix, and none of the fixes work at scale because they are addressing symptoms downstream of the root cause.

The root cause is that there is no governance layer between "someone submits a request" and "that request enters the portfolio." Work enters the system without a quality standard, without a duplication check, without a classification against strategic priorities, and without compliant execution artifacts. The result is a portfolio that is the sum of everything that got through — not the sum of everything that should have been approved.

This platform is that governance layer. It does not change how teams work. It does not replace human judgment. It ensures that every submission that reaches a reviewer is complete, not a duplicate, classified against strategic context, and generates compliant artifacts on approval. The reviewer's time is spent on the decision — not on the information retrieval that should have happened before the submission arrived.

---

## The Objections You Will Hear — and How to Handle Them

**"We already have an intake process."**
Every organization does. The question is not whether a process exists — it is whether the process enforces a quality standard, detects duplication, classifies submissions against strategic context, and produces compliant artifacts. Most processes do none of these things systematically. They do them inconsistently, manually, and after the fact.

**"Our teams already talk to each other."**
Communication culture does not solve an information asymmetry problem. Teams can have excellent communication and still not know what every other team across 120+ intake processes is building at any given moment. Systematic portfolio visibility is not a substitute for communication — it is what makes communication about the right things, at the right time, before cost is committed.

**"We can't add more friction to the intake process."**
This is the most important objection to address carefully. The platform does not add friction to good submissions — it removes friction downstream. A submitter who provides a complete, specific, well-scoped request moves through the intake conversation quickly and never hears from a reviewer asking for clarification. The friction this platform eliminates — clarification cycles, duplicate discovery, mid-sprint correction — is far greater than what it adds at submission time.

**"We have Jira templates for that."**
Static templates enforce field presence, not field quality. A template that requires "acceptance criteria" does not enforce what acceptable acceptance criteria look like for a net-new AI initiative versus a feature extension versus an automation request. The platform enforces quality criteria that are specific to each intake type, defined by the intake owner, and applied consistently to every submission.

**"This sounds like it would take months to implement."**
MVP0 is live. Twelve intake configurations are active today. Adding a new intake type requires a YAML configuration file — no code changes. The platform is operational and the first phase of value is available immediately.

---

## The Numbers That Matter

These are the anchors for the business case conversation. You do not need all of them — find the one that resonates with the client's specific pain.

- **One prevented duplicate effort** typically recovers the cost of the platform many times over. Ask clients to estimate what one redundant build cost their organization in the last 18 months.
- **Review capacity is expensive.** If a senior reviewer earning $150K spends 20% of their time on clarification back-and-forth rather than evaluation, that is $30K per year per reviewer in misallocated capacity — before counting the committee time, the scheduling overhead, and the decisions made on incomplete information.
- **Mid-sprint artifact correction** typically costs 3-5x what creation-time correction costs. Ask clients how often their teams open already-planned stories during execution to add acceptance criteria or compliance fields.
- **120+ intake processes** means 120+ opportunities for quality failures, duplicates, misclassification, and non-compliant artifacts to enter the portfolio. The platform addresses all of them from a single governance layer.

---

## What This Is Not

Be clear about what the platform is not, so the conversation stays focused:

- It is not a project management tool. It governs what enters the portfolio — not how the portfolio is executed.
- It is not a workflow automation tool that replaces human judgment. Reviewers still review. Approvers still approve. The platform ensures their time is spent on those activities, not on the administrative work that should have happened before they were involved.
- It is not specific to AI initiatives. Every work request type — features, Epics, analytics, automation, support — is governed by the same layer. The platform is portfolio-wide, not AI-specific.
- It is not a Jira replacement. It is a governance layer that connects the intake process to Jira — ensuring that what enters Jira is complete, non-duplicate, classified, and compliant.

---

## The One Thing to Leave Them With

> *"Every organization believes its intake process works because work gets approved and work gets done. What they cannot see is how much of their review capacity is spent on information retrieval instead of evaluation, how much of their portfolio is redundant effort they funded twice, and whether what got approved actually reflects strategic priorities or just what arrived most recently. This platform makes all of that visible — and governable — before cost is committed, not after it is discovered."*

---

*These talking points are structured for a marketing conversation, not a technical sale. Lead with the pain and the question. Let the client describe their experience of the problem before introducing the solution. The platform sells itself once the client recognizes that what they have been treating as a process problem is actually a governance gap.*
