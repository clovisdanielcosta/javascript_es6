let cases = parseInt(gets()); //Recebe quantidade de números
var evens = []; //Conta os pares
var odds = []; //Conta os ímpares

for (var i = 0; i < cases; i++) {
    number = parseInt(gets());
    //Verifica se é par ou ímpar e insere nos arrays
    if (number % 2 === 0) {
      evens.push(parseInt(number));
    } else {
      odds.push(parseInt(number));
    }    
}

function sortNum(a, b) { //Função auxiliar para ordenar números
  return (a - b);
}

evens.sort(sortNum); //Ordenando
odds.sort(sortNum);

for (var i = 0; i < evens.length; i++) { 
   console.log(evens[i]); //Saída pares
    }
    
for (var j = odds.length -1 ; j >= 0; j--) { 
  console.log(odds[j]); //Saída ímpares
}