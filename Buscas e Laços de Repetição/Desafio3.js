let wineKind = gets();
let winner = 0;
gets().split(' ').forEach(item => {if (item == wineKind) winner++;});
console.log(winner);