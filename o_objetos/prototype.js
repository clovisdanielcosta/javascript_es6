'use strict';

const myText = String('Hello Prototype"');

console.log(myText.__proto__.split === String.prototype.split);

console.log(myText.constructor === String);

