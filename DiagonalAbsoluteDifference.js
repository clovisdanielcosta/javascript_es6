function diagonalDifference(arr){

    let sumFirstDiagonalRow = arr[0][0];							
							
    for(let i = 1;  i < arr.length; i++){							
        
        let  arrRowLength =  arr[i].length;
        let IndexValue = arr[i][i];
        
        if(arrRowLength  > i){					
            sumFirstDiagonalRow += IndexValue;				
        }											
    }							

    arr.reverse();

    let sumSecondDiagonalRow = arr[0][0];

    for(let i = 1;  i < arr.length; i++){							
        
        let  arrRowLength =  arr[i].length;
        let IndexValue = arr[i][i];
        
        if(arrRowLength  > i){					
            sumSecondDiagonalRow += IndexValue;				
        }											
    }							

    return Math.abs(sumFirstDiagonalRow - sumSecondDiagonalRow);
}

let arr2 = [[11, 2, 4,  6], [4, 5, 6], [10, 8,-12]]; 

console.log(diagonalDifference(arr2));

// console.log(sumFirstDiagonalRow);
// console.log(sumSecondDiagonalRow);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);