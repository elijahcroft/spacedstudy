
import openai from "./deepseek"


export async function getSubtopics(parent_id: string) {
    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Generate 5 clear subtopics for: ${name}, only include the name no additional information` },
      ],
    });
  
    return completion.choices[0].message.content;
  }