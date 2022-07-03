const listaDeChamada = ['Joã0', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

console.log(listaDeChamada)

console.log()
listaDeChamada.splice(1, 2, 'Rodrigo')

console.log(`Uma Lista de Chamada: ${listaDeChamada}`)
console.log()

//Adicionando um novo elemento sem excluir ninguém
listaDeChamada.splice(2, 0, 'Rafael')
console.log()
console.log(`Uma Lista de Chamada: ${listaDeChamada}`)