import PromptSync from "prompt-sync";

const prompt = PromptSync()
const nascimento = prompt(`Qual o ano do seu nascimento:`)
const idade = 2023 - nascimento 
console.log (`voçê tem ${idade} anos `)