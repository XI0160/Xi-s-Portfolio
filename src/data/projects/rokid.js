export const rokid = {
    id: 3,
    type: "work",
    title: "Rokid Ecosystem",
    category: "Product Management Intern",
    summary: "Driving AR ecosystem growth through F-Code system design, Global App localization, and Community Forum restructuring.",
    color: "bg-white",
    heroImage: "https://placehold.co/800x600/f5f5f4/d6d3d1?text=Rokid+Cover",
    isComplex: true,
    subProjects: [
        {
            id: "f-code",
            tabName: "F-Code System",
            role: "PM (Design & Flow)",
            stats: "31% Conversion Rate · 800+ Direct Orders",
            tools: "Figma, Data Analysis, Axure",
            context: "A strategic user acquisition module for Rokid's new product launch events. The goal was to convert passive live-stream viewers into active registered users via a gamified 'F-Code' lottery system.",
            problem: "<b>High Friction & Drop-off:</b> The legacy process required 5 distinct steps: Click Link → Fill Registration Form → Receive SMS → Verify → Login → Claim Code. In a fast-paced live stream environment, this complexity caused massive user drop-off. We needed to balance 'User Experience' with 'Data Collection'.",
            solution: "I reframed the logic from 'Register then Claim' to <b>'Claim is Register'</b>. By implementing a 'Verification = Login' model, we condensed the 5-step path into a single-page interaction, removing the mental load of account creation.",
            workProcess: [
                {
                    stage: "Phase 1: Analysis",
                    desc: "Defined the core goal: Traffic Conversion, not just a feature. I identified that the 'Registration Wall' was the main conflict. We needed a system that satisfied dual needs: smooth operation for users vs. trackable data for operations."
                },
                {
                    stage: "Phase 2: Flow Design",
                    desc: "Optimized the path from 5 steps down to 3. Designed a single-page flow specifically for live stream contexts (short attention span). Key decision: Removed the separate registration page; the verification code now acts as an auto-login trigger."
                },
                {
                    stage: "Phase 3: Prototyping",
                    desc: "Created high-fidelity prototypes in Figma. Used the 'Eye-to-Hand' visual principle to guide users. Designed states for 'Login', 'Claiming', and 'Success' within a single view to prevent page-load drop-offs."
                },
                {
                    stage: "Phase 4: Review & Iteration",
                    desc: "Pre-aligned with engineering on the feasibility of 'silent login'. Added logic for edge cases (network failure, expired codes) to ensure the system was robust under high concurrency."
                }
            ],
            outcome: "The optimized flow reduced completion time by 40%. We achieved a <b>31% conversion rate</b> (doubling the legacy product). Over 3,000 users claimed codes within a month, driving nearly 800 direct product orders."
        },
        {
            id: "ar-app",
            tabName: "AR App v1.5",
            role: "PM (Refactor & Process)",
            stats: "Zero Review Failures · Standardized Workflow",
            tools: "Jira, Lark, XMind",
            context: "The overseas AR App required a v1.5 refactor to improve user retention and local adaptability. The previous version suffered from review failures and feature bloat.",
            problem: "<b>Chaos on Three Fronts:</b> Users faced unclear core paths; Operations pushed fragmented, intuition-based requirements without data; The Team suffered from low review pass rates due to lack of screening.",
            solution: "I shifted from 'translating requirements' to <b>'filtering requirements'</b>. I established a structured funnel to validate requests against user scenarios and implemented a modular PRD format to ensure engineering feasibility.",
            workProcess: [
                {
                    stage: "Phase 1: Filtering",
                    desc: "Faced with fragmented requests, I established a 'Gatekeeper Protocol'. Every requirement had to pass three checks: Clear Purpose, Valid User Scenario, and Implementation Boundary."
                },
                {
                    stage: "Phase 2: Alignment",
                    desc: "To break information silos without formal authority, I used logic to drive consensus. I produced structured feature lists and flow sketches to sync with developers <i>before</i> official meetings."
                },
                {
                    stage: "Phase 3: Documentation",
                    desc: "Wrote modular PRDs separating 'Main Flow' from 'Edge Cases'. Introduced columns for 'Necessity' and 'Alternatives'. Conducted private pre-reviews with devs to prevent public disputes."
                },
                {
                    stage: "Phase 4: Retrospective",
                    desc: "Built a 'Review Failure Checklist' based on past failures to lower trial-and-error costs for future teams. Standardized the review structure."
                }
            ],
            outcome: "Optimized core flows and stabilized the release rhythm. The new standard operating procedure (SOP) significantly improved developer acceptance and documentation pass rates."
        },
        {
            id: "forum",
            tabName: "Forum 3.0",
            role: "PM (Restructure)",
            stats: "Mobile UX + · Reduced Bounce Rate",
            tools: "Data Analysis, IA Diagram",
            context: "The developer community forum was in a state of low maintenance with poor engagement. I led the 3.0 update to optimize function and experience on the existing architecture.",
            problem: "<b>Structural Debt & Low Engagement:</b> The forum suffered from redundant modules, scattered navigation paths, and a lack of visual hierarchy. 80% of users dropped off due to 'Feature Stacking' and poor mobile accessibility.",
            solution: "I adopted a <b>'Surgical Optimization'</b> strategy. Instead of a costly full rewrite, I focused limited resources on high-impact areas: The <b>Post Editor</b> and <b>User Profile</b>. I introduced a 'Mobile-First' responsive design to capture fragmented user time.",
            workProcess: [
                {
                    stage: "Phase 1: Diagnosis",
                    desc: "Used structural thinking to pinpoint bottlenecks. Analyzed backend data and user feedback to identify 'Clutter + No Guidance' as the core issue. Visualized the mess via Heatmaps and IA diagrams."
                },
                {
                    stage: "Phase 2: Design Refactor",
                    desc: "Defined constraints: 'Refine, don't Rebuild'. Compressed interaction paths for posting and profile management. Unified button behaviors and introduced 'Like/Tag' mechanisms to improve content discoverability."
                },
                {
                    stage: "Phase 3: Tech Alignment",
                    desc: "Minimized communication costs by pre-syncing with developers. Ensured all interaction changes were within the maintenance scope, leading to a smooth review process with zero rework."
                },
                {
                    stage: "Phase 4: Standardization",
                    desc: "Established quantifiable metrics (Bounce Rate/Duration) and documented the 'Forum Optimization Manual' to transform personal experience into team assets."
                }
            ],
            outcome: "The update launched with zero rework. Metrics showed a significant drop in bounce rate and extended session duration. Mobile engagement increased due to the responsive layout."
        }
    ]
};
