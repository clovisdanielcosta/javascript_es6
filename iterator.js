const ar = [1, 2, 3, 4, 5];

const arIterator = ar.keys();

console.log(arIterator.next());
console.log(arIterator.next());
console.log(arIterator.next());
console.log(arIterator.next());
console.log(arIterator.next());
console.log(arIterator.next());

const arIterator2 = ar.values();

console.log('\n', arIterator2.next());
console.log(arIterator2.next());
console.log(arIterator2.next());
console.log(arIterator2.next());
console.log(arIterator2.next());
console.log(arIterator2.next());
