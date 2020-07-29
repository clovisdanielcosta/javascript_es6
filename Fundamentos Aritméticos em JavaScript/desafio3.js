const numbers = []; 

for (let i = 0; i < 5; i++) {
	numbers.push(gets());
}

var evens = 0,
    odds = 0,
    positives = 0,
    negatives = 0; 

const analyze = numbers.reduce((totalNumbers, number) => {

  if (number % 2 !== 0) {
  		odds += 1
  } else { 
    	evens += 1
  }
    
  if (number > 0) return positives += 1;
  if (number < 0) return negatives += 1;
    
    return totalNumbers

}, 0);

console.log(`${evens} valor(es) par(es)`);
console.log(`${odds} valor(es) impar(es)`);
console.log(`${positives} valor(es) positivo(s)`);
console.log(`${negatives} valor(es) negativo(s)`);
