// s = array of integers
// d = birthday's day
// m birthday's month
// The challenge is find how many ways could I sum a segment of elements (a sub array of s) that is equal to 'd' and 
// which length is equal to 'm'

function birthdayChocolate(s, d, m){

      let howManyWays = 0;
      let i = 0;

      while(i + m <= s.length){
            
            let sumOfSegment = 0;

            for(j = i; j < i+m; j++){
                  sumOfSegment += s[j];
            }

            if(sumOfSegment == d){
                  howManyWays++;     
            }
            i++;
      }

      

      return howManyWays;
}

function birthday(s, d, m) {
    
      let howManyWays = 0;
      let i = 0;
      
      while(i + m <= s.length){
          
          let sumOfSegment = 0;
          
          for(let j = i; j < i + m; j++){
              sumOfSegment += s[j];
          }
          
          if(sumOfSegment == d){
              howManyWays++;
          }
          
          i++;
      }
      return howManyWays;
  }

let arr = [1,2,1,3,2];
let d = 3;
let m = 2;

console.log(birthdayChocolate(arr, d, m));

let arr2 = [4];
let d2 = 4;
let m2 = 1;

console.log(birthday(arr2, d2, m2));