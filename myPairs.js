// Encontrar a quantidade de pares num array que atendem a condição:
// A[i] - A[j] = i - j
// A[i] - i = A[j] - i

let A = [2, 1, 4];
// resultado (2,4) 2 pares
let myPairs = 0;

for(let i = 0; i < A.length; i++){

      for(let j = i; j < A.length; j++){

            let a = A[i];
            let b = A[j];

            if(A[i] - A[j] === i - j)
                  myPairs++;
      }
}

console.log(myPairs);

