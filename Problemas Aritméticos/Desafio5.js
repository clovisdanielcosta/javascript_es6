let ab = gets().split(' ');
let a = parseInt(ab[0]);
let b = parseInt(ab[1]);
let q = 0;
let r = 0;

for (resto = 0; resto < Math.abs(b); resto++){
   let quoc = parseInt(((a - resto) / b).toFixed(0));
   if (a === (b * quoc) + resto) {
     q = quoc;
     r = resto;
   }
}

console.log(parseInt(q) + ' ' + parseInt(r));
