//######################################
//###### AINDA EM DESENVOLVIMENTO ######
//######################################

let ab = gets().split(' ');
let a = parseInt(ab[0]);
let b = parseInt(ab[1]);
let q = a / b;
let r = a % b;
let r2;

if (r < 0) {
 r2 = r + (b * -1);  
 q = (a - r2) / b;
 r = r2;
}

console.log(parseInt(q), parseInt(r));

