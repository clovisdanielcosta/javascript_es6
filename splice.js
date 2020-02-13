const arr = [1, 2, 3, 4, 5];

arr.splice(2);
console.log(arr);
// [3, 4, 5]

arr.splice(0, 0, 'first');
console.log(arr);
// ['first', 1, 2]
