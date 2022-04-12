function flippingBit(n){

    let firstBinary = '0'.repeat(32).slice(n.toString(2).length) + n.toString(2);
    let secondBinary = firstBinary.replace(/1/g, "2").replace(/0/g, "1").replace(/2/g, "0");
    return parseInt(secondBinary.toString(), 2);
}


function binario(nr){
    let s = nr.toString(2);
    return '0'.repeat(32).slice(s.length) + s;
}

console.log(binario(1));  // 00000001


let f = (binario(1)).replaceAll("1", "2").replaceAll("0", "1").replaceAll("2", "0");

console.log(f);
console.log(parseInt(f.toString(), 2));
console.log(flippingBit(1));