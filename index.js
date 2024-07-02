let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];

function mostrarMedia(listaDeNotas) {
    let soma = 0;
    listaDeNotas.forEach(nota => {
        soma += nota;
    })
    return soma / listaDeNotas.length;
}

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
        if(notas[i] >= mostrarMedia(listaDeNotas)) {
            lista.push(notas[i]);            
        }
    }    
    return lista;
    
}

function mostrarReprovados(listaDeNotas) {
    const lista = [];
    for (let i = 0; i < listaDeNotas.length; i++) {
        if(notas[i] < mostrarMedia(listaDeNotas)) {
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

console.log(`Média entre as notas ${mostrarMedia(notas)}
Maior nota: ${mostrarMaiorNota(notas)}
Menor nota: ${mostrarMenorNota(notas)}
Notas acima da média: ${mostrarAprovados(notas)}
Total de aprovados: ${contarAprovados(notas)}
Notas abaixo da média: ${mostrarReprovados(notas)}
Total de reprovados: ${contarReprovados(notas)}`);
