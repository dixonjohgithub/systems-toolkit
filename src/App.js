import { useState, useRef, useCallback, useEffect } from "react";

// ─── GOOGLE FONTS INJECTION ─────────────────────────────────────────────────────
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

// ─── DESIGN TOKENS ──────────────────────────────────────────────────────────────
const T = {
  bg: "#F8F9FA",
  surface: "#FFFFFF",
  surfaceAlt: "#F1F3F5",
  border: "#E2E8F0",
  borderStrong: "#CBD5E1",
  text: "#0F172A",
  textMid: "#475569",
  textMuted: "#94A3B8",
  sidebar: "#1E293B",
  sidebarText: "#94A3B8",
  sidebarActive: "#FFFFFF",
  sidebarActiveBg: "#334155",
  nav: "#0F172A",
  navText: "#94A3B8",
  font: "'Inter', system-ui, sans-serif",
  mono: "'JetBrains Mono', 'Courier New', monospace",
};

const CAT_COLORS = {
  email:     { accent: "#F59E0B", light: "#FFFBEB", border: "#FDE68A" },
  meeting:   { accent: "#10B981", light: "#ECFDF5", border: "#A7F3D0" },
  ideation:  { accent: "#8B5CF6", light: "#F5F3FF", border: "#DDD6FE" },
  project:   { accent: "#3B82F6", light: "#EFF6FF", border: "#BFDBFE" },
  daily:     { accent: "#EF4444", light: "#FEF2F2", border: "#FECACA" },
  discovery: { accent: "#F97316", light: "#FFF7ED", border: "#FED7AA" },
  mindmap:   { accent: "#06B6D4", light: "#ECFEFF", border: "#A5F3FC" },
};

