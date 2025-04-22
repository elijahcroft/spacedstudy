import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.PUBLIC_DEEPSEEK_API_KEY
});


export default openai;