//Ordenando fila de banco por SMS do maior pelo menor
let cases = parseInt(gets()); //Recebe quantidade de casos
const stack = []; //Cria a fila 
const stackOrdered = []; //Novo array para deixar os valores ordenados
let initialForCont = 0;

for (let i = 1; i <= cases; i++) {
    
    let stillInPosition = 0; //Conta os não alterados
    let numCustomers = parseInt(gets());
    let arriving = gets().split(" "); //Recebe os clientes
    //Carrega os valores nos novos arrays de fila
    for (let i = initialForCont; i < initialForCont + numCustomers; i++) {
        stack.push(parseInt(arriving[i]));
        stackOrdered.push(parseInt(stack[i]));              
    };

    //Altera início da stack
    initialForCont = initialForCont + numCustomers;

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
};

