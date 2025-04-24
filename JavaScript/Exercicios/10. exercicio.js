const notas = [10, 5, 7]

// Listando todas as notas
console.log('Listando todas as notas.')
notas.forEach((notas, index) => console.log(`${++index}º notas: ${notas}`))
// Calculando a média
console.log('\nCalculando a média.')
const media = notas.reduce((soma, atual) => soma + atual, 0) / notas.length
console.log(media.toFixed(1))