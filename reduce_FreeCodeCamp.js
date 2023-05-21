const users = [
      { name: 'Marie', age: 25 },
      { name: 'Ken', age: 22 },
      { name: 'Sara', age: 29 },
      { name: 'Geoff', age: 30 },
    ];
    
    const reducer = (total, currentUser) => {
        console.log('current total:', total);
        console.log('currentUser:', currentUser);
        
        // just for spacing
        console.log('\n');
        
        return total + currentUser.age;
    }
    
   // users.reduce(reducer, 0);

    let ages = [{ age: 1 }, { age: 2 }, { age: 3 }];

    let sumOfAges = ages.reduce((total, obj) => total + obj.age, 0);

    console.log(sumOfAges);
    let stop = "";
    