var myString = "Clovis Daniel";

console.log(`String Original: ${myString}`);

var forString = "";

for (let i = myString.length-1; i >= 0; i--){
    forString += myString[i];
}

console.log(`Com For Decrescente: ${forString}`);

var myStringReverse = myString.split("");



myStringReverse = myStringReverse.reverse().join("");

console.log(`Com Split Reverse e Join: ${myStringReverse}`);
