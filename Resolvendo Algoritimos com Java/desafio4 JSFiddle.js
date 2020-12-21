let cases = prompt();
let hash = 0;
var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let posAlfabeto = 0;
let elemento = 0;
let posicaoNaString = 0;

for ( let i = 0; i < cases; i++){

    let lines = parseInt(prompt());

    for (let h= 0; h < lines; h++) {

        let str = prompt();

        for (let j = 0; j < str.length; j++){

            for ( let k = 0; k < alfabeto.length; k++) {

                if (str[j].toUpperCase() === alfabeto[k]) {
                    posAlfabeto = k;
                    posicaoNaString = j;
                }
            }
          elemento = h;
          hash = hash + posAlfabeto + elemento + posicaoNaString;
          console.log(posAlfabeto + "+" + elemento + "+" + posicaoNaString);
        }
            
    }

}

console.log(hash);