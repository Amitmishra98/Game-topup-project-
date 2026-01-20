import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Fallback for dev to avoid crashes if undefined, but logic handles it.

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, my connection to the server (API Key) is missing. Please try again later.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Context aware prompt
    const systemInstruction = `You are "ReloadBot", a helpful customer support assistant for "GameReload.shop". 
    
    About the shop:
    - We sell top-ups for games like Free Fire (Diamonds), PUBG Mobile (UC), Genshin Impact (Crystals), etc.
    - Payments are instant and secure.
    - We support Credit Card, PayPal, Crypto, and Google Pay.
    - We do NOT ask for passwords, only Player IDs/UIDs.
    
    Your goal:
    - Answer questions about pricing, how to find IDs, and payment methods.
    - Be concise, friendly, and use gaming emoji.
    - If a user asks about a specific game that we support (Free Fire, PUBG, Genshin, MLBB, COD, Valorant), give a brief enthusiastic response about topping it up here.
    - If a user reports an issue, tell them to email support@gamereload.shop with their Transaction ID.
    
    Tone: Gamer-friendly, professional, helpful.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Low latency
      }
    });

    return response.text || "Sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the game servers (AI Error). Please try again shortly.";
  }
};
