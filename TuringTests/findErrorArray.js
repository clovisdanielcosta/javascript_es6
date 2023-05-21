//Return an array of numberRepeated and numberMissing

let myArray = [1,2,3,4,3];
let uniqueArray = [...new Set(myArray)];
let result = [];
let numberRepeated;
let numberMissing;

console.log(`myArray: ${myArray}`)
console.log(`uniqueArray: ${uniqueArray}`);

for (const i of myArray) {
    
    for (const j of uniqueArray) {
        
        if(uniqueArray[i] != myArray[j]){

            numberRepeated = i - 1;
            numberMissing = i + 1;

        }

    }

}

console.log(`Result[${numberRepeated},${numberMissing}]`);
