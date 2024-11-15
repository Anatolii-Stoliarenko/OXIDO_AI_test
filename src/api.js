import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getResponseOpenAI(promt, article) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an assistant that generates HTML.",
        },
        {
          role: "user",
          content: `${promt}: ${article}`,
        },
      ],
      max_tokens: 3000,
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Wystąpił błąd podczas komunikacji z OpenAI:", error);
    return null;
  }
}
