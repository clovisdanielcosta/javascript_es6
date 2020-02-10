'use strict';

function Animal(qtdepPatas) {
    this.qtdepPatas = qtdepPatas;
    this.movimenta = function(){}
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function () {
        console.log('Au! Au!');
    }
    
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
console.log(pug);
console.log(pitbull);

