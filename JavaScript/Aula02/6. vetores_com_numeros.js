// Criando vetor somente com números.
const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8]

// Listando todos os números da lista.
console.log('Listando todos os números da lista.')
console.log(listaDeNumeros)

// Multiplicando todos os números por 2.
console.log('\nMultiplicando valores por 2.')
const dobrados = listaDeNumeros.map(n => n * 2)
console.log(dobrados)

// Filtrando os números pares.
console.log('\nFiltrando elementos pares.')
const pares = listaDeNumeros.filter(n => n % 2 == 0)
console.log(pares)

// Somando todos os números.
console.log('\nSomando todos os números da lista.')
const soma = listaDeNumeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)