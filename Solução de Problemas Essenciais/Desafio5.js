var stopped = 0;
var list = [];

while (stopped !== 1 ) {
  var jewel = gets();
  if (jewel === "") {
      stopped = 1;
  } else {
      list.push(jewel); 
  }    
}
let kinds = new Set(list); //Remove repeated ones
let kindsJewel = [...kinds];
console.log(kindsJewel.length);
