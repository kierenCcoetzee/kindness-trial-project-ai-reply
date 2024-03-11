import { Email } from "@/app/types/email-types";
import { readOpenAIDTO } from "../read-openai-dto";
import OpenAI from "openai";

type TagsAndReplyCompletionResponse = {
  tags: string[];
  reply: string;
};

export const emailController = () => ({
  getTagsAndExampleReply: async ({
    email,
  }: {
    email: Email;
  }): Promise<TagsAndReplyCompletionResponse> => {
    // console.log("fetching tags and reply");
    const message = { subject: email.subject, message: email.message };
    const completions: OpenAI.Chat.ChatCompletion = await readOpenAIDTO({
      message: `this json is of an email: ${JSON.stringify(
        message
      )}, return json in format {tags: [], reply: ""} where tags are 3 to 5 words represensting sender's tone or mood, and reply is html markdown of a suitable kind-hearted reply, be sure to include line breaks in the reply`,
    });

    const response: TagsAndReplyCompletionResponse = JSON.parse(
      completions.choices[0].message.content || ""
    );
    // console.log(response);

    return {
      tags: [...response.tags.map((tag) => tag)],
      reply: response.reply,
    };
  },
});
