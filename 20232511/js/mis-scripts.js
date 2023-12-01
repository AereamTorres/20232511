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
	alert("la suma de los numeros impares es: "+suma_impar)
	alert("la suma de los numeros pares es: "+suma_par)
}