function matchingStrings(strings, queries) {
    
    let howMany = [];
    
    for(let elem in queries){
        let count = 0;
        
        for(let str in strings){
            if(queries[elem] === strings[str]){
                count++;
            }
        }
        howMany.push(count);
    }
    return howMany;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));


