// Retorna o tamanho de uma variável
const textSize = "Texto".length;
console.log(`Quantidade de letras é: ${textSize}`);

// Retorna uma array quebrando uma String por um limitador
const spplitedText = "Texto".split('x');
console.log("\nArray com as posições separadas \
pelo delimitador:", spplitedText);

// Busca por um valor e substitui por outro
const replacedText = "Texto".replace("Text", "txeT");
console.log("\nSubstituição de text:", replacedText);

//DETALHE: Slice passa começo e final. Se omitir o final ele
// vai até o final. O Substr passa começo e posição após o começo. 
// Retorna a "fatia" de um valor
const lastChar = "Texto".slice(-1);
console.log("\nÚltima letra de uma String:", lastChar);

const allWithoutlastChar = "Texto".slice(0,-1);
console.log("\nÚltima letra de uma String:", allWithoutlastChar);

const secondToEnd = "Texto".slice(1);
console.log("\nValor da String da segunda letra até o final:" , secondToEnd);

const twoCharsBeforeFirstPosition = "Texto".substr(0, 2);
console.log("\nAs duas primeiras letras são:", twoCharsBeforeFirstPosition);
