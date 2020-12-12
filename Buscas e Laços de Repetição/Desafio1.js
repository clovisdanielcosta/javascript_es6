let numbersStudents = parseInt(gets());
let studentId = 'Minimum note not reached';
let score = 8;

for (i = 0; i < numbersStudents; i++ ) {
      let studentsScore = gets().split(' ');
      if(parseFloat(studentsScore[1]) >= parseFloat(score)) {
        studentId = studentsScore[0];
        score = parseFloat(studentsScore[1]).toFixed(1);
      }
}

console.log(studentId);