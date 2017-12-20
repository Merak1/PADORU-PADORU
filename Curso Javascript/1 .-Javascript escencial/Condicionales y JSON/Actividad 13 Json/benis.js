
            var personas = [

                {
                    "nombre": "Roman Gomez",
                    "edad": 35
                }, {
                    "nombre": "Mario Perez",
                    "edad": 39
                }, {
                    "nombre": "Ramiro Lopez",
                    "edad": 45
                }, {
                    "nombre": "Juan Gonzalez",
                    "edad": 25
                }, {
                    "nombre": "Gustavo Pua",
                    "edad": 32
                }, {
                    "nombre": "Marlene Morales",
                    "edad": 39
                }, {
                    "nombre": "Ivan Diaz",
                    "edad": 41
                }, {
                    "nombre": "Calrlos Hernandez",
                    "edad": 15
                }, {
                    "nombre": "Jorge Julio",
                    "edad": 18
                }, {
                    "nombre": "Carmen Manrrique",
                    "edad": 48
                }, {
                    "nombre": "Miguel Rosado",
                    "edad": 29

                }

            ];

        function leerJSON(json) {
            var out = "-----------Personas-----------<br>";
            var i;
            for (i = 0; i < json.length; i++) {
                out += "Nombre:" + json[i].nombre + "-" + "edad:" + json[i].edad + "<br>";
            }
            document.getElementById("estudiantes").innerHTML = out;
        }

        function calcularEdadMayor(json) {
            var out = "-----------Edad Mayor-----------<br>";
            var edadMayor = json[0].edad;
            var pos = 0;
            var aux = "";
            for (i = 0; i < json.length; i++) {

                if (json[i].edad >= 18) {
                    edadMayor = json[i].edad;
                    pos = i;
                    aux=aux+json[pos].nombre+"<br>";
                }
            }
            document.getElementById("edadMayor").innerHTML = "Las personas con mayoría de edad son: " + aux;
        }

        function mostrarPersonas() {
            leerJSON(personas);
        }

        function mostrarEdadMayor() {
            calcularEdadMayor(personas);
        }

        