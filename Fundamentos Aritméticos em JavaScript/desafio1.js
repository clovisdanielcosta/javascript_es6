const numbers = []; 

for (let i = 0; i < 6; i++) {
	numbers.push(gets());
}

const positives = numbers.reduce((totalPositives, number) => {

  if (number > 0 && number !== null) {
       totalPositives += 1
    }
    return totalPositives       
}, 0)

console.log(`${positives} valores positivos`);