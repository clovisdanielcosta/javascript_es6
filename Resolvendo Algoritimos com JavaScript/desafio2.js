
let arr1 = ("abcdef abc abc abcdef abc abcdef abc").toString();
let arr2 = (arr1).split(" ");
let lenghtest = arr2[0];
let abb = "";
let cont = 0;

for (i = 0; i < arr2.lenght; i++) {
    if (arr2[i+1] > arr2[i]) {
        lenghtest = arr2[i+1];
    }
}

abb = lenghtest.substring(0,1)+ ".";

for (i =0; i < arr1.length; i++) {
    if (arr2[i] === lenghtest) cont++;
    arr1 = arr1.replace(lenghtest, abb);
}

console.log(arr1);
console.log(`${abb} = ${lenghtest}`);
console.log(cont);


