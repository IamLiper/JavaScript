// Criando um vetor de objetos.
const usuarios = [
    {nome: "Felipe", idade: 19},
    {nome: "Lucas", idade: 16},
    {nome: "Sofia", idade: 18},
    {nome: "Maria", idade: 17}
]

// Funções Lambda.
// Percorrendo o vetor.
console.log("\nExibindo todos os usuários.")
usuarios.forEach((u) => console.log(`Nome: ${u.nome}, Idade: ${u.idade}.`))

// Filtrando por idade menor que 18 anos.
console.log("\nExibindo os usuários menores de idade.")
const menorIdade = usuarios.filter((u) => u.idade < 18)
menorIdade.forEach((u) => console.log(`Nome: ${u.nome}, Idade: ${u.idade}.`))

// Retornando apenas nomes.
console.log("\nExibindo apenas os nomes dos usuários.")
const listaNomes = usuarios.map(u => u.nome)
listaNomes.forEach((nome, index) => console.log(`${++index}º nome: ${nome}.`))

console.log('\nEncontrar um usuário na lista.')
const usuarioEncontrado = usuarios.find(u => u.nome === 'Lucas')
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)

console.log('\nSomando todas as idades na lista.')
const somaIdades = usuarios.reduce((soma, u) => soma + u.idade, 0)
console.log(`Soma: ${somaIdades}`)