//Ordenando fila de banco por SMS do maior pelo menor
let cases = parseInt(gets()); //Recebe quantidade de casos

for (let i = 1; i <= cases; i++) {

    const stack = []; //Cria a fila 
    const stackOrdered = []; //Novo array para deixar os valores ordenados
    let stillInPosition = 0; //Conta os não alterados
    let numCustomers = parseInt(gets());
    let arriving = (gets()).split(" "); //Recebe os clientes
    //Carrega os valores nos novos arrays de fila
    for (let i = 0; i < numCustomers; i++) {
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
    for (let j = 0; j < numCustomers; j++) {
        if ( stack[j] === stackOrdered[j]) {
            stillInPosition++;
        };
    };
    //Saída dos não alterados
    console.log(stillInPosition);
};