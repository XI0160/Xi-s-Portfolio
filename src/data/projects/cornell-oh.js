export const cornellOH = {
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
};
