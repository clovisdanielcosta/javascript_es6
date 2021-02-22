
let fraseRecebida = ("abcdef abc abc abcdef abc abcdef abc").toString();
let fraseLista = (fraseRecebida).split(" ");
let maiorPalavra = fraseLista[0];
let abrev = "";
let cont = 0;

for (i = 0; i < fraseLista.lenght; i++) {
    if (fraseLista[i+1] > fraseLista[i]) {
        maiorPalavra = fraseLista[i+1];
    }
}

abrev = maiorPalavra.substring(0,1)+ ".";

for (i =0; i < fraseRecebida.length; i++) {
    if (fraseLista[i] === maiorPalavra) cont++;
    fraseRecebida = fraseRecebida.replace(maiorPalavra, abrev);
}

console.log(fraseRecebida);
console.log(`${abrev} = ${maiorPalavra}`);
console.log(cont);


