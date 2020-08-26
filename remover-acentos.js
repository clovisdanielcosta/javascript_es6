const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç';
const parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
console.log(parsed);

// Acentos e caracteres especiais
const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345';
const parsed = str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
console.log(parsed);