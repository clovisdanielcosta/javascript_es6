let user = {
    name: 'Clovis'
};

console.log(user);
// Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';
console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

// Criando uma propriedade
user.lastName = 'Daniel Costa';
console.log(user);
console.log("");

// Deletando uma propriedade
delete user.name;
console.log(user);
console.log("");

// Criando uma propriedade
user.middleName = 'Daniel Costa';
console.log(user);