// ─── TEMPLATES ──────────────────────────────────────────────────────────────────
const templates = {
  email: [
    {
      id: "email-proposal", title: "Proposal / Pitch Email",
      description: "When proposing a new initiative or idea to decision-makers",
      fields: [
        { key: "constraint", label: "Current Constraint / Problem", placeholder: "What bottleneck or gap currently exists in the system?" },
        { key: "intervention", label: "Proposed Intervention", placeholder: "What specifically are you proposing?" },
        { key: "tradeoff", label: "Trade-off Acknowledged", placeholder: "What does this cost or require? What are we giving up?" },
        { key: "downstream1", label: "Downstream Effect (6 months)", placeholder: "What changes downstream if this works?" },
        { key: "downstream2", label: "Downstream Effect (18 months)", placeholder: "What becomes possible that isn't possible now?" },
        { key: "ask", label: "Precise Ask", placeholder: "One specific, bounded request — not 'coffee to discuss'" },
      ],
      template: (v) => `Subject: [${v.intervention || "Initiative"}] — Structural case for moving forward\n\nContext: ${v.constraint || "[Current constraint the system is operating under]"}\n\nProposed intervention: ${v.intervention || "[What you're proposing]"}\n\nTrade-off acknowledged: ${v.tradeoff || "[What this requires / what we give up]"}\n\nNear-term effect (6 months): ${v.downstream1 || "[What changes downstream]"}\n\nStrategic effect (18 months): ${v.downstream2 || "[What becomes possible]"}\n\nSpecific ask: ${v.ask || "[Bounded, precise request]"}`,
    },
    {
      id: "email-followup", title: "Follow-up / Status Email",
      description: "Following up on a decision or conversation — with optionality framing",
      fields: [
        { key: "context", label: "System Context", placeholder: "What is the current state of the system / project?" },
        { key: "blockers", label: "Active Constraints", placeholder: "What is blocking progress right now?" },
        { key: "options", label: "Option Set", placeholder: "What are the 2-3 paths forward? List them." },
        { key: "recommendation", label: "Recommended Path + Rationale", placeholder: "Which option and why — in consequence terms" },
        { key: "ask", label: "Decision Needed", placeholder: "What specific decision is needed from them?" },
      ],
      template: (v) => `Subject: Decision needed — [${v.context || "Project"}] path forward\n\nCurrent system state: ${v.context || "[State of the project / system]"}\n\nActive constraints: ${v.blockers || "[What is blocking forward movement]"}\n\nOptions on the table:\n${v.options || "Option A: ...\nOption B: ...\nOption C: ..."}\n\nRecommended path: ${v.recommendation || "[Option + consequence-based rationale]"}\n\nDecision needed from you: ${v.ask || "[Specific decision, by when if relevant]"}`,
    },
    {
      id: "email-cold", title: "Strategic Outreach (Cold)",
      description: "Reaching out to someone powerful — lead with optionality, not need",
      fields: [
        { key: "problem", label: "Problem They Have Right Now", placeholder: "What specific constraint are they operating under?" },
        { key: "capability", label: "Your Specific Capability", placeholder: "What do you do that addresses that exact constraint?" },
        { key: "evidence", label: "Evidence / Proof", placeholder: "Metric, result, or demonstrated output — not claims" },
        { key: "optionality", label: "Option You're Creating for Them", placeholder: "What choice does your existence give them that they didn't have?" },
        { key: "ask", label: "Minimal Precise Ask", placeholder: "The smallest possible request that moves things forward" },
      ],
      template: (v) => `Subject: [${v.capability || "Capability"}] — relevant to [${v.problem || "your current constraint"}]\n\nYou're dealing with: ${v.problem || "[Their current constraint — be specific]"}\n\nWhat I do: ${v.capability || "[Your specific capability]"}\n\nEvidence: ${v.evidence || "[Metric, result, demonstrated output — not claims]"}\n\nThis creates an option for you: ${v.optionality || "[What choice does your existence give them]"}\n\nOne ask: ${v.ask || "[Smallest possible, bounded request]"}`,
    },
  ],
  meeting: [
    {
      id: "meeting-before", title: "Pre-Meeting Prep",
      description: "Frame your thinking before any important meeting",
      fields: [
        { key: "decision", label: "Decision Being Made", placeholder: "What is actually being decided in this meeting?" },
        { key: "incentives", label: "Incentives in the Room", placeholder: "What does each stakeholder gain or lose from each outcome?" },
        { key: "constraints", label: "Real Constraints", placeholder: "Budget, time, political, regulatory — what limits the options?" },
        { key: "secondorder", label: "Second-Order Effects to Surface", placeholder: "What downstream consequence will others miss that you can name?" },
        { key: "contribution", label: "Your One Precise Contribution", placeholder: "The single most systemically relevant thing you can say" },
        { key: "silence", label: "What You Will NOT Say", placeholder: "What are you holding back — and why?" },
      ],
      template: (v) => `PRE-MEETING SYSTEMS PREP\n━━━━━━━━━━━━━━━━━━━━━━━━\n\nDecision being made:\n${v.decision || "[What is actually being decided]"}\n\nIncentive map:\n${v.incentives || "[Who gains/loses from each outcome]"}\n\nReal constraints:\n${v.constraints || "[Budget, political, regulatory, time limits]"}\n\nSecond-order effect I can name:\n${v.secondorder || "[Downstream consequence others will miss]"}\n\nMy one precise contribution:\n${v.contribution || "[The most systemically relevant thing I can say]"}\n\nWhat I will NOT say (restraint):\n${v.silence || "[What I'm holding back and why]"}`,
    },
    {
      id: "meeting-notes", title: "Meeting Notes (Systems Frame)",
      description: "Capture meetings in terms of decisions, constraints, and downstream effects",
      fields: [
        { key: "decision", label: "Decision / Outcome", placeholder: "What was actually decided or resolved?" },
        { key: "constraints", label: "Constraints Surfaced", placeholder: "What limits were named — budget, capacity, political?" },
        { key: "tradeoffs", label: "Trade-offs Made", placeholder: "What was accepted in exchange for what?" },
        { key: "downstream", label: "Downstream Effects Named", placeholder: "What second-order consequences were raised?" },
        { key: "gaps", label: "System Gaps Observed", placeholder: "What wasn't said? What's the real bottleneck?" },
        { key: "leverage", label: "Your Leverage Point", placeholder: "Where does your capability intersect with the unresolved constraint?" },
      ],
      template: (v) => `MEETING NOTES — SYSTEMS FRAME\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDecision / outcome:\n${v.decision || "[What was resolved]"}\n\nConstraints surfaced:\n${v.constraints || "[Budget, capacity, political, regulatory limits named]"}\n\nTrade-offs made:\n${v.tradeoffs || "[What was accepted in exchange for what]"}\n\nDownstream effects raised:\n${v.downstream || "[Second-order consequences discussed]"}\n\nSystem gaps I observed:\n${v.gaps || "[What wasn't said / the real unspoken bottleneck]"}\n\nMy leverage point:\n${v.leverage || "[Where my capability meets their unresolved constraint]"}`,
    },
  ],
  ideation: [
    {
      id: "idea-stress", title: "Idea Stress Test",
      description: "Run any idea through a systems filter before presenting it",
      fields: [
        { key: "idea", label: "The Idea", placeholder: "State it in one sentence" },
        { key: "bottleneck", label: "Bottleneck It Removes", placeholder: "What constraint in the current system does this dissolve?" },
        { key: "incentives", label: "Incentive Alignment", placeholder: "Who benefits? Who loses? Who will resist?" },
        { key: "secondorder", label: "Second-Order Effects", placeholder: "What does this make easier/harder downstream?" },
        { key: "thirdorder", label: "Third-Order Effects / Precedent", placeholder: "What does the second-order effect cause?" },
        { key: "failure", label: "Most Likely Failure Mode", placeholder: "How does this go wrong? What assumption is most fragile?" },
        { key: "signal", label: "Signal Version of the Pitch", placeholder: "Restate in pure systems language — no adjectives, no passion" },
      ],
      template: (v) => `IDEA STRESS TEST\n━━━━━━━━━━━━━━━\n\nThe idea:\n${v.idea || "[One sentence]"}\n\nBottleneck it removes:\n${v.bottleneck || "[Current constraint this dissolves]"}\n\nIncentive alignment:\n${v.incentives || "[Who gains, who loses, who will resist]"}\n\nSecond-order effects:\n${v.secondorder || "[What this makes easier/harder downstream]"}\n\nThird-order effects / precedent:\n${v.thirdorder || "[What the second-order causes / what precedent this sets]"}\n\nMost likely failure mode:\n${v.failure || "[How this goes wrong / what assumption is probably wrong]"}\n\nSignal version of the pitch:\n${v.signal || "[Pure systems language — no adjectives, just consequence]"}`,
    },
    {
      id: "idea-framing", title: "Idea Framing for Decision-Makers",
      description: "Translate an idea from emotional/moral framing to systems framing",
      fields: [
        { key: "emotional", label: "Your Emotional / Moral Frame (private)", placeholder: "Why you actually care — be honest" },
        { key: "system_problem", label: "System Problem It Solves", placeholder: "The constraint in measurable, observable terms" },
        { key: "cost_inaction", label: "Cost of Non-Intervention", placeholder: "What happens if nothing changes? Make it concrete" },
        { key: "optionality", label: "New Options It Creates", placeholder: "What becomes possible that isn't possible now?" },
        { key: "systems_pitch", label: "Systems Language Pitch", placeholder: "Consequence-first, no fluff — what you actually say" },
      ],
      template: (v) => `IDEA FRAMING — TRANSLATION EXERCISE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nYour internal frame (keep private):\n${v.emotional || "[Why you actually care]"}\n\nSystem problem it solves:\n${v.system_problem || "[Constraint in measurable, observable terms]"}\n\nCost of non-intervention:\n${v.cost_inaction || "[What happens if nothing changes — concrete]"}\n\nNew options it creates:\n${v.optionality || "[What becomes possible that isn't now]"}\n\nWhat you actually say:\n${v.systems_pitch || "[Consequence-first pitch — no adjectives, no moral claims]"}`,
    },
  ],
  project: [
    {
      id: "project-charter", title: "Project Charter (Systems Frame)",
      description: "Define any project in structural terms from the start",
      fields: [
        { key: "bottleneck", label: "Bottleneck Being Removed", placeholder: "What specific constraint does this project dissolve?" },
        { key: "incentives", label: "Stakeholder Incentive Map", placeholder: "Who gains what from success? Who loses what?" },
        { key: "constraints", label: "Operating Constraints", placeholder: "Budget, timeline, political, regulatory, technical limits" },
        { key: "dependencies", label: "Structural Dependencies", placeholder: "What must this project create that others will rely on?" },
        { key: "secondorder", label: "Second-Order Effects", placeholder: "What changes downstream 6-18 months after delivery?" },
        { key: "failure", label: "Failure Modes", placeholder: "How does this project fail? What assumption is most fragile?" },
        { key: "leverage", label: "Your Irreplaceable Contribution", placeholder: "What part of this only you can do?" },
      ],
      template: (v) => `PROJECT CHARTER — SYSTEMS FRAME\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nBottleneck being removed:\n${v.bottleneck || "[Specific constraint this project dissolves]"}\n\nStakeholder incentive map:\n${v.incentives || "[Who gains what / who loses what from success]"}\n\nOperating constraints:\n${v.constraints || "[Budget, timeline, political, regulatory, technical]"}\n\nStructural dependencies created:\n${v.dependencies || "[What this project produces that others will rely on]"}\n\nSecond-order effects (6-18 months):\n${v.secondorder || "[What changes downstream after delivery]"}\n\nFailure modes:\n${v.failure || "[How this fails / most fragile assumption]"}\n\nYour irreplaceable contribution:\n${v.leverage || "[What only you can do here — your bottleneck position]"}`,
    },
    {
      id: "project-update", title: "Project Status Update",
      description: "Communicate project status in consequence terms, not activity terms",
      fields: [
        { key: "state", label: "System State", placeholder: "Not 'on track' — what is actually true right now?" },
        { key: "constraints", label: "Active Constraints", placeholder: "What is limiting velocity right now?" },
        { key: "tradeoffs", label: "Trade-offs Made Since Last Update", placeholder: "What did we accept in exchange for what?" },
        { key: "downstream", label: "Downstream Risk / Opportunity", placeholder: "What does the current state make more or less likely?" },
        { key: "decision", label: "Decision Needed", placeholder: "What specific decision is needed from leadership?" },
      ],
      template: (v) => `PROJECT STATUS — SYSTEMS FRAME\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSystem state:\n${v.state || "[Actual state — not 'on track', but what is true]"}\n\nActive constraints:\n${v.constraints || "[What is limiting velocity right now]"}\n\nTrade-offs made:\n${v.tradeoffs || "[What we accepted in exchange for what]"}\n\nDownstream risk / opportunity:\n${v.downstream || "[What current state makes more or less likely]"}\n\nDecision needed:\n${v.decision || "[Specific decision from leadership to remove the constraint]"}`,
    },
  ],
  daily: [
    {
      id: "daily-translation", title: "Daily Language Translation",
      description: "Translate something you said or will say into systems language",
      fields: [
        { key: "original", label: "What You Said / Will Say (emotional/moral frame)", placeholder: "The version with passion, intention, adjectives" },
        { key: "incentive", label: "Underlying Incentive Structure", placeholder: "What are the real incentives driving this situation?" },
        { key: "constraint", label: "Real Constraint", placeholder: "What is the actual bottleneck you're working around?" },
        { key: "tradeoff", label: "Trade-off Involved", placeholder: "What is being gained at what cost?" },
        { key: "downstream", label: "Downstream Effect", placeholder: "What does this cause next?" },
        { key: "translated", label: "Translated Version (systems language)", placeholder: "Rewrite using only: incentives, constraints, trade-offs, downstream effects" },
      ],
      template: (v) => `DAILY TRANSLATION DRILL\n━━━━━━━━━━━━━━━━━━━━━━\n\nOriginal (emotional / moral frame):\n"${v.original || "[What you said or will say]"}"\n\nIncentive structure:\n${v.incentive || "[What are the real incentives driving this?]"}\n\nReal constraint:\n${v.constraint || "[Actual bottleneck]"}\n\nTrade-off:\n${v.tradeoff || "[What gained at what cost]"}\n\nDownstream effect:\n${v.downstream || "[What this causes next]"}\n\nTranslated (systems language):\n"${v.translated || "[Consequence-first rewrite — no adjectives, no moral claims]"}"`,
    },
    {
      id: "daily-audit", title: "Signal vs. Noise Audit",
      description: "Review any communication you sent and score it",
      fields: [
        { key: "communication", label: "Communication to Audit", placeholder: "Paste the email, message, or talking point" },
        { key: "noise", label: "Noise Elements Found", placeholder: "Vague intent, emotional language, generic ambition, unstructured intelligence" },
        { key: "signal", label: "Signal Elements Found", placeholder: "Clear role, precise language, system awareness, proportional behavior" },
        { key: "rewrite", label: "Signal Rewrite", placeholder: "The version that passes the filter" },
      ],
      template: (v) => `SIGNAL / NOISE AUDIT\n━━━━━━━━━━━━━━━━━━━━\n\nOriginal communication:\n${v.communication || "[Paste what you wrote or said]"}\n\nNoise elements identified:\n${v.noise || "[Vague intent / emotional language / generic ambition / unstructured claims]"}\n\nSignal elements identified:\n${v.signal || "[Clear role / precise language / system awareness / proportional behavior]"}\n\nSignal rewrite:\n${v.rewrite || "[Version that passes the filter]"}`,
    },
  ],
  discovery: [
    {
      id: "disc-environment-scan",
      title: "Environment Scan",
      description: "Map any team, org, or system to locate where structural power gaps exist",
      fields: [
        { key: "environment",       label: "Environment Being Scanned",             placeholder: "Name it specifically: team, department, platform, or workflow — e.g. 'home lending data group', 'AI intake process at the bank'" },
        { key: "stated_goal",       label: "What They Say They Are Doing",          placeholder: "The official mission, mandate, or goal of this environment" },
        { key: "actual_constraint", label: "What Is Actually Constraining Them",    placeholder: "The real blocker beneath the stated goal — budget, coordination gap, skill deficit, politics, data access, tooling, or trust?" },
        { key: "decision_flow",     label: "Who Actually Controls Decisions",       placeholder: "Not the org chart — who really approves, blocks, or routes resources? Where does flow actually stop?" },
        { key: "pain_signals",      label: "Observable Pain Signals",               placeholder: "Visible symptoms of dysfunction: missed deadlines, redundant work, constant escalations, siloed knowledge, shadow processes people built around the broken thing" },
        { key: "capability_gap",    label: "Where Your Capability Removes a Constraint", placeholder: "Which of their bottlenecks could your AI / analytical / synthesis / engineering capability dissolve — specifically?" },
        { key: "entry_point",       label: "Most Viable Entry Point",               placeholder: "The smallest, most tractable problem you could solve first to demonstrate value and build a structural foothold" },
      ],
      template: (v) => `ENVIRONMENT SCAN\n━━━━━━━━━━━━━━━━\n\nEnvironment:\n${v.environment || "[Team, department, platform, or workflow being scanned]"}\n\nWhat they say they are doing:\n${v.stated_goal || "[Official mission or mandate]"}\n\nWhat is actually constraining them:\n${v.actual_constraint || "[Real bottleneck — budget, coordination, skill, politics, data access, tooling, trust]"}\n\nWho actually controls decisions (not org chart):\n${v.decision_flow || "[Who approves, blocks, routes resources — where flow really stops]"}\n\nObservable pain signals:\n${v.pain_signals || "[Missed deadlines, redundant work, escalations, silos, shadow processes]"}\n\nWhere my capability removes a constraint:\n${v.capability_gap || "[Which bottleneck your specific capability dissolves]"}\n\nMost viable entry point:\n${v.entry_point || "[Smallest tractable problem that creates a structural foothold]"}`,
    },
    {
      id: "disc-bottleneck-finder",
      title: "Bottleneck Finder",
      description: "Trace exactly where flow breaks down in any process, pipeline, or system",
      fields: [
        { key: "system",         label: "System or Process Being Mapped",    placeholder: "Name the workflow or pipeline precisely — e.g. 'AI project intake', 'loan origination', 'model deployment pipeline', 'data migration'" },
        { key: "input",          label: "What Enters the System",            placeholder: "What triggers the process? Requests, data submissions, ideas, tickets, applications?" },
        { key: "output",         label: "What Should Exit the System",       placeholder: "The intended output — approved decision, deployed model, clean dataset, funded initiative, reviewed proposal?" },
        { key: "slowest_step",   label: "Where Flow Slows or Stops",         placeholder: "Which step takes the longest, generates the most rework, or causes the most escalations and complaints?" },
        { key: "who_waits",      label: "Who Is Waiting on Whom",            placeholder: "Trace the dependency chain. Who cannot move until someone else acts? That person or process is the bottleneck." },
        { key: "workarounds",    label: "Existing Workarounds",              placeholder: "What informal fixes, shadow processes, or manual overrides have people already built? These point directly at real bottlenecks." },
        { key: "root_cause",     label: "Root Cause Hypothesis",             placeholder: "Data problem? Coordination failure? Tooling gap? Trust deficit? Policy constraint? Unclear ownership? Name your best hypothesis." },
        { key: "intervention",   label: "Highest Leverage Intervention",     placeholder: "The single change that removes the most downstream friction — and specifically where your capability fits into that fix" },
      ],
      template: (v) => `BOTTLENECK FINDER\n━━━━━━━━━━━━━━━━━\n\nSystem / process being mapped:\n${v.system || "[Workflow, pipeline, or process]"}\n\nWhat enters the system:\n${v.input || "[Triggers — requests, data, decisions, applications, tickets, ideas]"}\n\nWhat should exit the system:\n${v.output || "[Intended output — decision, deployment, dataset, approval]"}\n\nWhere flow slows or stops:\n${v.slowest_step || "[Slowest step / highest rework / most escalations]"}\n\nWho is waiting on whom:\n${v.who_waits || "[Dependency chain — who cannot move until someone else acts]"}\n\nExisting workarounds (these reveal the real bottleneck):\n${v.workarounds || "[Informal fixes, shadow processes, manual overrides people created]"}\n\nRoot cause hypothesis:\n${v.root_cause || "[Data / coordination / tooling / trust / policy / ownership problem?]"}\n\nHighest leverage intervention:\n${v.intervention || "[Single change removing most downstream friction — where your capability fits]"}`,
    },
    {
      id: "disc-stakeholder-map",
      title: "Stakeholder Power Map",
      description: "Map who actually controls outcomes before you engage — not who the org chart says does",
      fields: [
        { key: "environment",      label: "Environment",                          placeholder: "The team, project, or initiative you are mapping" },
        { key: "formal_authority", label: "Formal Authority (org chart)",         placeholder: "Who is officially in charge — titles, roles, approval chains, budget holders" },
        { key: "real_authority",   label: "Real Authority (actual influence)",    placeholder: "Who do people actually listen to? Who can quietly kill a project? Who has the ear of the real decision-maker without having the title?" },
        { key: "gatekeepers",      label: "Gatekeepers",                          placeholder: "Who controls access to: budget, data, environments, executive attention, headcount, tooling approvals, infrastructure?" },
        { key: "allies",           label: "Potential Allies (aligned incentives)",placeholder: "Who benefits from your success? Who is solving an adjacent problem and gains if your capability exists?" },
        { key: "resistors",        label: "Likely Resistors (misaligned incentives)", placeholder: "Who loses status, budget, or relevance if your initiative succeeds? Be honest — these people will create friction and you need to see it in advance." },
        { key: "entry",            label: "Your Structural Entry Point",          placeholder: "Which stakeholder has the most acute pain you can address right now? Start there — not at the top of the hierarchy." },
        { key: "positioning",      label: "How to Position With Each Group",      placeholder: "What does each group need to hear — in their own consequence frame — for your work to be welcomed rather than resisted?" },
      ],
      template: (v) => `STAKEHOLDER POWER MAP\n━━━━━━━━━━━━━━━━━━━━━\n\nEnvironment: ${v.environment || "[Team, project, or initiative]"}\n\nFormal authority (org chart):\n${v.formal_authority || "[Who is officially in charge]"}\n\nReal authority (actual influence):\n${v.real_authority || "[Who people actually listen to / who can quietly kill a project]"}\n\nGatekeepers (budget, data, attention, access):\n${v.gatekeepers || "[Who controls the resources and access that matter]"}\n\nPotential allies (aligned incentives):\n${v.allies || "[Who benefits from your success / who gains if your capability exists]"}\n\nLikely resistors (misaligned incentives):\n${v.resistors || "[Who loses status, budget, or relevance if you succeed — name them]"}\n\nYour structural entry point:\n${v.entry || "[Which stakeholder has the most acute pain you can address — start there]"}\n\nPositioning for each group:\n${v.positioning || "[What each group needs to hear in their own consequence frame]"}`,
    },
    {
      id: "disc-opportunity-score",
      title: "Opportunity Scorecard",
      description: "Evaluate any discovered opportunity against structural criteria before committing",
      fields: [
        { key: "opportunity",    label: "The Opportunity",                  placeholder: "Describe the project, initiative, or engagement in one sentence" },
        { key: "bottleneck",     label: "Bottleneck It Removes",            placeholder: "What specific constraint does this dissolve — for the org, the team, or your own structural position?" },
        { key: "fit",            label: "Structural Fit Score (1–5)",       placeholder: "5 = you become the irreplaceable node this cannot function without. 1 = interchangeable contributor easily replaced by a vendor or data engineer." },
        { key: "access",         label: "Access It Creates",                placeholder: "What rooms, relationships, datasets, platforms, or future opportunities does doing this well unlock?" },
        { key: "replaceability", label: "Replaceability Risk",              placeholder: "How easily could a data engineer, existing vendor, or off-the-shelf tool do this instead? What makes you the right person specifically?" },
        { key: "cost",           label: "Opportunity Cost",                 placeholder: "What are you NOT doing if you pursue this? Is this the highest-leverage use of your capacity right now — or are you neglecting something more structurally important?" },
        { key: "downstream",     label: "Downstream Position Created",      placeholder: "If this succeeds, what does it make possible next? Does it compound toward structural inevitability — or is it a one-time, dead-end contribution?" },
        { key: "verdict",        label: "Verdict: Pursue / Defer / Pass",   placeholder: "Your consequence-based decision. No sentiment, no passion. Just the structural logic for why this is or is not worth your time." },
      ],
      template: (v) => `OPPORTUNITY SCORECARD\n━━━━━━━━━━━━━━━━━━━━━\n\nOpportunity:\n${v.opportunity || "[One sentence description]"}\n\nBottleneck it removes:\n${v.bottleneck || "[Specific constraint dissolved — for org, team, or your structural position]"}\n\nStructural fit (1–5):\n${v.fit || "[5 = irreplaceable bottleneck position / 1 = interchangeable contributor]"}\n\nAccess it creates:\n${v.access || "[Rooms, relationships, data, platforms, or future opportunities this unlocks]"}\n\nReplaceability risk:\n${v.replaceability || "[How easily could someone or something else do this? What makes you specifically right?]"}\n\nOpportunity cost:\n${v.cost || "[What you are NOT doing / is this the highest-leverage use of capacity right now?]"}\n\nDownstream position created:\n${v.downstream || "[What does success make possible next? Does it compound toward structural inevitability?]"}\n\nVerdict:\n${v.verdict || "[Pursue / Defer / Pass — consequence-based reasoning only, no sentiment]"}`,
    },
    {
      id: "disc-recon-debrief",
      title: "Recon Debrief",
      description: "After any conversation or observation — extract every structural signal before it fades",
      fields: [
        { key: "context",     label: "Recon Context",                   placeholder: "What was the conversation, meeting, event, or observation? With whom? In what setting?" },
        { key: "stated",      label: "What They Said They Care About",  placeholder: "The official priorities, goals, or concerns they expressed — as verbatim as you can remember" },
        { key: "signals",     label: "What the Signals Actually Told You", placeholder: "What did word choice, emphasis, frustration, hesitation, or silence reveal that was NOT explicitly stated?" },
        { key: "constraints", label: "Constraints Surfaced",            placeholder: "What budget, political, regulatory, or capacity limits became visible — directly stated or implied?" },
        { key: "unmet_need",  label: "Unmet Need / Unspoken Problem",   placeholder: "What problem did they describe but have not framed as solvable? What did they complain about without connecting it to a fix?" },
        { key: "leverage",    label: "Your Leverage Window",            placeholder: "Where does your specific capability intersect with what you just learned? What can you offer that addresses the gap that just became visible?" },
        { key: "next_move",   label: "Precise Next Move",               placeholder: "One specific action based purely on what you learned: a follow-up message, a proposal, a piece of analysis, a connection to make — with timing" },
      ],
      template: (v) => `RECON DEBRIEF\n━━━━━━━━━━━━━\n\nContext: ${v.context || "[Conversation, meeting, event, or observation — with whom, in what setting]"}\n\nWhat they said they care about:\n${v.stated || "[Official priorities, goals, or concerns — as verbatim as possible]"}\n\nWhat the signals actually told you:\n${v.signals || "[Word choice, emphasis, frustration, hesitation, silence — what was not explicitly said]"}\n\nConstraints surfaced:\n${v.constraints || "[Budget, political, regulatory, or capacity limits — stated or implied]"}\n\nUnmet need / unspoken problem:\n${v.unmet_need || "[Problem described but not framed as solvable / complaint without a connected solution]"}\n\nYour leverage window:\n${v.leverage || "[Where your specific capability intersects with what was just revealed]"}\n\nPrecise next move:\n${v.next_move || "[One action with timing: follow-up, proposal, analysis, or connection — based on what you learned]"}`,
    },
  ],
};

