function twoArrays(k, A, B) {
    
      let relationEqualOrGreaterThanK = 0;
      
      for(let i in A){

            let sumAB = A[i]+B[i];

            if(sumAB >= k){
              relationEqualOrGreaterThanK++;
            }
      }
      return (relationEqualOrGreaterThanK > 0)? "YES" : "NO";
  }

let k = 10;
let A = [2,1,3];
let B = [7,8,9];

console.log(twoArrays(k, A, B));

k = 5;
A = [1,2,2,1];
B = [3,3,3,4];

console.log(twoArrays(k, A, B));