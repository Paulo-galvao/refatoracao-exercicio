let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];

function mostrarMaiorNota(listaDeNotas) {
    let maiorNota = listaDeNotas[0];
    for (let i = 0; i < listaDeNotas.length; i++) {
        if (listaDeNotas[i] > maiorNota) {
            maiorNota = listaDeNotas[i];
        }
    }
    return maiorNota;
}

function mostrarMenorNota(listaDeNotas) {
    let menorNota = listaDeNotas[0];
    for (let i = 0; i < listaDeNotas.length; i++) {
        if(listaDeNotas[i] < menorNota) {
            menorNota = listaDeNotas[i];
        }
    }
    return menorNota;
}

function mostrarAprovados(listaDeNotas) {
    const lista = [];
    for (let i = 0; i < listaDeNotas.length; i++) {
        if(notas[i] >= 6) {
            lista.push(notas[i]);
            
        }
    }
    
    return lista;
    
}

function mostrarReprovados(listaDeNotas) {
    const lista = [];
    for (let i = 0; i < listaDeNotas.length; i++) {
        if(notas[i] < 6) {
            lista.push(notas[i]);
            
        }
    }
    
    return lista;
}

function contarAprovados(listaDeNotas) {
    let aprovados = 0;
    mostrarAprovados(listaDeNotas).forEach(aluno => {
        aprovados++;
    }); 
    return aprovados;
}

function contarReprovados(listaDeNotas) {
    let reprovados = 0;
    mostrarReprovados(listaDeNotas).forEach(aluno => {
        reprovados++;
    }); 
    return reprovados;
}

console.log(`Maior nota: ${mostrarMaiorNota(notas)}`);
console.log(`Menor nota: ${mostrarMenorNota(notas)}`);
console.log(`Notas acima da média: ${mostrarAprovados(notas)}`);
console.log(`Total de aprovados: ${contarAprovados(notas)}`);
console.log(`Notas abaixo da média: ${mostrarReprovados(notas)}`);
console.log(`Total de reprovados: ${contarReprovados(notas)}`);
