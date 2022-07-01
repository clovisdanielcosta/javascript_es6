let minhaLista = new Object();
minhaLista.listaDeCaixas = [];

for(let i = 0; i < 10; i++){
    let caixa = new Object();
    caixa.codigo = i+1;
    caixa.livro = `Livro n° ${i+1}`;
    caixa.preco = 10;

    minhaLista.listaDeCaixas.push(caixa);
}

console.log(minhaLista);

let valor = 0;

for(let elemento of minhaLista.listaDeCaixas){
    elemento.preco += valor;
    console.log(elemento.preco);
    valor = elemento.preco;
}

let listaJson = JSON.stringify(minhaLista);

console.log(minhaLista.listaDeCaixas);
console.log(listaJson);

