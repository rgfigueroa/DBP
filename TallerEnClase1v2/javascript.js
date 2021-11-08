function presentar(){
	alert('Esto es javascript presentar()');
}

presentarDos = () => {
	document.getElementById('demo').innerHTML = Date();
	var texto1 = document.getElementById("caja").value;
	var texto = document.getElementsByName("btnEnviar");
	alert('Esto es javascript PresentarDos() ' + texto1);
	console.log(texto[0].tagName); 
	console.log('Mensaje 5A');	
	//Cambiar color con JS.
	document.getElementById("boton").style.backgroundColor= "red";
}
