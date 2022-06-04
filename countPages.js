function countPages(n,p){
	         
    if(p === 1 || p === n || (p === n-1 && n % 2 !== 0)){
        return 0;
    }else if(p >= n/2 && n-p > 1){        
        return parseInt((n-p)/2);
    }else if(p < n/2){
        return parseInt(p/2);
    }else{
        return 1;
    }
}

console.log(countPages(1,1));//0
console.log(countPages(2,1));//0
console.log(countPages(9,5));//2
console.log(countPages(12,10));//1
console.log(countPages(12,11));//1
console.log(countPages(12,12));//0
console.log(countPages(5,4));//0
console.log(countPages(15600,1560));//780
console.log(countPages(6,5));//1
