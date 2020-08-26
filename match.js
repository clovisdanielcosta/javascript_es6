const ar = ['a', 2, ' ', '/'];

const arTest = ar.toString();
let foundLetters = arTest.match(/([a-z])/);
let foundDigits = arTest.match(/(\d)/);
let foundSpaces = arTest.match(/ /);
let foundSpecials = arTest.match(/[\u0300-\u036f]/);


(foundLetters) ? console.log('Found Letters'): console.log('Not Found Letters');
(foundDigits) ? console.log('Found Digits'): console.log('Not Found Digits');
(foundSpaces) ? console.log('Found Spaces'): console.log('Not Found Spaces');
(foundSpecials) ? console.log('Found Specials'): console.log('Not Found Specials');


