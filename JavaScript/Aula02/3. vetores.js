// Criando um vetor.
const listarNomes = ['Felipe', 'Sofia', 'Maria', 'Ana']

console.log('\nExibindo todos os elementos: ')
console.log(`Nomes: ${listarNomes}`)

console.log('\nExibindo o primeiro elemento: ')
console.log(`Nome: ${listarNomes[0]}`)

console.log('\nAdicionando um elemento no vetor: ')
listarNomes.push('Lucas')
console.log(`Nomes: ${listarNomes}`)

console.log('\nRemovendo um elemento específico: ')
// Removendo 'Maria' do vetor.
// No indice 2, remover 1 elemento.
listarNomes.splice(2, 1)
console.log(`Nomes: ${listarNomes}`)

// Removendo o primeiro elemento do vetor.
console.log('\nRemovendo o primeiro elemento: ')
console.log(`Nome: ${listarNomes.shift()}`)

// Removendo o ultimo elemento do vetor.
console.log('\nRemovendo o último elemento: ')
console.log(`Nome: ${listarNomes.pop()}`)