// ─── MIND MAP PRESETS ───────────────────────────────────────────────────────────
const PRESETS = {
  framework: {
    label: "Full Framework",
    description: "The complete Jiang structural power map — 8 core principles as a network",
    nodes: [
      { id: "root",         x: 480, y: 320, label: "STRUCTURAL\nPOWER",        type: "root" },
      { id: "bottleneck",   x: 210, y: 150, label: "Bottleneck\nPosition",     type: "branch", color: "#F59E0B" },
      { id: "signal",       x: 480, y: 90,  label: "Signal vs.\nNoise",        type: "branch", color: "#10B981" },
      { id: "cognitive",    x: 750, y: 150, label: "Cognitive\nParity",        type: "branch", color: "#8B5CF6" },
      { id: "restraint",    x: 840, y: 370, label: "Restraint &\nSilence",     type: "branch", color: "#3B82F6" },
      { id: "inevitability",x: 620, y: 530, label: "Structural\nInevitability",type: "branch", color: "#EF4444" },
      { id: "reputation",   x: 340, y: 530, label: "Reputation\nNetwork",      type: "branch", color: "#06B6D4" },
      { id: "indirect",     x: 130, y: 370, label: "Indirect\nValue",          type: "branch", color: "#EC4899" },
      { id: "b1",  x: 70,  y: 70,  label: "Decisions flow\nthrough you",  type: "leaf", color: "#F59E0B" },
      { id: "b2",  x: 200, y: 40,  label: "Resources\nrouted through",   type: "leaf", color: "#F59E0B" },
      { id: "s1",  x: 360, y: 30,  label: "Precise role\n+ metrics",     type: "leaf", color: "#10B981" },
      { id: "s2",  x: 490, y: 15,  label: "No vague\nintent",            type: "leaf", color: "#10B981" },
      { id: "s3",  x: 620, y: 30,  label: "System\nawareness",          type: "leaf", color: "#10B981" },
      { id: "c1",  x: 800, y: 70,  label: "Second-order\neffects",       type: "leaf", color: "#8B5CF6" },
      { id: "c2",  x: 920, y: 170, label: "Shared\nmental model",       type: "leaf", color: "#8B5CF6" },
      { id: "r1",  x: 950, y: 330, label: "One precise\nobservation",    type: "leaf", color: "#3B82F6" },
      { id: "r2",  x: 930, y: 460, label: "Tolerate\nambiguity",        type: "leaf", color: "#3B82F6" },
      { id: "i1",  x: 750, y: 610, label: "Can't be\nreplaced",         type: "leaf", color: "#EF4444" },
      { id: "i2",  x: 600, y: 650, label: "Absence creates\nfriction",  type: "leaf", color: "#EF4444" },
      { id: "rp1", x: 380, y: 650, label: "Every interaction\nobserved",type: "leaf", color: "#06B6D4" },
      { id: "rp2", x: 210, y: 610, label: "Travels before\nyou do",     type: "leaf", color: "#06B6D4" },
      { id: "in1", x: 30,  y: 450, label: "Synthesize\ncross-domain",   type: "leaf", color: "#EC4899" },
      { id: "in2", x: 30,  y: 310, label: "Create options\nnot labor",  type: "leaf", color: "#EC4899" },
    ],
    edges: [
      ["root","bottleneck"],["root","signal"],["root","cognitive"],["root","restraint"],
      ["root","inevitability"],["root","reputation"],["root","indirect"],
      ["bottleneck","b1"],["bottleneck","b2"],["signal","s1"],["signal","s2"],["signal","s3"],
      ["cognitive","c1"],["cognitive","c2"],["restraint","r1"],["restraint","r2"],
      ["inevitability","i1"],["inevitability","i2"],["reputation","rp1"],["reputation","rp2"],
      ["indirect","in1"],["indirect","in2"],
    ],
  },
  situational: {
    label: "Situational Analysis",
    description: "Map any idea, project, or conversation before you present it",
    nodes: [
      { id: "root",        x: 460, y: 300, label: "SITUATION\n[Your Topic]", type: "root" },
      { id: "incentives",  x: 200, y: 150, label: "Incentives",             type: "branch", color: "#F59E0B" },
      { id: "constraints", x: 460, y: 90,  label: "Constraints",            type: "branch", color: "#10B981" },
      { id: "tradeoffs",   x: 720, y: 150, label: "Trade-offs",             type: "branch", color: "#8B5CF6" },
      { id: "downstream",  x: 780, y: 360, label: "Downstream\nEffects",    type: "branch", color: "#3B82F6" },
      { id: "leverage",    x: 560, y: 510, label: "Your\nLeverage",         type: "branch", color: "#EF4444" },
      { id: "gaps",        x: 280, y: 490, label: "System\nGaps",           type: "branch", color: "#06B6D4" },
      { id: "ask",         x: 110, y: 340, label: "Precise\nAsk",           type: "branch", color: "#EC4899" },
      { id: "i1",  x: 60,  y: 70,  label: "Who gains?",          type: "leaf", color: "#F59E0B" },
      { id: "i2",  x: 180, y: 40,  label: "Who loses?",          type: "leaf", color: "#F59E0B" },
      { id: "i3",  x: 310, y: 55,  label: "Who resists?",        type: "leaf", color: "#F59E0B" },
      { id: "con1",x: 390, y: 25,  label: "Budget",              type: "leaf", color: "#10B981" },
      { id: "con2",x: 510, y: 15,  label: "Political",           type: "leaf", color: "#10B981" },
      { id: "con3",x: 630, y: 35,  label: "Regulatory",          type: "leaf", color: "#10B981" },
      { id: "t1",  x: 780, y: 75,  label: "What we gain",        type: "leaf", color: "#8B5CF6" },
      { id: "t2",  x: 880, y: 185, label: "What we give up",     type: "leaf", color: "#8B5CF6" },
      { id: "d1",  x: 900, y: 330, label: "6 months",            type: "leaf", color: "#3B82F6" },
      { id: "d2",  x: 880, y: 450, label: "18 months",           type: "leaf", color: "#3B82F6" },
      { id: "d3",  x: 780, y: 530, label: "Precedent set",       type: "leaf", color: "#3B82F6" },
      { id: "l1",  x: 680, y: 590, label: "Only I can\nprovide", type: "leaf", color: "#EF4444" },
      { id: "l2",  x: 510, y: 620, label: "My bottleneck\nspot", type: "leaf", color: "#EF4444" },
      { id: "g1",  x: 300, y: 570, label: "What wasn't\nsaid",   type: "leaf", color: "#06B6D4" },
      { id: "g2",  x: 150, y: 540, label: "Unspoken\nbottleneck",type: "leaf", color: "#06B6D4" },
      { id: "a1",  x: 30,  y: 290, label: "Bounded\nspecific",   type: "leaf", color: "#EC4899" },
      { id: "a2",  x: 30,  y: 410, label: "Creates option\nfor them",type:"leaf",color:"#EC4899"},
    ],
    edges: [
      ["root","incentives"],["root","constraints"],["root","tradeoffs"],["root","downstream"],
      ["root","leverage"],["root","gaps"],["root","ask"],
      ["incentives","i1"],["incentives","i2"],["incentives","i3"],
      ["constraints","con1"],["constraints","con2"],["constraints","con3"],
      ["tradeoffs","t1"],["tradeoffs","t2"],["downstream","d1"],["downstream","d2"],["downstream","d3"],
      ["leverage","l1"],["leverage","l2"],["gaps","g1"],["gaps","g2"],["ask","a1"],["ask","a2"],
    ],
  },
  daily_practice: {
    label: "Daily Practice Loop",
    description: "Your recurring reinforcement map — morning, in-the-moment, after-action",
    nodes: [
      { id: "root",       x: 460, y: 295, label: "DAILY\nPRACTICE",     type: "root" },
      { id: "morning",    x: 195, y: 140, label: "Morning\nPrep",       type: "branch", color: "#F59E0B" },
      { id: "during",     x: 460, y: 80,  label: "In the\nMoment",      type: "branch", color: "#10B981" },
      { id: "after",      x: 725, y: 140, label: "After Action\nReview",type: "branch", color: "#8B5CF6" },
      { id: "weekly",     x: 800, y: 355, label: "Weekly\nAudit",       type: "branch", color: "#3B82F6" },
      { id: "build",      x: 550, y: 495, label: "Build\nCapability",   type: "branch", color: "#EF4444" },
      { id: "visibility", x: 305, y: 490, label: "Make Thinking\nVisible",type:"branch",color:"#06B6D4"},
      { id: "filter",     x: 115, y: 355, label: "Filter\nCheck",       type: "branch", color: "#EC4899" },
      { id: "m1", x: 55,  y: 60,  label: "What decision\nis being made?",type:"leaf",color:"#F59E0B"},
      { id: "m2", x: 175, y: 30,  label: "Incentive map\nthis context", type:"leaf",color:"#F59E0B"},
      { id: "m3", x: 315, y: 50,  label: "One precise\ncontribution",  type:"leaf",color:"#F59E0B"},
      { id: "d1", x: 390, y: 20,  label: "Systems\nlanguage only",     type:"leaf",color:"#10B981"},
      { id: "d2", x: 510, y: 10,  label: "Restraint:\nsay less",        type:"leaf",color:"#10B981"},
      { id: "d3", x: 635, y: 30,  label: "Name 2nd-order\nbefore asked",type:"leaf",color:"#10B981"},
      { id: "a1", x: 755, y: 55,  label: "What signal\ndid I send?",    type:"leaf",color:"#8B5CF6"},
      { id: "a2", x: 880, y: 145, label: "Translation\ndrill",          type:"leaf",color:"#8B5CF6"},
      { id: "a3", x: 910, y: 265, label: "Signal/noise\naudit",          type:"leaf",color:"#8B5CF6"},
      { id: "w1", x: 920, y: 390, label: "Reputation\ncheck",           type:"leaf",color:"#3B82F6"},
      { id: "w2", x: 855, y: 505, label: "Bottleneck\nassessment",      type:"leaf",color:"#3B82F6"},
      { id: "b1", x: 685, y: 575, label: "Deepen\nniche expertise",     type:"leaf",color:"#EF4444"},
      { id: "b2", x: 540, y: 610, label: "Build tool\nothers need",     type:"leaf",color:"#EF4444"},
      { id: "v1", x: 355, y: 590, label: "Write publicly\non niche",    type:"leaf",color:"#06B6D4"},
      { id: "v2", x: 195, y: 565, label: "Make mental\nmodels visible", type:"leaf",color:"#06B6D4"},
      { id: "f1", x: 45,  y: 455, label: "Am I sending\nnoise?",        type:"leaf",color:"#EC4899"},
      { id: "f2", x: 35,  y: 330, label: "Am I showing\ndependency?",   type:"leaf",color:"#EC4899"},
    ],
    edges: [
      ["root","morning"],["root","during"],["root","after"],["root","weekly"],
      ["root","build"],["root","visibility"],["root","filter"],
      ["morning","m1"],["morning","m2"],["morning","m3"],
      ["during","d1"],["during","d2"],["during","d3"],
      ["after","a1"],["after","a2"],["after","a3"],
      ["weekly","w1"],["weekly","w2"],["build","b1"],["build","b2"],
      ["visibility","v1"],["visibility","v2"],["filter","f1"],["filter","f2"],
    ],
  },
};

