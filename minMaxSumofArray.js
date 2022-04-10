let arr = [1, 3, 15, 7, 9];

arr.sort((a, b) => a - b);

let minArr = arr.reduce((min, n) => min + n) - arr[arr.length-1];
let maxArr = arr.reduce((max, n) => max + n) - arr[0];            

console.log(minArr);
console.log(maxArr);
