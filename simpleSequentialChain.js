import { SimpleSequentialChain, LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import chat from "./chatInstance.js";

const textArray = process.argv.slice(2);

const template = `you are an aristocratic thinker, write a thought in Portuguese regarding this topic.

  Theme: {theme}
  This is my thoughts on the topic above:`;

const promptTemplate = new PromptTemplate({
  template,
  inputVariables: ["theme"],
});

const aristocraticChain = new LLMChain({ llm: chat, prompt: promptTemplate });

const poemTemplate = `make a poem in Portuguese based on low aristocratic thinking below:
thought: {thought}

In the poem, don't say that you are the thinker, the thought has to serve only as inspiration.
`;

const promptPoemTemplate = new PromptTemplate({
  template: poemTemplate,
  inputVariables: ["thought"],
});

const poemChain = new LLMChain({ llm: chat, prompt: promptPoemTemplate });

const overallChain = new SimpleSequentialChain({
  chains: [aristocraticChain, poemChain],
  verbose: false,
});

let review = null;

if (textArray?.length > 0) {
  review = await overallChain.run(textArray?.join(" "));
} else {
  console.log("Insira um tema valido");
}

console.log("🚀 resultado:", review ? review : "Não foi possivel carregar");
