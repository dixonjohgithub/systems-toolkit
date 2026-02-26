# MVP1 — Mural Sticky Notes
## System-Level Framing: Duplicate Detection as a Portfolio Composition Problem

---

## 🟥 CLUSTER 1 — The Core Problem Statement
*Red stickies — problem framing*

1. Duplicate work is not a coordination failure. It is a structural information asymmetry.
2. No individual team has line of sight into what other teams are building. Redundancy is funded invisibly and discovered expensively.
3. The information required to prevent duplicate work exists — it lives in Jira. It is simply not connected to the intake decision point.
4. The gap between existing portfolio data and the moment a new submission is created is where redundancy enters the system.

---

## 🟨 CLUSTER 2 — The Visibility Asymmetry
*Yellow stickies — why it persists*

5. Submitting a request that duplicates existing work is an honest mistake. There is no mechanism that would make the submitter aware of the overlap.
6. At the team level, the duplicate is invisible. At the portfolio level, leadership is funding two efforts to solve the same problem.
7. Duplicate work does not surface as a "redundancy problem." It surfaces as cost overruns, low output for resources deployed, and surprise at portfolio reviews.
8. By the time duplicate work is discovered, the cost is already paid. Both teams have environment access, engineering allocation, and sprint capacity committed.
9. The portfolio is not getting two things done. It is getting one thing done twice, at double the cost.
10. Nothing in the current system flags a submission as "this work already exists in the portfolio."

---

## 🟦 CLUSTER 3 — What "Resources Committed" Actually Means
*Blue stickies — the real resource impact*

11. Environment provisioning and access requests — often weeks-long processes at enterprise scale — already consumed.
12. Data access approvals — additional governance cycles with their own lead time — already consumed.
13. Engineering sprint capacity pulled from other priorities — already consumed.
14. Leadership attention: steering committee reviews, status updates, escalation paths — already consumed.
15. The cost of detecting a duplicate before submission is near zero. The cost of discovering it after resources are committed is the full sunk cost of both parallel efforts.
16. Duplicate work compounds: data fragmentation, capability confusion, planning interference, split maintenance load. The true cost is always larger than the redundant effort itself.

---

## 🟩 CLUSTER 4 — The Portfolio Governance Frame
*Green stickies — executive reframe*

17. The portfolio is not what leadership thinks it is. If duplicate work exists, leadership is making investment decisions against an inaccurate picture of what the organization is actually building.
18. Resource allocation decisions are based on incomplete information. Every duplicate approval is a decision made in good faith against false premises.
19. Asking teams to communicate better does not solve this. Teams cannot coordinate against information they do not have.
20. The solution is portfolio-level visibility at the moment of submission — before approval, before commitment, before cost is incurred.
21. MVP1 does not ask teams to change how they work. It changes what the system knows at the moment a submission enters it.
22. Portfolio composition integrity requires that every new submission be checked against the full portfolio. Right now that check does not exist.

---

## 🟧 CLUSTER 5 — One-Liners by Audience
*Orange stickies — how to say it in the room*

23. TO AN EXECUTIVE: "You are funding work you cannot see is redundant. MVP1 makes the redundancy visible before you commit, not after."
24. TO A VP: "Two teams are building the same thing somewhere in this portfolio right now. We don't know which teams. MVP1 tells us before they finish."
25. TO A PROGRAM MANAGER: "Your portfolio composition is only as accurate as your ability to detect overlap at submission time. Right now that ability is zero."
26. TO A REVIEWER: "Before you approve a submission, you will see every existing ticket covering similar ground — with owner contact info — so you are approving net-new work, not a duplicate."

---

## ⬜ CLUSTER 6 — The Anchor Statement
*White sticky — pin to center of the board*

27. "Right now, there is no systematic mechanism connecting a new submission to the full portfolio of existing and in-progress work. Teams submit in good faith. Duplicates get approved in good faith. Resources get committed in good faith. And the redundancy is discovered — if it is discovered at all — after the full cost of both parallel efforts is already sunk. MVP1 closes that gap. It connects every new submission to the complete Jira portfolio at the moment of intake — before approval, before commitment, before cost. The detection cost is near zero. The cost of missing it is everything already spent on the duplicate."

---

*27 stickies total. Cluster colors: red = problem, yellow = root cause, blue = impact, green = solution frame, orange = stakeholder language, white = anchor statement.*
