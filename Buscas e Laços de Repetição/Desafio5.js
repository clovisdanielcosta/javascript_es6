let numbers = parseInt(gets());
let arriving = gets().replace(/\s/g,',').trim().split(',');

let min = 0;
let minIndex = 0;

for (let i = 0; i < numbers; i++) {
  
  if ( i === 0) {
    min = arriving[i];
  }else if (parseFloat(arriving[i]) < min ) {
    min = arriving[i];
    minIndex = i;
  }

}
console.log(`Menor valor: ${min}`);
console.log(`Posicao: ${minIndex}`);
