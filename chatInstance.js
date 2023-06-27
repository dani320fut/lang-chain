import { ChatOpenAI } from "langchain/chat_models/openai";
import dotenv from "dotenv";
dotenv.config();

export default new ChatOpenAI({
  temperature: 0,
  openAIApiKey: process.env.OPEN_AI_API_KEY,
});
