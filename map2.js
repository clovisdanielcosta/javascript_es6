// Retorna um novo array, de mesmo tamanho, iterando cada item do array.
let cont = 0, 
    ar = "",
    ar1 = "",
    ar2 = "";

ar = ("81 195 92 473");

ar1 = ar.split(" ");
ar2 = ar.split(" ").sort().reverse();
parseInt(ar1);
parseInt(ar2);
 
jr = ar1.map((ar1) => `${ar1}`)
jr = ar2.map((ar2) => ar2)



for (let j = 0; j < 4; j++) {
    if ( ar1[j] === ar2[j]) {
        cont++;
    };
};

console.log(ar);
console.log(ar1);
console.log(ar2);
console.log(cont);