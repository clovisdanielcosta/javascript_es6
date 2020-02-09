const users = ['Guilherme', 'Pedro', 'Jenifer'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Pedro',
    age: 43,
    gender: gender.MAN
  },
  {
    name: 'Jenifer',
    age: 18,
    gender: gender.WOMAN
  }
];

// Retornar a quantidade de itens de array
console.log('Itens:', persons.length);

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens do Array
persons.forEach(persons => {
  console.log(`Nome: ${persons.name}`);
});

// Iterar os itens do Array
persons.forEach((persons, index, arr) => {
  console.log(`Nome: ${persons.name}, Index: ${index}`, arr);
});

// Filtrar array
const mens = persons.filter(persons => persons.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retorna um novo
const personsWinthCourse = persons.map(person => {
  person.course = 'Introdução ao JavaScript';
  return person;
});

console.log('\nPessoas com adição de curso:', personsWinthCourse);

// Transforma um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons
                         .filter(person => person.age %2 === 0)
                         .reduce((age, person) => {
                           age += person.age;
                           return age;
                         }, 0);

console.log('\nSoma das idades das pessoas que possuim idade par:', totalEvenAges);
