import chat from "./chatInstance.js";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from "langchain/prompts";

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are a helpful assistant that translates {input_language} to {output_language}."
  ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);
console.log(
  "translationPrompt",
  await translationPrompt.formatPromptValue({
    input_language: "English",
    output_language: "French",
    text: "I love programming.",
  })
);

// const responseA = await chat.generatePrompt([
//   await translationPrompt.formatPromptValue({
//     input_language: "English",
//     output_language: "French",
//     text: "I love programming.",
//   }),
// ]);

// console.log(responseA);