// ─── MIND MAP COMPONENT ─────────────────────────────────────────────────────────
function MindMap({ accent }) {
  const [preset, setPreset] = useState("framework");
  const [nodes, setNodes] = useState(() => PRESETS.framework.nodes.map(n => ({ ...n })));
  const [currentEdges, setCurrentEdges] = useState(PRESETS.framework.edges);
  const [dragging, setDragging] = useState(null);
  const [selected, setSelected] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0.82);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState(null);
  const svgRef = useRef(null);
  const dragOffset = useRef(null);

  const loadPreset = (key) => {
    setPreset(key); setNodes(PRESETS[key].nodes.map(n => ({ ...n })));
    setCurrentEdges(PRESETS[key].edges); setSelected(null); setEditingId(null);
    setPan({ x: 0, y: 0 }); setZoom(0.82);
  };

  const svgPt = (e) => {
    const r = svgRef.current.getBoundingClientRect();
    return { x: (e.clientX - r.left - pan.x) / zoom, y: (e.clientY - r.top - pan.y) / zoom };
  };

  const onNodeDown = (e, id) => {
    e.stopPropagation();
    const pt = svgPt(e); const nd = nodes.find(n => n.id === id);
    dragOffset.current = { x: pt.x - nd.x, y: pt.y - nd.y };
    setDragging(id); setSelected(id);
  };

  const onSVGDown = (e) => {
    if (e.target === svgRef.current || e.target.tagName === "svg" || e.target.tagName === "rect") {
      setIsPanning(true); setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y }); setSelected(null);
    }
  };

  const onMouseMove = useCallback((e) => {
    if (dragging) {
      const pt = svgPt(e);
      setNodes(prev => prev.map(n => n.id === dragging ? { ...n, x: pt.x - dragOffset.current.x, y: pt.y - dragOffset.current.y } : n));
    } else if (isPanning && panStart) {
      setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
    }
  }, [dragging, isPanning, panStart, zoom, pan]);

  const onMouseUp = useCallback(() => { setDragging(null); setIsPanning(false); }, []);

  const onNodeDbl = (e, id) => {
    e.stopPropagation();
    const nd = nodes.find(n => n.id === id);
    setEditingId(id); setEditText(nd.label.replace(/\n/g, " "));
  };

  const submitEdit = () => {
    if (editingId) { setNodes(prev => prev.map(n => n.id === editingId ? { ...n, label: editText } : n)); setEditingId(null); }
  };

  const onWheel = (e) => { e.preventDefault(); setZoom(z => Math.max(0.25, Math.min(2.5, z * (e.deltaY > 0 ? 0.9 : 1.11)))); };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove); window.addEventListener("mouseup", onMouseUp);
    return () => { window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("mouseup", onMouseUp); };
  }, [onMouseMove, onMouseUp]);

  const ns = (type) => type === "root" ? { w: 110, h: 60 } : type === "branch" ? { w: 96, h: 50 } : { w: 86, h: 42 };

  const renderEdge = ([a, b], i) => {
    const fn = nodes.find(n => n.id === a); const tn = nodes.find(n => n.id === b);
    if (!fn || !tn) return null;
    const fs = ns(fn.type); const ts = ns(tn.type);
    const x1 = fn.x + fs.w/2, y1 = fn.y + fs.h/2, x2 = tn.x + ts.w/2, y2 = tn.y + ts.h/2, mx = (x1+x2)/2;
    const hi = selected && (a === selected || b === selected);
    return <path key={i} d={`M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`}
      stroke={hi ? (tn.color || accent) : "#CBD5E1"} strokeWidth={hi ? 2.5 : 1.5} fill="none" opacity={hi ? 1 : 0.6}
      style={{ transition: "stroke 0.2s" }} />;
  };

  const renderNode = (nd) => {
    const { w, h } = ns(nd.type); const isSel = selected === nd.id; const isRoot = nd.type === "root";
    const col = isRoot ? accent : (nd.color || "#64748B");
    const fz = isRoot ? 13 : nd.type === "branch" ? 12 : 11;
    const lines = nd.label.split("\n");
    return (
      <g key={nd.id} transform={`translate(${nd.x},${nd.y})`}
        onMouseDown={e => onNodeDown(e, nd.id)} onDoubleClick={e => onNodeDbl(e, nd.id)}
        style={{ cursor: dragging === nd.id ? "grabbing" : "grab" }}>
        <rect width={w} height={h} rx={8}
          fill={isRoot ? col : "#FFFFFF"}
          stroke={isSel ? col : (isRoot ? col : "#E2E8F0")}
          strokeWidth={isSel ? 3 : isRoot ? 0 : 1.5}
          style={{ filter: isRoot ? `drop-shadow(0 4px 12px ${col}66)` : isSel ? `drop-shadow(0 2px 8px ${col}44)` : "drop-shadow(0 1px 3px rgba(0,0,0,0.1))", transition: "all 0.2s" }} />
        {!isRoot && <rect width={4} height={h} rx={2} fill={col} />}
        {lines.map((line, i) => (
          <text key={i}
            x={isRoot ? w/2 : w/2 + 3}
            y={h/2 + (i - (lines.length-1)/2) * (fz + 3) + 1}
            textAnchor="middle" dominantBaseline="middle"
            fill={isRoot ? "#FFFFFF" : nd.type === "branch" ? "#1E293B" : "#475569"}
            fontSize={fz} fontFamily="'Inter',system-ui,sans-serif" fontWeight={isRoot ? "700" : nd.type === "branch" ? "600" : "400"}
            style={{ userSelect: "none", pointerEvents: "none" }}>
            {line}
          </text>
        ))}
      </g>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", position: "relative", background: T.bg }}>
      {/* Controls */}
      <div style={{ padding: "16px 24px", borderBottom: `1px solid ${T.border}`, background: T.surface, display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: T.textMid, fontFamily: T.font }}>Preset:</span>
        {Object.entries(PRESETS).map(([k, p]) => (
          <button key={k} onClick={() => loadPreset(k)} style={{
            background: preset === k ? accent : T.surfaceAlt,
            border: `1.5px solid ${preset === k ? accent : T.border}`,
            color: preset === k ? "#FFFFFF" : T.textMid,
            padding: "6px 16px", borderRadius: 6, cursor: "pointer",
            fontSize: 13, fontWeight: 500, fontFamily: T.font, transition: "all 0.2s",
          }}>{p.label}</button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
          {["+","−"].map((lbl, i) => (
            <button key={lbl} onClick={() => setZoom(z => i===0 ? Math.min(2.5,z*1.15) : Math.max(0.25,z*0.87))} style={{
              background: T.surfaceAlt, border: `1px solid ${T.border}`, color: T.text,
              width: 32, height: 32, borderRadius: 6, cursor: "pointer", fontSize: 16, fontWeight: 600,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{lbl}</button>
          ))}
          <span style={{ fontSize: 13, color: T.textMid, fontFamily: T.mono, width: 40, textAlign: "center" }}>{Math.round(zoom*100)}%</span>
          <button onClick={() => { setPan({ x: 0, y: 0 }); setZoom(0.82); }} style={{
            background: T.surfaceAlt, border: `1px solid ${T.border}`, color: T.textMid,
            padding: "6px 12px", borderRadius: 6, cursor: "pointer", fontSize: 12, fontFamily: T.font,
          }}>Reset</button>
        </div>
      </div>
      <div style={{ padding: "8px 24px", background: T.surfaceAlt, borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
        <span style={{ fontSize: 13, color: T.textMid, fontFamily: T.font }}>
          {PRESETS[preset].description} · <strong>Drag</strong> nodes to reposition · <strong>Double-click</strong> to rename · <strong>Scroll</strong> to zoom · <strong>Drag canvas</strong> to pan
        </span>
      </div>

      {/* Edit overlay */}
      {editingId && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 200, background: T.surface, border: `2px solid ${accent}`, borderRadius: 12, padding: "24px 28px", display: "flex", flexDirection: "column", gap: 14, minWidth: 320, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.text, fontFamily: T.font, textTransform: "uppercase", letterSpacing: "0.05em" }}>Rename Node</div>
          <input autoFocus value={editText} onChange={e => setEditText(e.target.value)}
            onKeyDown={e => { if (e.key==="Enter") submitEdit(); if (e.key==="Escape") setEditingId(null); }}
            style={{ background: T.surfaceAlt, border: `1.5px solid ${T.border}`, borderRadius: 6, color: T.text, padding: "10px 14px", fontSize: 15, fontFamily: T.font, outline: "none" }} />
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={submitEdit} style={{ background: accent, border: "none", borderRadius: 6, color: "#FFF", padding: "8px 20px", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: T.font }}>Save</button>
            <button onClick={() => setEditingId(null)} style={{ background: T.surfaceAlt, border: `1px solid ${T.border}`, borderRadius: 6, color: T.textMid, padding: "8px 16px", cursor: "pointer", fontSize: 14, fontFamily: T.font }}>Cancel</button>
          </div>
        </div>
      )}

      {/* SVG canvas */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <svg ref={svgRef} width="100%" height="100%" onMouseDown={onSVGDown} onWheel={onWheel} style={{ cursor: isPanning ? "grabbing" : "default", background: T.bg }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform={`translate(${pan.x%40},${pan.y%40})`}>
              <circle cx="1" cy="1" r="1" fill="#E2E8F0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`}>
            {currentEdges.map((e, i) => renderEdge(e, i))}
            {nodes.map(n => renderNode(n))}
          </g>
        </svg>
      </div>

      {/* Footer */}
      <div style={{ padding: "14px 24px", borderTop: `1px solid ${T.border}`, background: T.surface, display: "flex", gap: "32px", flexWrap: "wrap", flexShrink: 0 }}>
        {[
          { icon: "🗺", title: "3 Preset Maps", body: "Full Framework · Situational Analysis · Daily Practice Loop" },
          { icon: "🖱", title: "Drag to Restructure", body: "Move nodes spatially to match how you think about the relationships" },
          { icon: "✏️", title: "Double-Click to Rename", body: "Replace any label with your own project, person, or situation" },
          { icon: "💡", title: "Daily Use", body: "Open Situational before any meeting — rename root to your topic, fill branches mentally" },
        ].map(({ icon, title, body }) => (
          <div key={title} style={{ flex: 1, minWidth: 160 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text, fontFamily: T.font, marginBottom: 3 }}>{icon} {title}</div>
            <div style={{ fontSize: 12, color: T.textMid, lineHeight: 1.5, fontFamily: T.font }}>{body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CATEGORY META ──────────────────────────────────────────────────────────────
const categoryMeta = {
  email:     { label: "Email",     icon: "✉",  color: CAT_COLORS.email.accent },
  meeting:   { label: "Meeting",   icon: "◈",  color: CAT_COLORS.meeting.accent },
  ideation:  { label: "Ideation",  icon: "⬡",  color: CAT_COLORS.ideation.accent },
  project:   { label: "Project",   icon: "▣",  color: CAT_COLORS.project.accent },
  daily:     { label: "Daily",     icon: "◉",  color: CAT_COLORS.daily.accent },
  discovery: { label: "Discovery", icon: "◎",  color: CAT_COLORS.discovery.accent },
  mindmap:   { label: "Mind Map",  icon: "✦",  color: CAT_COLORS.mindmap.accent },
};

const GLOSSARY = [
  { term: "Incentives", def: "Who gains or loses from each outcome" },
  { term: "Constraints", def: "What limits the available options" },
  { term: "Trade-offs", def: "What is accepted in exchange for what" },
  { term: "Downstream", def: "Second + third-order effects" },
  { term: "Bottleneck", def: "Where flow must pass through you" },
  { term: "Optionality", def: "New choices your presence creates" },
  { term: "Signal", def: "Precise, evidence-based, system-aware" },
  { term: "Noise", def: "Vague, emotional, generic, needy" },
];

const ANTI_SIGNALS = [
  "I'm passionate about...",
  "This would mean everything...",
  "Just need funding to...",
  "I'd love to pick your brain",
  "Revolutionary idea that...",
];

// ─── MAIN APP ───────────────────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState("email");
  const [activeTemplate, setActiveTemplate] = useState(templates.email[0]);
  const [values, setValues] = useState({});
  const [view, setView] = useState("form");
  const [copied, setCopied] = useState(false);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat !== "mindmap") { setActiveTemplate(templates[cat][0]); setValues({}); setView("form"); }
  };

  const accent = categoryMeta[activeCategory].color;
  const catColors = CAT_COLORS[activeCategory];
  const output = activeCategory !== "mindmap" ? activeTemplate.template(values) : "";

  const handleCopy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <>
      <FontLoader />
      <div style={{ height: "100vh", background: T.bg, color: T.text, fontFamily: T.font, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* ── TOP HEADER ── */}
        <div style={{ background: T.nav, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 32, height: 32, background: accent, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, transition: "background 0.3s" }}>⬡</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.01em" }}>Systems Language Toolkit</div>
              <div style={{ fontSize: 12, color: "#64748B", marginTop: 1 }}>Structural Power Framework · Prof. Jiang Xueqin</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: "#475569", display: "flex", gap: 16 }}>
            <span style={{ color: accent, fontWeight: 500, transition: "color 0.3s" }}>incentives</span>
            <span>constraints</span>
            <span>trade-offs</span>
            <span>downstream effects</span>
          </div>
        </div>

        {/* ── CATEGORY NAV ── */}
        <div style={{ background: T.surface, borderBottom: `1px solid ${T.border}`, display: "flex", overflowX: "auto", flexShrink: 0 }}>
          {Object.entries(categoryMeta).map(([cat, meta]) => (
            <button key={cat} onClick={() => handleCategoryChange(cat)} style={{
              background: "none", border: "none",
              borderBottom: activeCategory === cat ? `3px solid ${meta.color}` : "3px solid transparent",
              color: activeCategory === cat ? meta.color : T.textMid,
              padding: "16px 24px", cursor: "pointer", fontSize: 14, fontWeight: activeCategory === cat ? 600 : 500,
              fontFamily: T.font, whiteSpace: "nowrap", transition: "all 0.2s",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span>{meta.icon}</span>{meta.label}
            </button>
          ))}
        </div>

        {/* ── MIND MAP VIEW ── */}
        {activeCategory === "mindmap" ? (
          <div style={{ flex: 1, overflow: "hidden" }}>
            <MindMap accent={accent} />
          </div>
        ) : (
          <div style={{ display: "flex", flex: 1, minHeight: 0 }}>

            {/* ── LEFT SIDEBAR ── */}
            <div style={{ width: 240, flexShrink: 0, background: T.sidebar, overflowY: "auto", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "20px 16px 12px", fontSize: 11, fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: T.font }}>
                Templates
              </div>
              {templates[activeCategory].map(tpl => (
                <button key={tpl.id} onClick={() => { setActiveTemplate(tpl); setValues({}); setView("form"); }} style={{
                  width: "100%", background: activeTemplate.id === tpl.id ? T.sidebarActiveBg : "none",
                  border: "none", borderLeft: activeTemplate.id === tpl.id ? `3px solid ${accent}` : "3px solid transparent",
                  color: activeTemplate.id === tpl.id ? T.sidebarActive : T.sidebarText,
                  padding: "14px 16px", cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, fontFamily: T.font }}>
                    {tpl.title}
                  </div>
                  <div style={{ fontSize: 12, color: activeTemplate.id === tpl.id ? "#94A3B8" : "#475569", lineHeight: 1.4, fontFamily: T.font }}>
                    {tpl.description}
                  </div>
                </button>
              ))}

              {/* Glossary */}
              <div style={{ marginTop: "auto", padding: "20px 16px", borderTop: "1px solid #1E293B" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14, fontFamily: T.font }}>
                  Key Terms
                </div>
                {GLOSSARY.map(({ term, def }) => (
                  <div key={term} style={{ marginBottom: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: accent, fontFamily: T.font, marginBottom: 2, transition: "color 0.3s" }}>{term}</div>
                    <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.4, fontFamily: T.font }}>{def}</div>
                  </div>
                ))}
                <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid #1E293B" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, fontFamily: T.font }}>Avoid These</div>
                  {ANTI_SIGNALS.map(s => (
                    <div key={s} style={{ fontSize: 12, color: "#334155", lineHeight: 1.6, textDecoration: "line-through", fontFamily: T.font, marginBottom: 3 }}>{s}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

              {/* Content header */}
              <div style={{ background: T.surface, borderBottom: `1px solid ${T.border}`, padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: accent, transition: "background 0.3s" }} />
                    <div style={{ fontSize: 18, fontWeight: 700, color: T.text, fontFamily: T.font }}>{activeTemplate.title}</div>
                  </div>
                  <div style={{ fontSize: 14, color: T.textMid, fontFamily: T.font }}>{activeTemplate.description}</div>
                </div>
                <div style={{ display: "flex", gap: 8, background: T.surfaceAlt, borderRadius: 8, padding: 4 }}>
                  {["form", "output"].map(v => (
                    <button key={v} onClick={() => setView(v)} style={{
                      background: view === v ? T.surface : "none",
                      border: "none", borderRadius: 6,
                      color: view === v ? T.text : T.textMid,
                      padding: "8px 18px", cursor: "pointer", fontSize: 14, fontWeight: view === v ? 600 : 500,
                      fontFamily: T.font, transition: "all 0.2s",
                      boxShadow: view === v ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                    }}>
                      {v === "form" ? "Fill In" : "Preview"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form / Output */}
              <div style={{ flex: 1, overflow: "auto", padding: "32px", background: T.bg }}>
                {view === "form" ? (
                  <div style={{ maxWidth: 700, display: "flex", flexDirection: "column", gap: 24 }}>
                    {activeTemplate.fields.map(field => (
                      <div key={field.key}>
                        <label style={{
                          display: "block", fontSize: 13, fontWeight: 600, color: T.text,
                          fontFamily: T.font, marginBottom: 8, letterSpacing: "0.01em",
                        }}>
                          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: accent, marginRight: 8, verticalAlign: "middle", transition: "background 0.3s" }} />
                          {field.label}
                        </label>
                        <textarea value={values[field.key] || ""} onChange={e => setValues(p => ({ ...p, [field.key]: e.target.value }))}
                          placeholder={field.placeholder} rows={3} style={{
                            width: "100%", background: T.surface, border: `1.5px solid ${T.border}`,
                            borderRadius: 8, color: T.text, fontSize: 15,
                            padding: "12px 16px", resize: "vertical", fontFamily: T.font,
                            lineHeight: 1.6, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                          }}
                          onFocus={e => { e.target.style.borderColor = accent; e.target.style.boxShadow = `0 0 0 3px ${accent}22`; }}
                          onBlur={e => { e.target.style.borderColor = T.border; e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"; }} />
                      </div>
                    ))}
                    <button onClick={() => setView("output")} style={{
                      background: accent, border: "none", borderRadius: 8, color: "#FFF",
                      padding: "13px 28px", cursor: "pointer", fontSize: 15, fontWeight: 600,
                      fontFamily: T.font, alignSelf: "flex-start", transition: "opacity 0.2s",
                      boxShadow: `0 4px 14px ${accent}44`,
                    }} onMouseOver={e => e.currentTarget.style.opacity = "0.88"} onMouseOut={e => e.currentTarget.style.opacity = "1"}>
                      Generate Output →
                    </button>
                  </div>
                ) : (
                  <div style={{ maxWidth: 700 }}>
                    <div style={{
                      background: T.surface, borderRadius: 10, border: `1px solid ${T.border}`,
                      borderLeft: `4px solid ${accent}`, padding: "28px 32px",
                      fontFamily: T.mono, fontSize: 14, lineHeight: 2, color: T.text,
                      whiteSpace: "pre-wrap", marginBottom: 20,
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    }}>
                      {output}
                    </div>
                    <div style={{ display: "flex", gap: 12 }}>
                      <button onClick={handleCopy} style={{
                        background: copied ? "#ECFDF5" : accent,
                        border: copied ? "1.5px solid #10B981" : "none",
                        borderRadius: 8, color: copied ? "#10B981" : "#FFF",
                        padding: "11px 24px", cursor: "pointer", fontSize: 14, fontWeight: 600,
                        fontFamily: T.font, transition: "all 0.2s",
                        boxShadow: copied ? "none" : `0 4px 14px ${accent}44`,
                      }}>
                        {copied ? "✓ Copied!" : "Copy to Clipboard"}
                      </button>
                      <button onClick={() => setView("form")} style={{
                        background: T.surface, border: `1.5px solid ${T.border}`, borderRadius: 8,
                        color: T.textMid, padding: "11px 20px", cursor: "pointer", fontSize: 14,
                        fontWeight: 500, fontFamily: T.font, transition: "all 0.2s",
                      }}>
                        ← Edit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
