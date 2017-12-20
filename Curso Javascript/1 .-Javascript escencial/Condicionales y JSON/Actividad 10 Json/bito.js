var miJSON = [
{
	"codigo": "001",
	"nombre": "Cálculo"
},{
	"codigo": "002",
	"nombre": "Física"	
},{
	"codigo": "003",
	"nombre": "Algoritmo"
}
];

function leerJSON(json){

	var out="";
	var i;
	for (i=0;i<json.length;i++) {
		alert("codigo:"+json[i].codigo+"-"+"nombre:"+json[i].nombre);
	}
}
leerJSON(miJSON);