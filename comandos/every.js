const students = [
    {name: 'Jonah', grade: 5},
    {name: 'Marie', grade: 7},
    {name: 'Alice', grade: 6},
    {name: 'Peter', grade: 8}
];

const hasAllApproved5 = students.every (student => student.grade >= 7);

console.log(hasAllApproved5);
