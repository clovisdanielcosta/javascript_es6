function bloqueiaEspeciais(e) {
	//Bloqueia os caracteres acentuados e especiais
	if (!e) e = event;
	if (e.keyCode) {
		//IE
		tecla = e.keyCode;
	} else {
		//Firefox
		tecla = e.which;
	}
	if ((tecla >= 65 && tecla <= 90) || 
		(tecla >= 97 && tecla <= 122) ||
		(tecla >= 48 && tecla <= 57) ||
		(tecla == 46)) {
		//Não bloqueia
    } else {
		//Bloqueia
       	if (e.keyCode) {
          	e.returnValue = false;
        } else {
          	e.preventDefault();
        }
   	}
}