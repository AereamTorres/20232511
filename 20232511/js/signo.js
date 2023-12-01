// Este codigo ha sido generado por el modulo psexport 20230113-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function signo() {
	var numero01;
	document.write("ingresar un número (puede ser positivio o negativo):", '<BR/>');
	numero01 = prompt();
	if (numero01>=0) {
		document.write(("el numero ingresado es positivo"), '<BR/>');
	} else {
		document.write(("El numero ingresado es negativo"), '<BR/>');
	}
}

