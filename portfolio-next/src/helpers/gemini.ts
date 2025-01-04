import { GoogleGenerativeAI } from "@google/generative-ai";

let conversation: any | null = null;

interface Part {
  text: string;
}

interface Content {
  role: "user" | "model";
  parts: Part[];
}

interface ChatResponse {
  text: string;
  conversation: any | null; 
}

export async function initializeChat(message: string): Promise<any | null> {
  const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // Server-only variable
  if (!geminiApiKey) {
    console.error("GEMINI API Key is not set");
    return null;
  }

  try {
    const model = new GoogleGenerativeAI(geminiApiKey).getGenerativeModel({
      model: "gemini-pro",
    });

    const initHistory: Content[] = [
      { role: "user", parts: [{ text: message }] },
      { role: "model", parts: [{ text: "Hi, I am Tim. How can I help you?" }] },
    ];

    conversation = model.startChat({
      history: initHistory,
      generationConfig: { maxOutputTokens: 350 },
    });
    conversation._apiKey = null;
    return conversation;
  } catch (error) {
    console.error("Error initializing chat:", error);
    return null;
  }
}

export async function sendMessage(message: string): Promise<ChatResponse> {
  const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // Server-only variable

  const response = {
    text: 'Something went wrong',
    conversation: null
  }

  if (!conversation) {
    console.error("Conversation not initialized");
    return {
      text: "Conversation not initialized",
      conversation: null,
    };
  }

  try {
    conversation._apiKey = geminiApiKey;
    const result = await conversation.sendMessage(message);
    // const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    // await delay(1000); // Delay for 1 seconds
    // console.log(result)
    response.text = await result.response.text();
    response.conversation = conversation;
    return response;
  } catch (error: unknown) {
    console.error("Error sending message:", error);
    response.conversation = conversation;
    return response;
  }
  
}
