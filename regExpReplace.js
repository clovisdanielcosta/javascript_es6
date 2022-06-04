function caesarCypher(s,k){

  s = s.toLowerCase(); 
  
  let alphabet = [...new Set("abcdefghijklmnopqrstuvxwxyz")];
  let sFiltered = [...new Set(s.replace(/[^a-z]/gi,""))];  
  sFiltered.sort().reverse();
  
  for(let letter of sFiltered){
    
     let regExp = new RegExp(letter, 'g');
     let position = alphabet.indexOf(letter)+k;
    
     if(position > 26){
        position = Math.abs(position-26);
     }
     
     s = s.replace(regExp, alphabet[position]);
  }
  return s;
}

let s = "My strings";
let k = 7;

console.log(caesarCypher(s,k));