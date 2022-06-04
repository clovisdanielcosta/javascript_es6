
function sockMerchant(n,ar){
      
  let arUnique = [...new Set(ar)];
  let sockPairs = 0;

  for(let u of arUnique){
      
     let pairs = 0;
 
     for(let a of ar){

         if(u === a){
           pairs++;
         }
     }

     if(pairs >= 2){
      sockPairs += Math.floor(pairs/2); 
     }
  }
     return sockPairs;
}

let n = 9;
let arr = [10,20,10,30,10,50,30];

console.log(sockMerchant(n,arr));rr = [10,20,10,30,10,50,30];


