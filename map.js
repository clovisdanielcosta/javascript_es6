// Retorna um novo array, de mesmo tamanho, iterando cada item do array.

    const ar = [1, 2, 3, 4, 5];
    var br = "";

    br = ar.map((ar, index) => `${ar * 2} - ${index}`)

    console.log(br);