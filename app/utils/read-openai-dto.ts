import OpenAI from "openai";

export async function readOpenAIDTO({
  message,
}: {
  message: string;
}): Promise<OpenAI.Chat.ChatCompletion> {
  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    throw new Error(
      "Could not find NEXT_PUBLIC_OPENAI_API_KEY environment variable, please be sure to include it in your environment."
    );
  }
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: "user", content: message }],
    model: "gpt-3.5-turbo",
  };

  try {
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params);
    return chatCompletion;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
