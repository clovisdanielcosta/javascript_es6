//Ordenando fila de banco por SMS do maior pelo menor
let cases = parseInt(gets(5)); //Recebe quantidade de casos
let arriving = gets("1 51 112 17").split(" "); //Recebe os clientes
const stack = []; //Cria a fila 
const stackOrdered = []; //Novo array para deixar os valores ordenados
let stillInPosition = 0; //Conta os não alterados

//Carrega os valores nos novos arrays de fila
for (let i = 0; i < cases; i++) {
    stack.push(parseInt(arriving[i]));
    stackOrdered.push(parseInt(stack[i]));
};

//Deixando os tipos iguais
stack.map((stack) => stack);

//Ordenando em ordem descrescente e númerica
function sortNum(a, b){
    return (b - a) //Função auxiliar para o array poder serja ordenado numericamente.
}
stackOrdered.sort(sortNum)

//Deixando os tipos iguais para o segundo array
stackOrdered.map((stackOrdered) => stackOrdered)

//Comparando valores para pegar os não alterados
for (let j = 0; j < cases; j++) {
    if ( stack[j] === stackOrdered[j]) {
        stillInPosition++;
    };
};

//Saída dos não alterados
console.log(stillInPosition);
