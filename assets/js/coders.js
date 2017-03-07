function mostrarDatos(){
	var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

	var mostrar = "<ul>";
	coders.forEach(function(e){
		mostrar += "<div class = 'div-coder'><li> Nombre: "+e.nombre+"<br /></li>"+
				   "<li>Apellido: "+e.apellido+"<br /></li>"+
				   "<li>Promoción: "+e.promocion+"<br /></li>"+
				   "<li>Estado: "+e.estado+"<br /></li></div>";
	});
	mostrar += "</ul>";
	document.write(mostrar);
}
mostrarDatos();
