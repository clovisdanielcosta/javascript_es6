let numbers = gets();
let n2=0, n3=0, n4=0, n5=0;

gets().split(' ').forEach(item => {
  
  if (parseInt(item) % 2 === 0) n2++;
  if (parseInt(item) % 3 === 0) n3++;
  if (parseInt(item) % 4 === 0) n4++;
  if (parseInt(item) % 5 === 0) n5++;
  
});
console.log(`${n2} Multiplo(s) de 2`);
console.log(`${n3} Multiplo(s) de 3`);
console.log(`${n4} Multiplo(s) de 4`);
console.log(`${n5} Multiplo(s) de 5`);