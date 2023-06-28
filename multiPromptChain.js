import { MultiPromptChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import chat from "./chatInstance.js";

const promptNames = ["population", "history", "economy"];

const promptDescriptions = [
  "A great geographer with vast knowledge about the population of the countries",
  "A great historian with knowledge focused on the history of countries",
  "a great economist great in understanding the situation of the countries",
];

const populationTemplate = new PromptTemplate({
  template: `You are a great geography teacher. Below I will go through the country and I want you to return in the form of a list the population and percentage of each known ethnicity in it.
      Answer in Portuguese and answer in the form of a list, example:
      - brancos: 50 milhoes / 20% da população.
      - indios: 5 milhoes / 2% da população.
      
      here is the country:
      {input}
      `,
  inputVariables: ["input"],
});

const historyTemplate = new PromptTemplate({
  template: `You are a great historian. Below I will give the name of a country, and I want a brief summary of its history.
    Answer in Portuguese.
    
    here is the country:
    {input}`,
  inputVariables: ["input"],
});

const economyTemplate = new PromptTemplate({
  template: `You are a great economist. Below I will pass a country and I would like to briefly understand the current situation of the economy of that country.
    Answer in Portuguese.
    
    here is the country:
    {input}`,
  inputVariables: ["input"],
});

const promptTemplates = [populationTemplate, historyTemplate, economyTemplate];

const multiPromptChain = MultiPromptChain.fromLLMAndPrompts(chat, {
  promptNames,
  promptDescriptions,
  promptTemplates,
});

const textArray = process.argv.slice(2);

let result = null;

if (textArray?.length > 0) {
  const teste = await multiPromptChain.call({
    input: textArray.join(" "),
  });

  result = teste.text;
} else {
  console.log("🚀 Utilize um texto valido");
}
console.log("🚀 Resultado: ", result ? result : "Sem resultado");
