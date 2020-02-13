const students = [
    {name: 'Jonah', grade: 5},
    {name: 'Marie', grade: 7},
    {name: 'Alice', grade: 6},
    {name: 'Peter', grade: 8}
];
//Total das notas
console.log(students.reduce ((totalGrades, student) =>
            totalGrades += student.grade, 0));

//Média das notas
console.log(students.reduce ((totalGrades, student) =>
            totalGrades += student.grade, 0)/ students.length);