export const getGeminiResponse = async (userMessage) => {
    try {
        const res = await fetch("/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userMessage }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.text || "Failed to fetch response");
        return data.text;
    } catch (error) {
        console.error("Gemini Error:", error);
        return "I'm sorry, I'm having trouble connecting to Rebira's brain right now. Please try again in a few seconds!";
    }
};
