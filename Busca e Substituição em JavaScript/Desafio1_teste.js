let N = 2;
let arriving = [
                'One three mour mand at midnight',
                'one three five'
                ];

let cases = parseInt(N); //Recebe quantidade de casos
let arrivingSeparated = [];

function strLength(a) {(a.length > 30) ? a.substring(0,30) : a};

for (let i = 0; i < cases; i++) {
    arrivingSeparated[i] = arriving[i]
                            .split(' ')
                            .sort((a, b) => (b.length > a.length) ? 1 :
                                (b.length === a.length) ? (a > b) -1 : -1)
                            .toString()
                            .replace(/,/gi, " ")
}
for (sentence in arrivingSeparated) console.log(arrivingSeparated[sentence]);