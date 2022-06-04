function caesarCypher(s,k){

  let newCypher="";    
  let alphabet = "abcdefghijklmnopqrstuvwxyz";  
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
  
  for(let c in s){  
                    
    let position = alphabet.indexOf(s[c].toLowerCase());
    let positionUpper = alphabetUpper.indexOf(s[c]);
    
    if(position !== -1){ 
      
      let diff = k - parseInt(k/26)*26;
      let newPosition = position + k; 
     
      if(position + diff <= 25){
        newPosition = position + diff;
      }else{
        newPosition = Math.abs(26 - diff - position);
      }

      if(positionUpper === -1){
        newCypher += alphabet[newPosition];
      }else{
        newCypher += alphabetUpper[newPosition];
      }
    } else { 
      newCypher += s[c];
    }
  }
  
  return newCypher;
}

let s = "middle-Outz"; 
let k = 2;
let result = "okffng-Qwvb";
console.log(caesarCypher(s,k));

s = "Ciphering."; 
k = 26;
result = "Ciphering.";
console.log(caesarCypher(s,k));

s = "www.abc.xy"; 
k = 87;
result = "fff.jkl.gh";
console.log(caesarCypher(s,k));

s = "159357lcfd"; 
k = 98;
result = "159357fwzx";
console.log(caesarCypher(s,k));

s = "!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U"; 
k = 62;
result = "!w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E";
console.log(caesarCypher(s,k));

s = "DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy."; 
k = 45;
result = "WGYcqh?u5a*5<EPuzl6?O5{3F].1aZ)io1OPj4(!][WS3Z)kbLC.VfNc9]7Zse?OrxC2wBIXP4ZRP*lvM8(oan9pVk]j!7xrthr.";
console.log(caesarCypher(s,k));

s = "1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M"; 
k = 27;
result = "1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N";
console.log(caesarCypher(s,k));


