import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";
import chat from "./chatInstance.js";

console.log(
  "🚀 HumanChatMessage:",
  new HumanChatMessage(
    "Translate this sentence from English to French. I love programming."
  )
);

const response = await chat.call([
  new HumanChatMessage(
    "Translate this sentence from English to French. I love programming."
  ),
]);

console.log("🚀 ~ file: index.ts:7 ~ chat:", response);
