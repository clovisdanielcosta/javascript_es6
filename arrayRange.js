// Declare an array and set within a range de 0 a 9 
let myArray = [...Array(10).keys()];

console.log(myArray);


//For a range from 1 to 10
let mySecondArray = [...Array(11).keys()];
// Remove first position
mySecondArray.shift();

console.log(mySecondArray);