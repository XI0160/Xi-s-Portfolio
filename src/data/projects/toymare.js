export const toymare = {
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
};
