export const starToilet = {
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
};
