const students = [
    {name: 'Jonah', grade: 5, age: 18},
    {name: 'Marie', grade: 7, age: 22},
    {name: 'Alice', grade: 6, age: 17},
    {name: 'Peter', grade: 8, age: 16}
];
//Total das notas
console.log(students.reduce ((totalGrades, student) =>
            totalGrades += student.grade, 0));

//Média das notas
console.log(students.reduce ((totalGrades, student) =>
            totalGrades += student.grade, 0)/ students.length);

//Total notas alunos menores de idade
const total = students.reduce((totalGrades, student) => {
    if (student.age > 17 && student.age < 22){
       totalGrades += student.grade
    }
    return totalGrades       
}, 0)

console.log(total);

//Somatório das notas e somatório das idades no mesmo return
const totalAll = students.reduce((total, student) => {
    return {
        totalGrade: total.totalGrade + student.grade,
        totalAge: total.totalAge + student.age
    }

}, { totalGrade: 0, totalAge:0 })

console.log(totalAll);


//Usando um desvio condicional simples
const totalGradesGreatherThanFive = students.reduce((total, student) => {
    if (student.grade <= 5) return total
    
    return total + student.grade
},0)

console.log(totalGradesGreatherThanFive);

//Mesmo exemplo usando Filter()
const gTFive = students.filter((student) => {
    return student.grade > 5
})

console.log(gTFive);

const totalGradesGreatherThanFive2 = gTFive.reduce((total, student) => {
    return total + student.grade
},0)

console.log(totalGradesGreatherThanFive2);

//Encadeando Filter e Reduce
const totalGradesGreatherThanFive3 = students
.filter((student) => {
    return student.grade > 5
})
.reduce((total, student) => {
    return total + student.grade
},0)

console.log(totalGradesGreatherThanFive3);




const myValues = [70, 67, 77, 99, 23, '23']

const onlyPositives = myValues.reduce((total, myValue) => {
  if (myValue >= 0 && myValue !== null) return total + 1

  return total
}, 0)

console.log(`${onlyPositives} números positivos.`);


const numbers2 = [70, 67, 77, 99, 23, 1]
let positives2 = 0

for (let i = 0; i <= numbers2.length; i++) {
    if (parseInt(numbers2[i]) >= 0) {
        positives2 += 1
    }
}

console.log(`${positives2} valores positivos`);





//Desafio 1

const numbers = [70, -67, 77, -99, 23, 1]

const positives = numbers.reduce((totalPositives, number) => {
    if (number >= 0 ){
       totalPositives += 1
    }
    return totalPositives       
}, 0)

console.log(positives);
