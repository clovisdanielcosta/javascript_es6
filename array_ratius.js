let arr = [1, 3, 3, 0, -7, 8];

let positives = (arr.filter((p) => p > 0)).length / arr.length;
let negatives = (arr.filter((n) => n < 0)).length / arr.length;        
let zeros = (arr.filter((z) => z == 0)).length / arr.length;


console.log(parseFloat(positives).toFixed(6));
console.log(parseFloat(negatives).toFixed(6));    
console.log(parseFloat(zeros).toFixed(6));
