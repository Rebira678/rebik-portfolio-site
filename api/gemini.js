import { GoogleGenAI } from "@google/genai";

const RebiraContext = `
Rebira Adugna is a passionate Full Stack Web Developer based in Ethiopia.
He specializes in building high-performance, pixel-perfect web applications using the MERN stack (MongoDB, Express, React, Node.js).
Technical Skills:
- Frontend: React, JavaScript, TypeScript, Tailwind CSS, Next.js, Three.js, Framer Motion, GSAP.
- Backend: Node.js, Express, MongoDB, SQL/PostgreSQL.
- DevOps & Tools: Docker, AWS, Git, GitHub.

Key Achievements:
- Over 6+ successful projects delivered.
- Expertise in clean code, software architecture, and pixel-perfect UI/UX.
- Commitment to high-performance and scalable digital experiences.

Personal Values:
Rebira is driven by technical excellence, continuous learning, and a commitment to serving clients through innovative technology.
He is currently available for new projects and remote opportunities.

Respond as Rebira Adugna's Digital Assistant. Be professional, friendly, and concise. 
Highlight his engineering expertise and his ability to turn complex ideas into elegant solutions.
If asked about his location, mention he is based in Ethiopia but works globally.
If asked about hiring or contacting him, suggest using the contact form or reaching out via LinkedIn/GitHub.
`;

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { userMessage } = req.body;

        if (!userMessage) {
            return res.status(400).json({ error: "userMessage is required" });
        }

        const apiKey = process.env.GEMINI_API_KEY; // SAFE (server only)
        if (!apiKey) {
            return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
        }

        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: userMessage,
            config: {
                systemInstruction: RebiraContext,
                temperature: 0.7,
                maxOutputTokens: 500,
            },
        });

        return res.status(200).json({ text: response.text });
    } catch (error) {
        console.error("Gemini Error:", error);
        return res.status(500).json({
            text: "I'm sorry, I'm having trouble connecting to Rebira's brain right now. Please try again in a few seconds!",
        });
    }
}
