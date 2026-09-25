import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

interface ColorScheme {
  backgroundColor: string;
  accentColor: string;
  textColor: string;
}

export const getColorScheme = async (occasionType: string): Promise<ColorScheme> => {
  const interaction = await ai.interactions.create({
    model: "gemini-3-flash-preview",
    input: `Bangladeshi political poster occasion: "${occasionType}". Suggest a color scheme suitable for this occasion.`,
    response_format: {
      type: "text",
      mime_type: "application/json",
      schema: {
        type: "object",
        properties: {
          backgroundColor: { type: "string", description: "Hex color code for background" },
          accentColor: { type: "string", description: "Hex color code for headline/accent" },
          textColor: { type: "string", description: "Hex color code for body text" },
        },
        required: ["backgroundColor", "accentColor", "textColor"],
      },
    },
  });

  return JSON.parse(interaction.output_text as string) as ColorScheme;
};