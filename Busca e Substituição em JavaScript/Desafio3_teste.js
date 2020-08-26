let password = 'AcD/',
    upperCaseTest = password.toLocaleLowerCase(),
    lowerCaseTest = password.toLocaleUpperCase(), 
    numberTest = password.match(/(\d)/i),
    specialCharTest = password.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
    lenghtTest = password.length >= 6;

    //Log Results to Test
    (password !== upperCaseTest) ? console.log('0 - Has UpperCase') : console.log('1 - Has\'nt UpperCase');
    (password !== lowerCaseTest) ? console.log('0 - Has LowerCase') : console.log('1 - Has\'nt LowerCase');
    (password === specialCharTest) ? console.log('0 - Has\'nt Special Character') : console.log('1 - Has Special Character');
    (numberTest) ? console.log('0 - Has Number') : console.log('1 - Has\'nt Number');
    (lenghtTest) ? console.log('0 - Has Length > 6') : console.log('1 - Has\'nt Length >= 6');
    console.log(password);
    console.log(specialCharTest);
    console.log('\n ');
    (password !== upperCaseTest) &&
    (password !== lowerCaseTest) && 
    (password === specialCharTest) && 
    (numberTest) &&
    (lenghtTest) ? console.log(0) : console.log(1);
    
