// Função - arrow function
// const somar = (a, b) => {
//     soma = a + b
//     return soma
// }

// const subtrair = (a, b) => {
//     subtracao = a - b
//     return subtracao
// }

// const multiplicar = (a, b) => {
//     multiplicacao = a * b
//     return multiplicacao
// }

// const dividir = (a, b) => {
//     divisao = a / b
//     return divisao
// }

// Função - arrow function - sem chaves
const somar = (a, b) => a + b

const subtrair = (a, b) => a - b

const multiplicar = (a, b) => a * b

const dividir = (a, b) => a / b

// Chamando função.
const soma = somar(2, 3)
const subtracao = subtrair(3, 2)
const multiplicacao = multiplicar(2, 3)
const divisao = dividir(3, 2)

// Exibindo.
console.log(`Soma: ${soma}`)
console.log(`Subtração: ${subtracao}`)
console.log(`Multiplicação: ${multiplicacao}`)
console.log(`Divisão: ${divisao}`)