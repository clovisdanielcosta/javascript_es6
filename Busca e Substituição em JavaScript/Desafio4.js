let cases = parseInt(gets());
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

for (let i = 0; i < cases; i++){
  
    let arriving = gets().split(' ');
    Fernanda = arriving[0], 
    Marcia = arriving[1], 
    round = hands.indexOf(`${Fernanda} ${Marcia}`);
    
    if (Fernanda === Marcia) round = 'E'; 
     
    (round >= 0) ? console.log('fernanda') : 
    (round < 0) ? console.log('marcia') : console.log('empate'); 
}