const user = {
    name: 'Clovis',
    lastName: 'Costa'
};

const features = {
    age: 47,
    religion: 'JW'
};

// Recupera as chaves do objeto
console.log('\nRecupera as chaves ou propriedades objeto:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nRecupera os valores das chaves do objeto:', Object.values(user));

// Retorna um Array de Arrays contendo (nome_prop, valor_prop)
console.log('\nLista de propriedades de valores', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Clovis Daniel Costa'});
console.log('\nAdiciona a propriedade fullName ao objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', 
            Object.assign({}, user, {age: 47}));

console.log('\nRetorna um novo objeto mergeando dois ou mais objetos \
Outro exemplo:', 
Object.assign({}, user, features));

// Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
console.log('\nVariável newObj após alterações (estando congelado)', newObj);

delete newObj.foo;
console.log('\nTentativa de deletar uma propriedade num objeto congelado', newObj);

// Permite a alteração de propriedades existentes em um objeto

const person = {name: 'Clovis'};
Object.seal(person);
console.log('\nVariável person', person);
person.name = 'Clovis Daniel';
console.log('\nVariável person após alterações', person);
delete person.name;
console.log('\nVariável person após deleção', person);
person.age = 26;
console.log('\nVariável person após alterações', person);
















