const nomes = ['Joã0', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme',
    'Aline', 'Carlos','Paulo','Bia','Vivian','Isabela','Vinicius', 'Renan',
'Renanta','Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length / 2); 
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Lista completa ${nomes}`)
console.log()
console.log(`Lista de alunos da sala 1: ${sala1}`)
console.log()
console.log(`Lista de alunos da sala 2: ${sala2}`)
