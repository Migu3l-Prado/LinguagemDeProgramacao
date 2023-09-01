import PromptSync from "prompt-sync"

const prompt = PromptSync()

const salario = Number((prompt("Digite o valor do salário: ")))
const aumento = Number((prompt("Digite o aumento (%): ")))

const novosalario = salario + (salario * (aumento/100))

console.log(`O salário antigo era de R$ ${salario}`)
console.log(`O novo salário é de R$ ${novosalario}`)

