// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let N1 = parseFloat(gets());
while (N1 < 0 || N1 > 10){
  console.log("nota invalida");
  N1 = parseFloat(gets());
} 

let N2 = parseFloat(gets());
while (N2 < 0 || N2 > 10){
  console.log("nota invalida");
  N2 = parseFloat(gets());
} 

var media = (N1 + N2) / 2;

console.log(`media = ${parseFloat(media).toFixed(2)}`);