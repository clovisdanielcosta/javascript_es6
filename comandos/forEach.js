const ar = [1, 2, 3, 4, 5];

ar.forEach ((value, index) => {
    console.log(`${index} : ${value}`);
    
});

ar.forEach((arr, index) => console.log(index, arr));

ar.forEach((ar, index, arr) => console.log(index, ar, arr));