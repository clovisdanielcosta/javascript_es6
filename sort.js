const students = [
    {name: 'Jonah', grade: 5},
    {name: 'Marie', grade: 7},
    {name: 'Alice', grade: 6},
    {name: 'Peter', grade: 8}
];
// Ascendente
console.log(students.sort ((current, next) => current.grade - next.grade));

//Descendente
console.log(students.sort ((current, next) => next.grade - current.grade));