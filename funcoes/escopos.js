// Escopo Global
var varGlobal = "Esta variável é visível a todos,fica fora dos blocos, \
na raiz do código. Detalhe importante: o identificador var não respeita \
o escopo de bloco, só global e de função. Os identificadores let e const respeitam";

// Escopo de Bloco
{
    var varDeBloco = "Visível dentro das chaves";
}

// Escopo de Função
function escopoDeFuncao () {
    var varDeFuncao = "Esta é visível dentro da função.";
}
