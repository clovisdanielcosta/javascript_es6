const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';

  resp.on('data', (added) => data += added);
  resp.on('end', () => {
      let numbersGreatherThanFifty = 0;
      let jdata = JSON.parse(data                       
                    .replace('"data"', "'data'")
                    .replace(/"key=/, "[{'key':'")
                    .replace(/, key=/gi, "},{'key':'")
                    .replace(/"/gi, "}]")
                    .replace(/, age=/gi, "','age':")
                    .replace("'data'", '"data"')
                    .replace(/'/gi, '"')
                    );
    
    for ( i = 0; i < jdata.data.length; i++){
      if ( jdata.data[i].age >=50) numbersGreatherThanFifty++;
    }
    console.log(numbersGreatherThanFifty);
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});