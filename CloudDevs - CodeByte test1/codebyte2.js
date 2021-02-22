const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';

  resp.on('data', (added) => {
    data += added;
  });
  
  resp.on('end', () => {
    console.log(JSON.stringify(data));
    let lines = (JSON.stringify(data));
    let numbersGreatherThanFifty = 0;
    let splitLines = lines.split(',');
    
    for ( i = 0; i < splitLines.length; i++){

      let line = splitLines[i].replace(' ', '').substr(0, 4); 
      let lineAge = parseInt(splitLines[i].replace(' ', '').substr(4));
      
      if ( line === 'age=' && (lineAge >=50)) numbersGreatherThanFifty++;
          
    }
      console.log(numbersGreatherThanFifty);
  });
});