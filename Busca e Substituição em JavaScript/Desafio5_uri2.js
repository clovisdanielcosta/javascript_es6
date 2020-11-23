let texto = ' ', s='', c='',
i = 0,
negrito = 0,
italico = 0;

while(texto != ''){
    texto = 'Você _deveria_ ver a foca no *zoológico!*';
        for (let i = 0; i < texto.length; i++){ 

            if(texto[i] === '*'){
                    if(negrito === 0){
                                c = "<b>";
                                negrito = 1;
                    }
                    else {
                        c = "</b>";
                            negrito = 0;
                    }
            }else if(texto[i] === '_'){
                    if(italico === 0){
                                c = "<i>";
                                italico = 1;
                    }
                    else {
                        c = "</i>";
                            italico = 0;
                    }
            }else{
                    c = texto[i];
            }
            s = s + c;
        }
        console.log(s);
        texto = '';
}
