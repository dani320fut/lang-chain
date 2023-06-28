import { HumanChatMessage } from "langchain/schema";
import chat from "./chatInstance.js";

let response;

const textArray = process.argv.slice(2);

if (textArray?.length > 0) {
  response = await chat.call([new HumanChatMessage(textArray?.join(" "))]);
}

console.log(
  "Resultado:",
  response?.text ? response?.text : "Nenhum conteudo a ser carregado"
);
