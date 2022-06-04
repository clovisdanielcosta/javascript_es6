function maxMinUnfairness(k, arr){

      arr.sort((a,b)=> a-b);

      let minUnfairness = 0;
      let i = 0;

      while(i <= arr.length - k){

            // let myArr = [];
            
            // for(let j = i; j < i + k; j++){
            //       if(j < arr.length){
            //             myArr.push(arr[j]);
            //       }
            // }

            //let unfairness = myArr[k-1] - myArr[0];
            let unfairness = arr[i + k-1] - arr[i];
            
            if(unfairness < minUnfairness || minUnfairness === 0)
            {
                  minUnfairness = unfairness;
            }

            i++;
      }

      return minUnfairness;
}

let k = 4;
let arr = [1,2,3,4,10,20,30,40,100,200];
console.log(maxMinUnfairness(k,arr));

k = 5;
arr = [4504,1520,5857,4094,4157,3902,822,6643,2422,7288,8245,9948,2822,1784,7802,3142,9739,5629,5413,7232];
console.log(maxMinUnfairness(k,arr));

k = 25;
arr = [
1399,
6925,
3074,
6733,
6608,
6919,
8712,
8438,
8221,
3352,
8493,
1417,
2157,
1798,
7964,
5543,
2924,
9261,
5280,
781,
8314,
7891,
5900,
4578,
1908,
1593,
7272,
7497,
9059,
8763,
7724,
6810,
2040,
7150,
3543,
8648,
421,
8607,
3438,
8642,
8311,
8284,
6412,
468,
6434,
728,
2363,
9359,
9989,
7643,
6492,
4656,
5535,
2393,
9234,
7443,
3986,
6506,
1292,
9397,
1621,
9016,
6207,
3661,
2518,
6102,
8661,
9291,
4709,
2100,
7934,
3020,
384,
698,
9840,
6818,
1426,
2204,
2529,
1416,
9847,
9022,
6072,
5382,
1415,
1658,
9178,
1753,
8164,
470,
1151,
6137,
5839,
3710,
9798,
8357,
9813,
4811,
7649,
874];
console.log(maxMinUnfairness(k,arr));

k = 3;
arr = [
100,
200,
300,
350,
400,
401,
402];
console.log(maxMinUnfairness(k,arr));