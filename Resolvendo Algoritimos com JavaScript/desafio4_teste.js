let cases = 1;
let hash = 0;
var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let str1= 'OSADOISAJDSAOIDJA';
let str2 = 'ASOIJDOSAJDASOIDJA';	
let result = 21;

let posAlfabeto = 0;
let elemento = 0;
let posicaoNaString = 0;

for (let i = 0; i < str1.length; i++){
    for ( let j = 0; j < alfabeto.length; j++) {
        if (str1[i] === alfabeto[j]) {
            posAlfabeto = j;
            posicaoNaString = i;
        }
    }
    console.log(posAlfabeto + "+" + elemento + "+" + posicaoNaString);
    elemento = cases-1;
    hash = hash + posAlfabeto + elemento + posicaoNaString;
}

for (let b = 0; b < str2.length; b++){
    for ( let h = 0; h < alfabeto.length; h++) {
        if (str2[b] === alfabeto[h]) {
            posAlfabeto = h;
            posicaoNaString = b;
        }
    }
    console.log(posAlfabeto + "+" + elemento + "+" + posicaoNaString);
    elemento = cases;
    hash = hash + posAlfabeto + elemento + posicaoNaString;
}

console.log(hash);