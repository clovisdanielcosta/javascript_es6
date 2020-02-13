const ar = [1, 3, 3, 4, 5];

const hasSomeEvenNumber = ar.some(value => value % 2 === 0);

console.log(hasSomeEvenNumber);

const students = [
    {name: 'Jonah', grade: 5},
    {name: 'Marie', grade: 7},
    {name: 'Alice', grade: 6},
    {name: 'Peter', grade: 8}
];

const hasSomeGradeApproved = students.some (student => student.grade >= 7);

console.log(hasSomeGradeApproved);

const hasSomeGradeApproved2 = students.find (student => student.grade >= 7);

console.log(hasSomeGradeApproved2);

const indexSomeGradeApproved3 = students.findIndex (student => student.grade >= 7);

console.log(indexSomeGradeApproved3);

const hasAllApproved5 = students.every (student => student.grade >= 7);

console.log(hasAllApproved5);
