import chat from "./chatInstance.js";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from "langchain/prompts";

const textArray = process.argv.slice(2);

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are a helpful assistant that translates {input_language} to {output_language}."
  ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);

let response = null;

if (textArray?.length > 0) {
  console.log("entrou");
  response = await chat.generatePrompt([
    await translationPrompt.formatPromptValue({
      input_language: "Portugues",
      output_language: "English",
      text: textArray?.join(" "),
    }),
  ]);
  console.log("aqui dps");
}

console.log(
  "Resultado:",
  response?.generations[0][0]
    ? response?.generations[0][0]?.text
    : "Nenhum conteudo a ser carregado"
);
