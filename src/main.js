// 1. 引入样式和图标库
import './style.css';
import { createIcons, icons } from 'lucide';

// 2. 初始化图标的辅助函数
const initIcons = () => {
    // 稍微延迟一下确保 DOM 已经更新
    setTimeout(() => {
        createIcons({ icons });
    }, 0);
};

// --- THEME TOGGLE LOGIC ---
function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// --- HELPER: Placeholder Generator ---
function getPlaceholder(width, height, label) {
    return `https://placehold.co/${width}x${height}/f5f5f4/d6d3d1?text=IMAGE`;
}

function renderPlaceholderOverlay(label) {
    return `
    <div class="placeholder-overlay">
        <span class="text-theme-accent mb-2">[ REPLACE ME ]</span>
        <span class="font-bold text-stone-600 dark:text-stone-400">${label}</span>
    </div>`;
}

// --- CLICK EFFECT LOGIC ---
document.addEventListener('click', (e) => {
    const isHomePage = document.getElementById('home-container');
    if (!isHomePage) return;

    const isDark = document.documentElement.classList.contains('dark');
    const el = document.createElement('div');
    el.classList.add('click-particle');

    const size = Math.random() * 20 + 15;
    const rotation = Math.random() * 360 - 180;

    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY + window.scrollY}px`;
    el.style.setProperty('--rot', `${rotation}deg`);
    el.style.marginLeft = `-${size / 2}px`;
    el.style.marginTop = `-${size / 2}px`;

    if (isDark) {
        // NIGHT MODE
        const nightShapes = ['moon', 'star', 'sparkle'];
        const nightColors = ['#fef08a', '#60a5fa', '#e2e8f0'];
        const shape = nightShapes[Math.floor(Math.random() * nightShapes.length)];
        const color = nightColors[Math.floor(Math.random() * nightColors.length)];

        el.style.color = color;
        el.style.animation = 'fall-night 1.2s ease-out forwards';

        if (shape === 'moon') el.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        if (shape === 'star') el.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        if (shape === 'sparkle') el.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>`;
    } else {
        // DAY MODE
        const shapes = ['zap', 'circle', 'triangle', 'square'];
        const colors = ['#8C1007', '#E7B10A', '#1c1917']; // Static retro colors
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        el.style.color = color;
        el.style.animation = 'pop-day 1s ease-out forwards';

        if (shape === 'zap') el.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
        if (shape === 'circle') el.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="10"></circle></svg>`;
        if (shape === 'triangle') el.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>`;
        if (shape === 'square') el.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`;
    }

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
});

// --- DATA ---
const data = {
    intro: {
        name: "Xi Lin",
        subhead: "Driven by curiosity and a love for beautiful things. Shaping consumer experiences through end-to-end design thinking, visual craft, and the belief that subtle changes can make the world better."
    },
    about: {
        bio: "I am a designer who believes in the power of subtle details. With a background bridging creative arts and logical systems, I approach product design as a form of storytelling.<br><br>My work is grounded in user research but elevated by visual intuition. When I'm not designing interfaces, I'm exploring the intersection of AI and creativity, managing game development teams, or simply observing the world to find the next problem worth solving."
    },
    projects: [
        {
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
        },
        {
            id: 1,
            type: "work",
            title: "Cornell OH Navigator",
            category: "UX / Product Design",
            summary: "Helping Cornell students find clear, fair, and less intimidating office hours.",
            color: "bg-stone-50",
            heroImage: "https://placehold.co/800x600/f5f5f4/d6d3d1?text=Cornell+OH+Navigator",
            details: {
                problem: "Cornell CIS students depend on office hours, but face three consistent failures: information is scattered across platforms (Canvas, QueueMeIn), queues are unpredictable, and overcrowded rooms make students avoid asking for help. Students often arrive unsure where to go or if they'll get help at all.",
                context: "Built in Cornell’s INFO 3450 HCI course. We followed a structured pipeline: Research → Persona → Paper prototype → Mid-fi → High-fi.",
                team: {
                    role: "Product & UX Designer",
                    members: "Team of 4",
                    responsibilities: "Research synthesis · IA · Interaction Design · Prototyping",
                    tools: "Figma, Miro"
                },
                activities: [
                    {
                        title: "Research & Persona",
                        desc: "Interviewed regular attendees to map frustrations. Persona 'Eddie' emerged: a capable student overwhelmed by crowds and unreliable queues. This defined our scope: Find, Navigate, Queue, Review.",
                        tool: "Miro",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Persona+Eddie"
                    },
                    {
                        title: "System Architecture",
                        desc: "Designed a 4-module IA to reduce cognitive load: <b>Map</b> for locating, <b>Queue</b> for structured waiting, <b>Observer Mode</b> for reviewing missed topics, and <b>Profile</b> for feedback. The goal was a focused product that avoids distraction.",
                        tool: "FigJam",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Information+Architecture"
                    },
                    {
                        title: "Key Flows & fairness",
                        desc: "Designed flows for joining and verifying queue positions. To keep things fair, we introduced a <b>'Soft Verification'</b> step: Join → 'I’m Here' → Get help. This adds predictability for students fearing unstructured environments.",
                        tool: "Figma",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Queue+Flow"
                    },
                    {
                        title: "Hi-Fi Prototyping",
                        desc: "Co-designed the full prototype using blue and neutral colors to reduce intimidation. We used a minimalist map as the entry point and adopted progressive disclosure to prevent information overload.",
                        tool: "Figma",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Hi-Fi+Screens"
                    }
                ],
                challenges: "<b>Dynamic Logic:</b> Figma can't handle real queues, so we simulated states with modal variants. <b>Privacy:</b> Observer Mode raised concerns, addressed by adding consent controls. <b>Clutter:</b> Reduced text density in Mid-fi to improve scanning.",
                outcome: "Delivered a system that centralizes info and stabilizes queues. Learned that students value <b>visibility and fairness</b> over new features, and that privacy must be explicitly designed, not assumed."
            }
        },
        {
            id: 2,
            type: "work",
            title: "Toymare",
            category: "Game Design / Management",
            summary: "Fast-paced puzzle shooter mixing geometric assembly and survival pressure.",
            color: "bg-stone-50",
            heroImage: "https://placehold.co/800x600/f5f5f4/d6d3d1?text=Toymare+Cover",
            details: {
                problem: "<b>Vision & Conflict:</b> The goal was to seamlessly fuse action survival with geometric puzzles. The core challenge was <b>Cognitive Overload</b>: How can players precisely align toy parts while dodging bullet hell? We faced issues with visual clutter, high error costs, and the stress of synchronous tasks (Dodging + Positioning + Building).",
                context: "Jan–May 2025 | Cornell | Team of 7. <br>Genre: ¾ Top-down Puzzle Shooter.",
                team: {
                    role: "Co-PM & Lead Artist",
                    members: "7 person cross-functional team",
                    responsibilities: "Visual System · UI/UX · Pipeline · Production",
                    tools: "Unity, Procreate, Jira, Github"
                },
                activities: [
                    {
                        title: "Core Mechanics Design",
                        desc: "Defined the 'Chaos Management' loop: <b>Grab → Throw → Assemble</b>. Implemented 'Parry' and 'Weave' to give players space. Designed the 'Error State' mechanic where bad assemblies become physical obstacles, forcing players to manage their own mess.",
                        tool: "System Design",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Mechanics+Diagram"
                    },
                    {
                        title: "Visual Language System",
                        desc: "As Visual Owner, I established a strict readability system to counter chaos. <br>• <b>Shapes:</b> Distinct silhouettes for enemies vs. parts.<br>• <b>Saturation:</b> High saturation for interactive objects, desaturated background.<br>• <b>Feedback:</b> Dynamic outlines/flashes for 'Assembly Ready' states.",
                        tool: "Art Direction",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Visual+Style+Guide"
                    },
                    {
                        title: "UI/UX Framework",
                        desc: "Designed the <b>Assembly System</b> based on 'Nearest Edge Auto-Snap' to allow building while moving. The UI layout follows a 'Low Interference' principle—placing Health and Orders at the periphery to keep the combat zone clear.",
                        tool: "UI/UX",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=UI+Mockups"
                    },
                    {
                        title: "Pipeline & Collaboration",
                        desc: "Managed the production flow between Art, Programming, and Level Design. Established a modular asset pipeline to resolve dependencies. Level logic focused on pacing: alternating 'Build Windows' (Safety) and 'Dodge Windows' (Danger) to control tension.",
                        tool: "Production",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Pipeline+Flow"
                    }
                ],
                challenges: "<b>Visual Clutter:</b> Solved by rigorous saturation hierarchy. <b>Precision vs. Movement:</b> Solved by auto-snap magnets. <b>Scope Creep:</b> Cut 2 complexity levels to polish the core 'Throw & Build' feel.",
                outcome: "Successfully delivered a cohesive, high-paced experience where visual language solves gameplay friction. The project met all milestones through disciplined cross-functional coordination."
            }
        },
        {
            id: 4,
            type: "experiment",
            title: "Star Toilet Tycoon v2.0",
            category: "Game Design / Roguelike",
            summary: "A Roguelike Time-Management Sim where players manage intergalactic restrooms under high survival pressure.",
            heroImage: "https://placehold.co/800x600/f5f5f4/d6d3d1?text=Star+Toilet+Tycoon",
            details: {
                problem: "The market lacked a middle ground between hardcore simulations (complex) and idle clickers (boring). The goal was to create a 'Blue Ocean' experience combining spatial puzzles with survival tension.",
                context: "Personal Side Project (Solo). PRD v2.0.",
                team: { role: "Solo Developer", members: "Me, Myself", responsibilities: "Game Design, Coding, Art", tools: "React, Tailwind, Lucide Icons" },
                activities: [
                    {
                        title: "Core Loop Design",
                        desc: "Designed a dual-phase loop: <b>Wave Phase</b> (High-pressure drag & drop, coping with 'Rush Hour') and <b>Shop Phase</b> (Strategic decisions: Expand grid vs. Buy Perks).",
                        tool: "System Design",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Core+Loop+Diagram"
                    },
                    {
                        title: "Spatial Mechanics",
                        desc: "Implemented a 'Merge' mechanic to solve grid scarcity. Lv.1 + Lv.1 = Lv.2. This adds a spatial puzzle layer: Do I expand the grid (expensive) or merge facilities (risk of clogging)?",
                        tool: "Logic Flow",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Merge+Logic"
                    },
                    {
                        title: "Economy Balancing",
                        desc: "Designed a 'Low-Inflation' economy. Tips are scarce ($8 avg). Exponential expansion costs force players to choose between 'More Space' or 'Better Tools'.",
                        tool: "Excel / Data",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Economy+Curve"
                    }
                ],
                challenges: "Designing for 5 distinct enemy types (e.g., Slime clogs toilets, Gas Aliens require ventilation) while keeping controls simple (Drag & Drop).",
                outcome: "A playable 'Survival Sim' prototype with 9 waves and 3 biomes (Earth, Goo, Cyber).",

                // Competitive Analysis Data
                competitiveAnalysis: {
                    intro: {
                        USP: "Spatial Merging + Survival Pacing + Low-Inflation Economy",
                        Target: "Commuters, Strategy Fans, Absurdist Humor Lovers",
                        Genre: "Hyper-casual Sim + Roguelite Survival"
                    },
                    positioning: {
                        desc: "The market is polarized: Hardcore Sims (complex micromanagement) vs Idle Games (zero engagement). Galactic Toilet Tycoon creates a niche by combining the layout satisfaction of sims with the adrenaline of a Roguelite.",
                        chartData: [
                            { label: 'PlateUp!', x: -40, y: 40 },
                            { label: 'Idle Toilet', x: 40, y: -40 },
                            { label: 'Brotato', x: 30, y: 30 },
                            { label: 'PvZ', x: -30, y: -20 },
                            { label: 'OUR GAME', x: 0, y: 50, isOurs: true }
                        ]
                    },
                    competitors: [
                        { name: "PlateUp!", type: "Roguelike Sim", desc: "Focuses on automation. We differentiate via simpler 'Merge' mechanics suited for mobile." },
                        { name: "Brotato", type: "Arena Shooter", desc: "Tight economy loop. We adopt the shop loop but replace combat with time management." },
                        { name: "PvZ", type: "Tower Defense", desc: "Static defense. We require dynamic interaction (moving customers) and randomness." }
                    ],
                    matrix: [
                        { feature: "Core Loop", ours: "Survival Waves + Shop", comp: "Combat / Idle" },
                        { feature: "Spatial", ours: "Grid Expansion + Merging", comp: "Fixed Slots" },
                        { feature: "Economy", ours: "Low Inflation (Scarcity)", comp: "Hyper-inflation" }
                    ],
                    swot: {
                        strengths: ["Unique 'Toilet + Sci-Fi' theme", "10 min session length"],
                        weaknesses: ["Limited content (3 biomes)", "2D grid art style"],
                        opportunities: ["Streaming potential (failure cascades)", "Mobile vertical port"],
                        threats: ["Market saturation of 'Survivor-likes'", "Delicate economy balance"]
                    },
                    strategy: [
                        { icon: "🧩", title: "Spatial Puzzle", desc: "Differentiate via Grid Expansion & Merging logic." },
                        { icon: "😂", title: "Absurdist Humor", desc: "Lean into 'Quantum Toilet' lore as brand identity." },
                        { icon: "⚖️", title: "Economic Pain", desc: "Stick to Low-Inflation. Purchases must feel meaningful." }
                    ]
                }
            }
        },
        {
            id: 5,
            type: "experiment",
            title: "Latent Space Dreams",
            category: "AI Video / Dreamcore",
            summary: "Visualizing the subconscious. A personal art project using AI to translate fleeting dreamscapes into visible 'dreamcore' videos.",
            heroImage: "https://placehold.co/600x600/f5f5f4/d6d3d1?text=Dreamcore+Art",
            details: {
                problem: "Dreams are fleeting, abstract, and deeply personal. I wanted to capture the specific 'dreamcore' aesthetic—surreal, nostalgic, and slightly unsettling—which is often lost when trying to describe it with words alone. This is not about commercial perfection, but about emotional accuracy.",
                context: "Personal Aesthetic Project. Non-commercial exploration of subconscious visualization.",
                team: {
                    role: "Creator",
                    members: "Solo",
                    responsibilities: "Prompt Engineering, Video Generation, Editing",
                    tools: "Midjourney, Jimeng, OneStory"
                },
                activities: [
                    {
                        title: "Dream Reconstruction",
                        desc: "Logged dream fragments immediately upon waking. Used <b>Midjourney</b> to generate static keyframes, iterating hundreds of times to capture the specific texture of a fading memory and the 'liminal space' vibe.",
                        tool: "Midjourney",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Dream+Keyframes"
                    },
                    {
                        title: "Motion Synthesis",
                        desc: "Applied image-to-video tools like <b>Jimeng (即梦)</b> and <b>OneStory</b> to animate these static scenes. The goal was not physical realism, but the fluid, morphing, and non-linear logic of the dream state.",
                        tool: "Jimeng / OneStory",
                        image: "https://placehold.co/800x450/f5f5f4/d6d3d1?text=Video+Generation"
                    }
                ],
                challenges: "AI tools tend to generate 'polished' and 'logical' results. I had to constantly fight the algorithms via prompt engineering to retain the grainy, disjointed, and 'uncanny valley' quality that makes a dream feel authentic.",
                outcome: "A series of short, atmospheric dreamcore video loops that function as a digital externalization of my subconscious."
            }
        }
    ]
};

// --- RENDERERS ---

function renderHome() {
    const featuredWorks = data.projects.filter(p => p.type === 'work').slice(0, 3);
    return `
            <div id="home-container" class="px-6 md:px-12 max-w-5xl mx-auto min-h-[80vh] flex flex-col justify-center cursor-crosshair">
                <div class="text-center space-y-8 animate-fade-up mb-32 pt-20 relative">
                    <p class="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">Portfolio 2024 — 2025</p>
                    
                    <h1 class="text-5xl md:text-8xl font-bold text-stone-900 dark:text-stone-100 leading-[1.1] tracking-tighter">
                        <span id="home-title-text" class="color-cycle-text">Xi Lin</span><br/>
                        <span class="text-stone-300 dark:text-stone-600 italic font-light">Product Designer</span>
                    </h1>
                    
                    <p class="text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
                        ${data.intro.subhead}
                    </p>
                    
                    <div class="absolute -right-10 top-10 rotate-12 hidden md:block opacity-20">
                         <i data-lucide="mouse-pointer-2" class="w-12 h-12 text-retro-red dark:text-bright-yellow"></i>
                         <span class="text-xs font-mono text-retro-red dark:text-bright-yellow block mt-2">Click anywhere!</span>
                    </div>

                    <div class="pt-8">
                        <button onclick="router.navigate('work')" class="group relative inline-flex items-center gap-3 px-8 py-4 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-xs font-bold uppercase tracking-widest hover:border-retro-red dark:hover:border-bright-yellow hover:text-retro-red dark:hover:text-bright-yellow transition-all">
                            <span>Explore Work</span>
                            <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>

                <div class="animate-fade-up delay-200">
                    <div class="flex items-center justify-between mb-12 border-b border-stone-100 dark:border-stone-800 pb-4">
                        <h3 class="text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-stone-100">Selected Projects</h3>
                        <a onclick="router.navigate('work')" class="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-retro-red dark:hover:text-bright-yellow cursor-pointer transition-colors">View All</a>
                    </div>
                    
                    <div class="grid grid-cols-1 gap-4">
                        ${featuredWorks.map(p => `
                            <div onclick="router.navigate('project', {id: ${p.id}})" class="group flex items-center justify-between p-6 border border-transparent hover:border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 cursor-pointer transition-all duration-500">
                                <div>
                                    <h4 class="text-2xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-retro-red dark:group-hover:text-bright-yellow transition-colors">${p.title}</h4>
                                    <p class="text-sm text-stone-400 mt-1">${p.category}</p>
                                </div>
                                <div class="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <i data-lucide="arrow-right" class="text-theme-accent w-6 h-6"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>`;
}

function renderWorkList() {
    const workProjects = data.projects.filter(p => p.type === 'work');
    return `
            <div class="px-6 md:px-12 max-w-6xl mx-auto animate-fade-up pb-20">
                <div class="mb-24 pt-12 border-t border-stone-100 dark:border-stone-800 flex justify-between items-end">
                    <h2 class="text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">Selected Works</h2>
                    <span class="text-xs font-mono text-stone-400 block">[ ${workProjects.length} ]</span>
                </div>
                <div class="flex flex-col gap-32">
                    ${workProjects.map(renderProjectCard).join('')}
                </div>
                <div class="mt-20 py-8 border-t border-dashed border-stone-200 dark:border-stone-800 text-center opacity-50 hover:opacity-100 transition-opacity duration-500">
                    <p class="text-xs font-serif italic text-stone-400">More works in progress...</p>
                </div>
            </div>`;
}

function renderProjectCard(p) {
    return `
            <div onclick="router.navigate('project', {id: ${p.id}})" class="project-card group cursor-pointer grid md:grid-cols-12 gap-8 items-center border-b border-stone-100 dark:border-stone-800 pb-20 last:border-0">
                <div class="md:col-span-7 order-2 md:order-1">
                    <div class="w-full aspect-[16/10] ${p.color} dark:bg-stone-900 relative overflow-hidden border border-stone-100 dark:border-stone-800">
                       <img src="${p.heroImage}" alt="${p.title}" class="w-full h-full object-cover grayscale opacity-90 dark:opacity-70" />
                       <div class="placeholder-overlay">
                            <span class="text-theme-accent mb-2">[ REPLACE ME ]</span>
                            <span class="font-bold text-stone-600 dark:text-stone-400">${p.title} Cover</span>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-5 order-1 md:order-2 space-y-6">
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-2">${p.category}</span>
                        <h3 class="text-4xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-retro-red dark:group-hover:text-bright-yellow transition-colors duration-300">${p.title}</h3>
                    </div>
                    <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">${p.summary}</p>
                    <div class="flex flex-wrap gap-2 pt-4">
                         ${p.details && p.details.team.tools ? p.details.team.tools.split(',').map(t => `<span class="px-2 py-1 border border-stone-200 dark:border-stone-800 text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400">${t.trim()}</span>`).join('') : ''}
                    </div>
                    <div class="pt-4">
                        <span class="text-xs font-bold underline underline-offset-4 decoration-stone-300 dark:decoration-stone-700 group-hover:decoration-retro-red dark:group-hover:decoration-bright-yellow text-stone-900 dark:text-stone-300 transition-all">View Case Study</span>
                    </div>
                </div>
            </div>`;
}

function renderExperiments() {
    const expProjects = data.projects.filter(p => p.type === 'experiment');
    return `
            <div class="px-6 md:px-12 max-w-6xl mx-auto animate-fade-up pb-20">
                <div class="mb-24 pt-12 border-t border-stone-100 dark:border-stone-800">
                    <h2 class="text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Experimental Lab</h2>
                    <p class="text-stone-500 dark:text-stone-400 max-w-lg text-lg font-light">Playground for creative coding, AI explorations, and game design.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                    ${expProjects.map(p => `
                        <div onclick="router.navigate('project', {id: ${p.id}})" class="project-card group cursor-pointer">
                            <div class="aspect-square bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800 mb-8 relative overflow-hidden">
                                <img src="${p.heroImage}" class="w-full h-full object-cover grayscale opacity-80 dark:opacity-60" />
                                <div class="placeholder-overlay">
                                    <span class="text-theme-accent mb-2">[ REPLACE ME ]</span>
                                    <span class="font-bold text-stone-600 dark:text-stone-400">${p.title} Visual</span>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div class="flex justify-between items-baseline">
                                    <h3 class="text-2xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-retro-red dark:group-hover:text-bright-yellow transition-colors">${p.title}</h3>
                                    <span class="text-[10px] font-bold uppercase text-stone-400 tracking-widest">${p.category}</span>
                                </div>
                                <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">${p.summary}</p>
                                <div class="pt-4 text-xs font-mono text-stone-400">Tools: ${p.details.team.tools}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-20 py-8 border-t border-dashed border-stone-200 dark:border-stone-800 text-center opacity-50 hover:opacity-100 transition-opacity duration-500">
                    <p class="text-xs font-serif italic text-stone-400">New experiments brewing...</p>
                </div>
            </div>`;
}

function renderAbout() {
    return `
            <div class="px-6 md:px-12 max-w-4xl mx-auto animate-fade-up pb-20">
                <div class="grid md:grid-cols-12 gap-16 items-start pt-12">
                    <div class="md:col-span-5 relative">
                        <div class="aspect-[3/4] bg-stone-100 dark:bg-stone-900 relative">
                           <img src="https://placehold.co/400x600/f5f5f4/d6d3d1?text=Profile+Photo" class="w-full h-full object-cover grayscale" />
                           <div class="placeholder-overlay"><span class="text-theme-accent mb-2">[ REPLACE ME ]</span><span class="font-bold text-stone-600 dark:text-stone-400">Portrait</span></div>
                        </div>
                        <div class="mt-8">
                            <a href="/resume.pdf" target="_blank" class="flex items-center justify-center gap-2 w-full py-3 border border-stone-200 dark:border-stone-800 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-all">
                                <i data-lucide="download" class="w-4 h-4"></i> Download Resume
                            </a>
                        </div>
                    </div>
                    <div class="md:col-span-7 space-y-12">
                        <div>
                           <h1 class="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-8">About Me</h1>
                           <p class="text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-light">${data.about.bio}</p>
                        </div>
                        <div class="grid grid-cols-2 gap-8 pt-8 border-t border-stone-100 dark:border-stone-800">
                           <div><h4 class="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">Education</h4><p class="text-sm font-bold text-stone-900 dark:text-stone-200">Cornell University</p><p class="text-xs text-stone-500 dark:text-stone-400 mt-1">MPS in Information Science</p></div>
                           <div><h4 class="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">Connect</h4><div class="flex flex-col gap-2"><a href="#" class="text-sm text-stone-500 dark:text-stone-400 hover:text-retro-red dark:hover:text-bright-yellow transition-colors">Email Me</a><a href="#" class="text-sm text-stone-500 dark:text-stone-400 hover:text-retro-red dark:hover:text-bright-yellow transition-colors">LinkedIn</a></div></div>
                        </div>
                    </div>
                </div>
            </div>`;
}

function renderCompetitiveAnalysis(ca) {
    if (!ca) return '';
    const chartPoints = ca.positioning.chartData.map(p => {
        const left = p.x + 50;
        const bottom = p.y + 50;
        const colorClass = p.isOurs ? 'bg-theme-accent scale-125 z-10 ring-4 ring-white/50 dark:ring-black/50' : 'bg-stone-400';
        return `<div class="absolute w-3 h-3 rounded-full ${colorClass} transform -translate-x-1/2 -translate-y-1/2 group hover:scale-150 transition-transform cursor-help" style="left: ${left}%; bottom: ${bottom}%;" title="${p.label}">
                    <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-stone-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">${p.label}</span>
                </div>`;
    }).join('');

    return `
            <div class="mt-32 animate-fade-up">
                <div class="mb-16 border-t border-stone-100 dark:border-stone-800 pt-12">
                    <h2 class="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4">Competitive Analysis</h2>
                    <p class="text-stone-500 dark:text-stone-400 text-lg font-light">Strategic positioning and market research.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div class="p-6 border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900"><h4 class="text-[10px] font-bold uppercase tracking-widest text-theme-accent mb-2">Genre</h4><p class="text-stone-900 dark:text-stone-200 font-medium text-sm">${ca.intro.Genre}</p></div>
                    <div class="p-6 border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900"><h4 class="text-[10px] font-bold uppercase tracking-widest text-theme-accent mb-2">Target Audience</h4><p class="text-stone-900 dark:text-stone-200 font-medium text-sm">${ca.intro.Target}</p></div>
                    <div class="p-6 border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900"><h4 class="text-[10px] font-bold uppercase tracking-widest text-theme-accent mb-2">Unique Selling Point</h4><p class="text-stone-900 dark:text-stone-200 font-medium text-sm">${ca.intro.USP}</p></div>
                </div>
                <div class="grid md:grid-cols-2 gap-12 mb-24 items-center">
                    <div>
                        <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">01. Market Positioning</h3>
                        <p class="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">${ca.positioning.desc}</p>
                    </div>
                    <div class="h-64 md:h-80 w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 relative chart-grid rounded-sm p-4">
                         <span class="absolute top-2 left-2 text-[9px] font-bold text-stone-400 uppercase">Strategic Randomness ↑</span>
                         <span class="absolute bottom-2 right-2 text-[9px] font-bold text-stone-400 uppercase">Operation Low ↓</span>
                         <div class="absolute top-0 bottom-0 left-1/2 w-px bg-stone-300 dark:bg-stone-700"></div>
                         <div class="absolute left-0 right-0 top-1/2 h-px bg-stone-300 dark:bg-stone-700"></div>
                         <div class="absolute inset-8 relative h-full">${chartPoints}</div>
                    </div>
                </div>
                <div class="mb-24">
                    <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-8">02. Key Competitors</h3>
                    <div class="grid md:grid-cols-3 gap-8">
                        ${ca.competitors.map(comp => `
                            <div class="p-6 border border-stone-100 dark:border-stone-800 hover:border-retro-red dark:hover:border-bright-yellow transition-colors group">
                                <div class="flex justify-between items-start mb-3">
                                    <h4 class="font-bold text-stone-900 dark:text-stone-100">${comp.name}</h4>
                                    <span class="text-[10px] bg-stone-100 dark:bg-stone-800 px-2 py-1 text-stone-500 dark:text-stone-400 rounded">${comp.type}</span>
                                </div>
                                <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed group-hover:text-stone-900 dark:group-hover:text-stone-200">${comp.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="mb-24">
                    <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-8">03. Feature Matrix</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left">
                            <thead class="text-xs text-stone-400 uppercase bg-stone-50 dark:bg-stone-900">
                                <tr><th class="px-6 py-3">Feature</th><th class="px-6 py-3 text-theme-accent">Our Game</th><th class="px-6 py-3">Competitor Standard</th></tr>
                            </thead>
                            <tbody class="divide-y divide-stone-100 dark:divide-stone-800 border-b border-stone-100 dark:border-stone-800">
                                ${ca.matrix.map(row => `<tr class="hover:bg-stone-50 dark:hover:bg-stone-900"><td class="px-6 py-4 font-bold text-stone-900 dark:text-stone-100">${row.feature}</td><td class="px-6 py-4 font-medium text-theme-accent">${row.ours}</td><td class="px-6 py-4 text-stone-500 dark:text-stone-400">${row.comp}</td></tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-8">04. SWOT Analysis</h3>
                        <div class="grid grid-cols-1 gap-6">
                            <div class="p-6 bg-stone-50 dark:bg-stone-900 border-l-4 border-stone-300 dark:border-stone-700"><h5 class="font-bold text-stone-900 dark:text-stone-100 mb-2">Strengths</h5><ul class="list-disc list-inside text-sm text-stone-600 dark:text-stone-400 space-y-1">${ca.swot.strengths.map(s => `<li>${s}</li>`).join('')}</ul></div>
                            <div class="p-6 bg-stone-50 dark:bg-stone-900 border-l-4 border-stone-300 dark:border-stone-700"><h5 class="font-bold text-stone-900 dark:text-stone-100 mb-2">Weaknesses</h5><ul class="list-disc list-inside text-sm text-stone-600 dark:text-stone-400 space-y-1">${ca.swot.weaknesses.map(s => `<li>${s}</li>`).join('')}</ul></div>
                            <div class="p-6 bg-stone-50 dark:bg-stone-900 border-l-4 border-[var(--theme-accent)]"><h5 class="font-bold text-stone-900 dark:text-stone-100 mb-2">Opportunities</h5><ul class="list-disc list-inside text-sm text-stone-600 dark:text-stone-400 space-y-1">${ca.swot.opportunities.map(s => `<li>${s}</li>`).join('')}</ul></div>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-8">05. Winning Strategy</h3>
                        <div class="space-y-6">
                            ${ca.strategy.map(s => `<div class="flex gap-4 items-start p-4 border border-transparent hover:border-stone-100 dark:hover:border-stone-800 transition-all"><div class="text-2xl grayscale hover:grayscale-0 transition-all">${s.icon}</div><div><h5 class="font-bold text-stone-900 dark:text-stone-100 text-sm mb-1">${s.title}</h5><p class="text-sm text-stone-600 dark:text-stone-400">${s.desc}</p></div></div>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
            `;
}

function renderStandardProject(root, p) {
    root.innerHTML = `
            <div class="px-6 md:px-24 max-w-5xl mx-auto animate-fade-up pb-32">
                <button onclick="router.navigate('${p.type === 'work' ? 'work' : 'experiments'}')" class="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 mb-16 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover-trigger">
                    <i data-lucide="arrow-left" class="w-3 h-3"></i> Back
                </button>

                <div class="mb-20 animate-fade-up delay-100">
                    <span class="text-xs font-bold uppercase tracking-widest text-[var(--theme-accent)] mb-4 block">${p.category}</span>
                    <h1 class="text-4xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-8 leading-tight tracking-tight">${p.title}</h1>
                    <p class="text-xl text-stone-500 dark:text-stone-400 font-light leading-relaxed border-l-2 border-[var(--theme-accent)] pl-6">${p.summary}</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-sm border-y border-stone-100 dark:border-stone-800 py-12 animate-fade-up delay-200">
                    <div><span class="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Role</span><span class="font-medium text-stone-900 dark:text-stone-200">${p.details.team.role}</span></div>
                    <div><span class="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Team</span><span class="font-medium text-stone-900 dark:text-stone-200">${p.details.team.members}</span></div>
                    <div><span class="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Focus</span><span class="font-medium text-stone-900 dark:text-stone-200">${p.details.team.responsibilities}</span></div>
                    <div><span class="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 text-[var(--theme-accent)]">Tools</span><span class="font-medium text-stone-900 dark:text-stone-200">${p.details.team.tools}</span></div>
                </div>

                <div class="space-y-24 animate-fade-up delay-300">
                    <section>
                        <h2 class="text-lg font-bold text-stone-900 dark:text-stone-100 mb-6 uppercase tracking-widest">The Challenge</h2>
                        <p class="text-stone-600 dark:text-stone-400 text-lg leading-relaxed">${p.details.problem}</p>
                    </section>
                    
                    <section>
                        <h2 class="text-lg font-bold text-stone-900 dark:text-stone-100 mb-12 uppercase tracking-widest">Process & Design</h2>
                        <div class="space-y-24">
                            ${p.details.activities.map((activity, idx) => `
                            <div>
                                <div class="flex items-baseline gap-4 mb-6 border-b border-stone-100 dark:border-stone-800 pb-2">
                                    <span class="text-xs font-mono text-[var(--theme-accent)]">0${idx + 1}</span>
                                    <h3 class="text-2xl font-bold text-stone-900 dark:text-stone-100">${activity.title}</h3>
                                </div>
                                <p class="text-stone-600 dark:text-stone-400 leading-relaxed mb-8 max-w-2xl">${activity.desc}</p>
                                <div class="w-full aspect-video bg-stone-50 dark:bg-stone-900 relative border border-stone-100 dark:border-stone-800 overflow-hidden">
                                    <img src="${activity.image}" class="w-full h-full object-cover" />
                                    <div class="placeholder-overlay"><span class="text-[var(--theme-accent)] mb-2">[ REPLACE ME ]</span><span class="font-bold text-stone-600 dark:text-stone-400">${activity.title}</span></div>
                                </div>
                            </div>`).join('')}
                        </div>
                    </section>

                    ${renderCompetitiveAnalysis(p.details.competitiveAnalysis)}

                    <section class="bg-stone-50 dark:bg-stone-900 p-8 md:p-16 border-l-4 border-[var(--theme-accent)]">
                        <div class="grid md:grid-cols-2 gap-12">
                            <div><h4 class="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Final Outcome</h4><p class="text-stone-900 dark:text-stone-100 text-lg leading-relaxed font-medium">${p.details.outcome}</p></div>
                            <div><h4 class="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Key Learning</h4><p class="text-stone-600 dark:text-stone-400 leading-relaxed italic">${p.details.challenges}</p></div>
                        </div>
                    </section>
                </div>
            </div>`;
}

function renderComplexProject(root, p) {
    root.innerHTML = `
            <div class="px-6 md:px-12 max-w-6xl mx-auto animate-fade-up pb-32">
                <button onclick="router.navigate('work')" class="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 mb-12 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover-trigger"><i data-lucide="arrow-left" class="w-3 h-3"></i> Back to Overview</button>
                <div class="mb-16 max-w-3xl">
                    <h1 class="text-4xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6 tracking-tight">${p.title}</h1>
                    <p class="text-xl text-stone-500 dark:text-stone-400 font-light leading-relaxed">${p.summary}</p>
                </div>
                <div class="flex gap-8 border-b border-stone-200 dark:border-stone-800 mb-16 overflow-x-auto">
                    ${p.subProjects.map((sub, idx) => `<button onclick="switchComplexTab('${sub.id}')" class="complex-tab-btn pb-4 text-sm font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${idx === 0 ? 'text-[var(--theme-accent)] border-b-2 border-[var(--theme-accent)]' : 'text-stone-400 hover:text-stone-600'}" data-id="${sub.id}">${sub.tabName}</button>`).join('')}
                </div>
                <div id="complex-content" class="animate-fade-in min-h-[500px]"></div>
            </div>`;
    switchComplexTab(p.subProjects[0].id);
}

// Make switchComplexTab global so onclick works
window.switchComplexTab = function(subId) {
    document.querySelectorAll('.complex-tab-btn').forEach(btn => {
        const isMatch = btn.dataset.id === subId;
        btn.className = `complex-tab-btn pb-4 text-sm font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${isMatch ? 'text-[var(--theme-accent)] border-b-2 border-[var(--theme-accent)]' : 'text-stone-400 hover:text-stone-600'}`;
    });
    const complexProject = data.projects.find(p => p.isComplex);
    const sub = complexProject.subProjects.find(s => s.id === subId);

    const renderWorkProcess = (steps) => {
        if (!steps) return '';
        return `
                    <div class="space-y-8 mt-8">
                        ${steps.map(step => `
                            <div class="pl-6 border-l-2 border-stone-200 dark:border-stone-800">
                                <h4 class="text-sm font-bold text-stone-900 dark:text-stone-100 mb-2">${step.stage}</h4>
                                <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">${step.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
    };

    const contentDiv = document.getElementById('complex-content');
    contentDiv.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-16 animate-fade-up">
                    <div class="md:col-span-4 space-y-12">
                        <div><h4 class="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Role</h4><p class="text-stone-900 dark:text-stone-200 font-medium">${sub.role}</p></div>
                        <div><h4 class="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Tools</h4><p class="text-stone-900 dark:text-stone-200 font-medium">${sub.tools}</p></div>
                        <div class="p-6 bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800"><h4 class="text-[10px] font-bold uppercase tracking-widest text-[var(--theme-accent)] mb-2">Key Impact</h4><p class="text-xl font-bold text-stone-900 dark:text-stone-100 leading-tight">${sub.stats}</p></div>
                        <div><h4 class="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Context</h4><p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">${sub.context}</p></div>
                    </div>
                    <div class="md:col-span-8 space-y-16">
                        <section><h2 class="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">The Problem</h2><p class="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">${sub.problem}</p></section>
                        <section>
                            <h2 class="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">Strategic Solution</h2>
                            <div class="bg-stone-50 dark:bg-stone-900 p-8 border-l-4 border-[var(--theme-accent)] mb-8"><p class="text-stone-900 dark:text-stone-200 leading-relaxed italic font-medium">${sub.solution}</p></div>
                            ${renderWorkProcess(sub.workProcess)}
                        </section>
                        <section><h2 class="text-sm font-bold uppercase tracking-widest text-stone-500 mb-4">Final Outcome</h2><p class="text-xl text-stone-900 dark:text-stone-100 font-light leading-relaxed">${sub.outcome}</p></section>
                    </div>
                </div>
            `;
    initIcons(); // Ensure icons render in tab content
};

// --- ROUTING LOGIC ---
let colorInterval;

const router = {
    navigate: (pageId, params = {}) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update Nav State: Use dynamic classes
        document.querySelectorAll('.nav-btn').forEach(el => {
            el.classList.remove('text-stone-900', 'dark:text-stone-100', 'border-b-2', 'border-theme-accent');
            el.classList.add('text-stone-400', 'dark:text-stone-500');
        });

        const activeBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
        if (activeBtn) {
            activeBtn.classList.remove('text-stone-400', 'dark:text-stone-500');
            activeBtn.classList.add('text-stone-900', 'dark:text-stone-100', 'border-b-2', 'border-theme-accent');
        }

        const root = document.getElementById('app-root');
        root.innerHTML = '';

        if (colorInterval) clearInterval(colorInterval);

        switch (pageId) {
            case 'home':
                root.innerHTML = renderHome();
                startColorCycle();
                break;
            case 'work': root.innerHTML = renderWorkList(); break;
            case 'experiments': root.innerHTML = renderExperiments(); break;
            case 'about': root.innerHTML = renderAbout(); break;
            case 'project':
                const project = data.projects.find(p => p.id === params.id);
                if (project.isComplex) {
                    renderComplexProject(root, project);
                } else {
                    renderStandardProject(root, project);
                }
                break;
            default:
                root.innerHTML = renderHome();
                startColorCycle();
        }
        
        // Render Icons after DOM update
        initIcons();
    }
};

// Make router global so onclick="router.navigate()" works in HTML strings
window.router = router;

// --- HELPER: Color Cycle Logic ---
function startColorCycle() {
    const titleEl = document.getElementById('home-title-text');
    if (!titleEl) return;

    const colors = [
        'var(--theme-accent)',
        '#f97316', // Orange
        '#eab308', // Yellow
        '#22c55e', // Green
        '#06b6d4', // Cyan
        '#3b82f6', // Blue
        '#a855f7'  // Purple
    ];

    colorInterval = setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        titleEl.style.color = randomColor;
    }, 2500);
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial Theme Check
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Bind Events
    document.getElementById('nav-logo').onclick = () => router.navigate('home');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.onclick = () => router.navigate(btn.dataset.page);
    });
    
    const themeToggle = document.getElementById('theme-toggle');
    if(themeToggle) themeToggle.onclick = toggleTheme;

    // Start App
    router.navigate('home');
});