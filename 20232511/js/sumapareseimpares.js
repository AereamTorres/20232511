// Este codigo ha sido generado por el modulo psexport 20230113-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sumapareseimpares() {
	var i, suma_impar, suma_par;
	i = 1;
	suma_par = 0;
	suma_impar = 0;
	while (i<101) {
		if (i%2==0) {
			suma_par = suma_par+i;
		} else {
			suma_impar = suma_impar+i;
		}
		i = i+1;
	}
	document.write("La suma de los primeros 100 numeros pares es...", '<BR/>');
	document.write(suma_par, '<BR/>');
	document.write("La suma de los primeros 100 numeros impares es..", '<BR/>');
	document.write(suma_impar, '<BR/>');
}

