function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
      return [];
    }else{
      let myRangeArray = rangeOfNumbers(startNum, endNum - 1);
      myRangeArray.push(endNum);
      return myRangeArray;
    }
  };

  console.log(rangeOfNumbers(1,5))
  