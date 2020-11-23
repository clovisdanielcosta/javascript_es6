let toStop = 0; // Flag to break

while (toStop !== 1) { // Awaiting end of gets()
  let getTemp = String.raw`${gets()}`.split('\\').join('#') //Take of escapes
    // Validating entries    
    .replace(/([\u0300-\u036f]|[^a-zA-Z\_\*\s\,\;\.\!\?\-\(\)\à\á\ã\é\ê\ó\ô\õ\í\ú\ç])/g, '');
  (getTemp !== '') ? shortcuts(getTemp) : toStop = 1; // Call main function    
}

function shortcuts(getTemp) {
  
  let strInitial = getTemp, 
      strMiddle ='', strFinal = '',
      charUnderl = strInitial.replace(/[^_]/g, "").length, // Count underlines    
      charAsteri = strInitial.replace(/[^*]/g, "").length; // Count asteriks
      
  if (charAsteri === 0 && charUnderl === 0) {
  
    console.log(strInitial); // If there wasn't keep original text.
    
  } else {
    
    for (let i = 0; i < charUnderl/2; i++){ // Replacing '_'
            strMiddle = strInitial.toString().replace("_", "<i>");
            strFinal = strMiddle.toString().replace("_", "</i>");
            strInitial = strFinal; // Keep changes to next For
    }

    for (let i = 0; i < charAsteri; i++){ // Replacing '*'
            strMiddle = strInitial.toString().replace("*", "<b>");
            strFinal = strMiddle.toString().replace("*", "</b>");
            strInitial = strFinal; // Keep changes to next For
    }   
    console.log(strFinal); // Results
  }   
}