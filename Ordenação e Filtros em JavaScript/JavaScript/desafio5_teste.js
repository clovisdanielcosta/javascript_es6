let N1 = '3';

let arr1 = [
    'Fernanda 7',
    'Fernando 9',
    'Gustavo 11'
] 
/*Saída esperada*/
let s1 = 'Vencedor(a): Fernanda'


let N2 = '5';

let arr2 = [
    'Maria 7',
    'Pedro 9',
    'Joao_Vitor 5',
    'Isabel 12',
    'Laura 8',
]

/*Saída esperada*/
let s2 = 'Vencedor(a): Pedro'


let N3 = '3';

let arr3 = [
        'Maria 4',
        'Pedro 3',
        'Joao 2'
]

/*Saída esperada*/
let s3 = 'Vencedor(a): Pedro'


let N4 = '7';

let arr4 = [
        "Gustavo 2",
        "Fernando 8",
        "Fernanda 2",
        "João 7",
        "Mario 3",
        "Jessilda 6",
        "Cremilda 4"
    ];
/*Saída esperada*/
let s4 = 'Vencedor(a): João'



function game(N, arr, ret) {

let cases = parseInt(N); //Recebe quantidade de casos

console.log(cases);

let students = [];

for (let i = 0; i < cases; i++){
    let arriving = arr[i];
    let nameNumber = arriving.split(" ");
    let name = nameNumber[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let number = parseInt(nameNumber[1]);
    
    students.push({ name, number });   
}

let circleNumber = students[0].number;
students.reverse();

console.log('\n ==================================');
console.log(students);
console.log(' ==================================');
console.log('\n ');

let target;
let rounds = 0;

while (students.length !== 1)  {
    
    let newCircle = [];
    
    if (circleNumber % 2 === 0) {
        
        for (let i = 0 ; i < circleNumber; i++) {
            
            if (rounds === 0) target = 0;
            if (target >= students.length) target = 0;
            console.log(circleNumber + " - Par - Índice do For: " + i + ' Target: ' + target);
            newCircle[i] = students[target];
            console.log(newCircle[i]);
            rounds++;

            if (i === circleNumber - 1 
                && newCircle[newCircle.length - 1].number % 2 === 0) {
                    target;
                } else if (i === circleNumber - 1 
                    && newCircle[newCircle.length - 1].number % 2 !== 0) {
                        target--;
                    } else {
                        target++;
                    }
                            
            console.log('Target: ' + target);           
            }
            console.log('Students.length: ' + students.length);
        } else {
        
        for (let i = 0 ; i < circleNumber; i++) {
            
            if (rounds === 0) target = students.length - 2;
            if (target < 0) target = students.length - 1;
            console.log(circleNumber + " - Ímpar - Índice do For: " + i + ' Target: ' + target);
            newCircle[i] = students[target];
            console.log(newCircle[i]);
            rounds++;
            
            if (i === circleNumber - 1 
                && newCircle[newCircle.length - 1].number % 2 === 0) {
                    target;
                } else {
                        target--;
                    }

            console.log('Target: ' + target);
        }
    }

    circleNumber = newCircle[newCircle.length - 1].number;
    //Retira do círculo
    let index = students.indexOf(newCircle[newCircle.length - 1]);
    console.log('\n------------------------------------------');
    console.log(`Saiu: ${students[index].name}.` );
    console.log('------------------------------------------\n');
    students.splice(index,1);
            
}

console.log(students.length);
console.log(`Vencedor(a): ${students[students.length - 1].name}`);
console.log(`Vencedor(a): ${ret}`);

} 


(function startGame (){
    setTimeout(function() {
        game(N1, arr1, s1);
        
        setTimeout(function() {
            game(N2, arr2, s2);
            
            setTimeout(function() {
                game(N3, arr3, s3);

                setTimeout(function() {
                    game(N4, arr4, s4);
               
  
                }, 3000);

            }, 3000);
        
        }, 3000);
    
    }, 3000);
    
})();


