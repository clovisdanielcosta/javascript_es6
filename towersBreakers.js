function towersBreakers(expected,n,m){
	 
	if(n % 2 === 0 || m === 1){
		return  2;
    	}else{
		return 1;
	}
}

console.log(towersBreakers(1,7));
console.log(towersBreakers(3,7));
console.log("");
console.log(towersBreakers(2,2));
console.log(towersBreakers(1,4));

