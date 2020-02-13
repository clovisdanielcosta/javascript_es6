const students = [
    {
        name: "Grace",
        grade: 8
    },
    {
        name: "Jenifer",
        grade: 4
    },
    {
        name: "Paul",
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log("Alunos Aprovados:");
console.log(getApprovedStudents(students));

console.log("\nLista de alunos:");
console.log(students);