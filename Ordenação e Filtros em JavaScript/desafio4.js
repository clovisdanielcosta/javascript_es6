//Ordenando fila de banco por SMS do maior pelo menor
let cases = (4); //Recebe quantidade de casos
let numCustomers;
let arriving = ("1 51 112 17").split(" "); //Recebe os clientes
const stack = []; //Cria a fila 
const stackOrdered = []; //Novo array para deixar os valores ordenados
let stillInPosition = 0; //Conta os não alterados

for(let i = 1; i < casos; i++)
{
    eval("var numCustomers"+i+" = " + "2 "); 
    eval("var arriving"+ i +" = "+"("+"1 51 112 17"+")"+".split"+"("+" "+")"); //Recebe os clientes

   eval("var arriving"+i+" = new Array()");
   eval("meu_array.push("add_algo");
}

 = 



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

// Testando a saída
console.log(arriving);
console.log(stack);
console.log(stackOrdered);
for (let h = 0; h < cases; h++) {
    console.log(`Arriving - P: ${arriving.indexOf(arriving[h])} V: ${arriving[h]}. Stack - P: ${stack.indexOf(stack[h])} V: ${stack[h]}. Stack - P: ${stack.indexOf(stack[h])} V: ${stack[h]}. stackOrdered - P: ${stackOrdered.indexOf(stackOrdered[h])} V: ${stackOrdered[h]}.`);
};
