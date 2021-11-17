function procesar(){
	alert("Procesando datos ");
	var elem_nombre= document.getElementById("nombre");
	var elem_anioNac= document.getElementById("anionac");
	var elem_edad= document.getElementById("edad");
	
	var edad= 2021 - elem_anioNac.value;
	alert(elem_nombre.value + " - "+ edad);
	crearMens(elem_nombre.value, edad);
	elem_edad.value=edad;
}
function crearMens(nombrePara, edadPara){
	var elem_div= document.getElementById("mens");	
	var mensaje="<p>Nombre:"+ nombrePara+"</p>"+
		"<p>Edad:"+edadPara+"</p>";
	elem_div.innerHTML= mensaje;
}

function limpiar(){
	alert("Limpiando datos..");
}