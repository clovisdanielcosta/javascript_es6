function multiply(arr, num){
    let product = 1;
    for(let i = 0; i < num; i++){
          product *= arr[i];
    }
    return console.log(product);
  }
  
  multiply([1,2,3,4,5], 5);

  // Recursive
  function multiply2(arr, n){
      if(n <= 0){
                return 1;
      }else{
            return multiply2(arr, n - 1) * arr[n - 1];
      }
    }
    
    var result = multiply2([1,2,3,4,5], 5);
    console.log(result);