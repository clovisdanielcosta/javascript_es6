const myNumber = 12.4032;

//Transformar número em String
const numberAsString = myNumber.toString();
console.log("Número transformado em String:", numberAsString, typeof numberAsString );

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("Número com duas casas decimais: ", fixedTwoDecimals);

//Transforma uma String em Float
console.log("String parseada para Float:", parseFloat("13.20"), typeof parseFloat("13.20"));
    // Se precisar de duas casas no parseloat quando a String vem com zero no final
    console.log("String parseada para Float com 2 casas:", parseFloat("13.20").toFixed(2), typeof parseFloat("13.20"));

//Transforma uma String em um Int
console.log("String parseada para Int:", parseInt("13.20"), typeof parseInt("13.20"));