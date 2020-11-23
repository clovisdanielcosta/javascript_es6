//Faixas
// 0000.00 - 2000 -  0
// 2000.01 - 3000 -  8
// 3000.01 - 4500 - 18
// 4500.01        - 28   
let pay = parseFloat(gets()).toFixed(2);
let fee = 'Isento';

if(pay > 2000 && pay <= 3000) {
  fee = ((pay - 2000) * 0.08);
}else if(pay > 3000 && pay <= 4500) {
  fee = (1000 * 0.08) + ((pay - 3000) * 0.18);
}else if (pay > 4500) {
  fee = (1000 * 0.08) + (1500 * 0.18) + (pay - 4500) * 0.28;
}
if (fee == 'Isento') {
  console.log('Isento');
} else {
console.log('R$ ' + parseFloat(fee).toFixed(2));
}

