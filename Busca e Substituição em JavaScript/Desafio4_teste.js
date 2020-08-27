let cases = parseInt(3);



let hands = [
    'tesoura papel',
    'papel pedra',
    'pedra lagarto',
    'lagarto spock',
    'spock tesoura',
    'tesoura lagarto',
    'lagarto papel',
    'papel spock',
    'spock pedra',
    'pedra tesoura'
];

let arriving = 'tesoura papel'.split(' ');
    Fernanda = arriving[0], 
    Marcia = arriving[1], 
    round = hands.indexOf(`${Fernanda} ${Marcia}`);
    
    if (Fernanda === Marcia) round = 'E'; 
     
    (round >= 0) ? console.log('fernanda') : 
    (round < 0) ? console.log('marcia') : console.log('empate'); 