let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];

let soma = 0;
let maiorNota = notas[0]; 
let menorNota = notas[0];

function mostrarMaiorNota(listaDeNotas) {
    for (let i = 0; i < listaDeNotas.length; i++) {
        if (listaDeNotas[i] > maiorNota) {
            maiorNota = listaDeNotas[i];
        }
    }
    return maiorNota;
}

function mostrarMenorNota(listaDeNotas) {
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

function mostarReprovados(listaDeNotas) {
    const lista = [];
    for (let i = 0; i < listaDeNotas.length; i++) {
        if(notas[i] < 6) {
            lista.push(notas[i]);
            
        }
    }
    
    return lista;
}

console.log(`Maior nota: ${mostrarMaiorNota(notas)}`);
console.log(`Menor nota: ${mostrarMenorNota(notas)}`);
console.log(`Notas acima da média: ${mostrarAprovados(notas)}`);
console.log(`Notas abaixo da média: ${mostarReprovados(notas)}`);
