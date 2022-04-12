function myFunc (a){

    let unique = [...new Set(a)];

    for (let u of unique){    
        
        let hasMoreThanOne = 0;
        
        for(let arr of a){
            
            if(u === arr){
                hasMoreThanOne++;
            }
        }

        if(hasMoreThanOne === 1){
            return u;
        }
    }
}

console.log(myFunc([1, 1, 2]));
console.log(myFunc([1, 1, 11, 2, 5, 2, 4, 5, 4]));
console.log(myFunc([0, 0, 1, 2, 1]));
console.log(myFunc([1]));