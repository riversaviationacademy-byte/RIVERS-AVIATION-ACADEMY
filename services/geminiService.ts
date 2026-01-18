
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Fix: Initialize GoogleGenAI using the process.env.API_KEY directly as a named parameter
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (prompt: string, history: { role: string; text: string }[]) => {
  try {
    // Fix: Use the recommended model 'gemini-3-flash-preview' for basic text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        // Fix: Recommendation: Avoid setting maxOutputTokens if not required to prevent truncated responses.
      }
    });

    // Fix: Access the generated text using the .text property (not a method)
    return response.text || "I'm sorry, I couldn't process that. Please try calling our counselor directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our systems are experiencing high traffic. Please reach us on WhatsApp for immediate assistance.";
  }
};
