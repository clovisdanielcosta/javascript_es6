function countdown(n){
    if(n < 1){
      return [];
    }else{
        let myArray = countdown (n - 1);
        myArray.unshift(n);
        return myArray;
    }
  }

  console.log(countdown(10));