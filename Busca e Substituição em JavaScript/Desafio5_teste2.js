let arriving = [
    'Você _deveria_ ver /a foca <no *zoologico!*',
    'Marque a conta e peça *a receber* para *paga*.',
    '_ _ __ _ yabba, dabba _ * dooooo * ****',
    ''
    ]
let toBreak = 0;

while (toBreak !== 1) {
    for (let i = 0; i < arriving.length; i++) {

        let getTemp = String.raw`${arriving[i]}`.split('\\').join('#')
            .replace(/([\u0300-\u036f]|[^a-zA-Z\_\*\s\,\;\.\!\?\-\(\)\à\á\ã\é\ê\ó\ô\õ\í\ú\ç])/g, '');
         
        (getTemp !== '') ? shortcuts(getTemp) : toBreak = 1;     
    }    
}

function shortcuts(getTemp) {
 
    let str = '', ch = '', italic = 0, bold = 0;

    for (let i = 0; i < getTemp.length; i++){ 

        if(getTemp[i] === '*'){
                if(bold === 0){
                            ch = "<b>";
                            bold = 1;
                }
                else {
                    ch = "</b>";
                     bold = 0;
                }
        }else if(getTemp[i] === '_'){
                if(italic === 0){
                            ch = "<i>";
                            italic = 1;
                }
                else {
                    ch = "</i>";
                     italic = 0;
                }
        }else{
                ch = getTemp[i];
        }
        str = str + ch;
    }
    console.log(str);
}