
var respuestas =[['a','b','c'],['a','b','b']];
var form1 = document.getElementById('1');
var form2 = document.getElementById('2');
var records1 = document.getElementById('records');
var records2 = document.getElementById('records2');
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
function login(){
	var nombre = "";
	do{
		sessionStorage.getItem("Nombre");
		nombre = prompt("Cual es Nombre");
		document.getElementById('nombre').innerHTML = "Hola coder "+ nombre;
		document.body.style.display = "block";
		sessionStorage.setItem("Nombre", nombre);
	}
	while(nombre == "");
}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.addEventListener('load',function() {
	login();
});

function validar(sprint){
	var correctas = 0;
	var respuesta = [];
	var k = 0;
	var test ;
	var radios = document.getElementsByClassName(sprint);

	for (var i = 0 ; i < radios.length; i++) {
		if(radios[i].checked){
			k += 1;
		}
	}
	console.log(k);
	/*if(k != 3){
		//alert("Marque una respuesta en la pregunta");
	}
	else if(k == 3){*/
	for (var i = 0 ; i < radios.length; i++) {
		if(radios[i].checked == true ){
			respuesta.push(radios[i].id);
		}
	}
	console.log(respuesta);
	if(sprint == "1"){
		test = respuestas[0];
	}
	if(sprint == "2"){
		test = respuestas[1];
	}
	for (var i = 0 ; i < test.length; i++) {
		if(respuesta[i] === test[i]){
			correctas ++;
		}
	}
	records1.innerHTML = "Tienes "+ correctas + " correctas";
	records2.innerHTML = "Tienes "+ correctas + " correctas";
	limpiar(sprint);
	console.log(correctas);
	//}
	//correctas = 0;
}
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function limpiar(quiz){
	var radios  = document.getElementsByClassName(quiz);
	form1.style.display = "none";
	form2.style.display = "none"
	console.log(form1);
	for (var i = 0 ; i < radios.length ; i++) {
		radios[i].checked = false;
	}

}

var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	records1.innerHTML ="";
	records2.innerHTML = "";
	form1.style.display = "block";
	form2.style.display = "block"
	if (divtext.id == "text1" ) {
		divtext.style.display = "block";
		text2.style.display = "none";
		text3.style.display = "none"
	}else if(divtext.id == "text2" ) {
		divtext.style.display = "block";
		text1.style.display = "none";
		text3.style.display = "none"
	}
	else {
		divtext.style.display = "block";
		text1.style.display = "none";
		text2.style.display = "none"
	}
 
}