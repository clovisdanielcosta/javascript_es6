function pangrams(s){

    s = s.replace(/[^a-zA-Z]/gi, '').toLowerCase();
    s = [...new Set(s)];
    return (s.length == 26) ? "pangram" : "not pangram";
}

console.log(pangrams("We wpromptly judgeéd antiquàe ivory buckles for the next prize"));
console.log(pangrams("We promptly judged antique ivory buckles for the prize"));
