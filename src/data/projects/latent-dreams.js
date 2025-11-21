export const latentDreams = {
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
};
