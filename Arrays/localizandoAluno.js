const alunos = ['Joã0', 'Juliana', 'Ana', 'Caio'];

const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){    //Includes - recebe o array e faz uma busca pelo valor, retorna booleano
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) //IndexOf - retorna o número do índice dentro do array
         return listaDeNotasEAlunos[0][indice] +  ' sua media é: ' + listaDeNotasEAlunos[1][indice]
    } else 
        {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))
