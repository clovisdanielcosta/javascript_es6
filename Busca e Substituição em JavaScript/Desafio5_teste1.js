let arriving2 = [
    'Você _deveria_ ver *a* foca *no* <i>zoológico!</i>',
    'Marque <b>a</b> conta e 2peça *a receber* 1para *paga*.',
    ' Você deveria...#$%¨¨&123456',
    '_ _ __ _ yabba, dabba _ * dooooo * ****',
    '12345',
    '123aB',
    'Baú &&dA12/3',
    '&&&',
    'Dedé Mariá Não Tó Vô Vê pé è itajaí <HTML>',
    '`~!@#$%^&*()_|+\-=?;:\'\",.<>{}[] /',
    'Play Kate Wallace',
    ''
    ]
let toBreak = 0, arriving = [];

while (toBreak !== 1) {
    for (let i = 0; i < arriving2.length; i++) {
        let getTemp = String.raw`${arriving2[i]}`.split('\\').join('#')
        .replace(/([\u0300-\u036f]|[^a-zA-Z\_\*\s\,\;\.\!\?\-\(\)\à\á\ã\é\ê\ó\ô\õ\í\ú\ç])/g, '');
        (getTemp !== '') ? arriving.push(getTemp) : toBreak = 1;     
   }    
}
console.log(arriving2.length);
console.log(arriving.length);

for (let i = 0; i < arriving.length; i++) {
    let strInitial = arriving[i]
    ,
        strMiddle ='', strFinal = '';
    let charAsteri = arriving[i].replace(/[^*]/g, "").length;
    let charUnderl = arriving[i].replace(/[^_]/g, "").length;
    
    if (charAsteri === 0 && charUnderl === 0) {
    
        console.log(i + strInitial);
    
    } else {
        for (let i = 0; i < charAsteri; i++){
                strMiddle = strInitial.toString().replace("*", "<b>");
                strFinal = strMiddle.toString().replace("*", "</b>");
                strInitial = strFinal;
        }

        for (let i = 0; i < charUnderl/2; i++){
                strMiddle = strInitial.toString().replace("_", "<i>");
                strFinal = strMiddle.toString().replace("_", "</i>");
                strInitial = strFinal;
        }
        console.log(i + strFinal);
    }   
}