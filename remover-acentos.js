// Removendo acentos e cedilha
const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç';
const parsed = str.normalize('NFD').replace(/([\u0300-\u036f])/g, '');
//console.log(parsed);

// Acentos e caracteres especiais
const str1 = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345';
const parsed1 = str1.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\ê])/g, '');
//console.log(parsed1);

let str2 = String.raw`Você entra em c:\deste.x é pàra Tó "Marque"! *paga*.<b><\b>/ 123 _\*\s\,\;\.\!\?\-\(\)`;
const test3 = str2.normalize('NFD')
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\_\*\s\,\;\.\!\?\-\(\)\à\á\è\é\ò\ó\ê\ô\ã\ù\ú\ì\í])/g, '');
const test4 = str2.split('@@@@@@@@');
const test11 = test4[0]
.replace(/([\u0300-\u036f]|[^a-zA-Z\_\*\s\,\;\.\!\?\-\(\)\àáãèéêìíòóôùú])/g, '');
console.log(str2);
console.log(test4);

let str5 = String.raw`Você  *paga*.<b><\b>/ 123 _\*\s\,\;\.\!\?\-\(\)`.split('\\').join('#').replace(/([\u0300-\u036f]|[^a-zA-Z\_\*\s\,\;\.\!\?\-\(\)\àáãèéêìíòóôùú])/g, '');
console.log(str5);

console.log(decodeURIComponent(escape(str2)));

var fixedstring;

try{
    // If the string is UTF-8, this will work and not throw an error.
    fixedstring=decodeURIComponent(escape(badstring));
}catch(e){
    // If it isn't, an error will be thrown, and we can assume that we have an ISO string.
    fixedstring=badstring;
}
//let str14 = str2.replace(/[\\]/g, escape)
//console.log(str14);
//var regex = escape(str2);
//console.log(test11);
//var str6 = str2.split('@@@@@@@@');
//var str7 = str6[0] + '@' + str6[1];
//Mostrar os escapes
//escape(str2);
//console.log(str2);
//console.log(str6);
//console.log(str7);





        