
-Que significa this y sus usos en JS-

this es una palabra clave en Javascript que confunde tanto a novatos como a veteranos sin disinción.
Se usa la palabra this de una forma similar a el uso de pronombres en lenguajes neutrales tales como el inglés y el francés.

"Juan está corriendo rápido porque él está tratando de llegar a clase a tiempo"

Nosotros utilizamos la palabra "él", de igual forma pudimos escribir "Juan está corriendo rápido porque Juan está tratando de llegar a clase a tiempo".
Pero normalmente uno no haría esto, resultaría redundante y tedioso.
De forma similar en Javascript nosotros utilizamos la palabra clave "this" como un atajo, un referente; se refiere a un objeto siendo este, el sujeto 
en contexto, o el sujeto a la hora de ejecutar el código.
Considera el siguiente ejemplo:

 var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        /* Date cuenta como usamos "this" de la misma forma 
        que utilizamos "él" en el ejemplo anterior*/
        console.log(this.firstName + " " + this.lastName);
    ​// De la misma forma pudimos haber escrito esa última sentencia como:
        console.log(person.firstName + " " + person.lastName);
    }	
}
De esta forma nos damos cuenta cómo en este ejemplo la palabra this y la palabra person son intercambiables
Si nosotros escribimos person.firstName y person.lastName el código se vuelve ambiguo.Podría interrumpir en el buen funcionamiento del mismo ya que 
puede o no haber una variable global con el nombre "person".
Convirtiendo person.firstName en un intento por obtener el atributo firstName de la imaginaria variable global "person".
Es así como usamos this no solo con fines estéticos, si no mayormente para no sacrificar presición, su uso hace al código menos ambiguo
de la misma forma que el pronombre "él" lo hace en el enunciado.

De la misma forma que el pronombre "él" es usado para referirse al sujeto que antecede, el this es usado de forma similar para referise al
objeto que se encuentra ligado la función seleccionada.
Es así como el this no solo se refiere al objeto en si, si no también al valor del mismo.
De la misma manera que un pronombre, this puede ser entendido como una abreviación o un semi substituto para referirse al objeto dentro de  contexto.
Más adelante aprenderemos más sobre el contexto.

-this como palabra clave-

Primero que nada, tienes que saber que todas las funciones en Javascript tienen propiedades, de la misma forma en la que los objetos tienen propiedades.
Y cuando una función es ejecutada, esta obtiene la propiedad this. Una variable con el valor de un objeto que invoca la función  donde this es usado.
El uso de this SIEMPRE se refiere [y obtiene el valor de] un objeto-en singular- y es usado usualmente dentro de la función o el metodo, aún que pueda utilizarse
fuera de una función de forma global. 
Cabe notar que cuando usamos el modo estricto, this mantiene el valor de undefined en funciones globales y en funciones anonimas que no están atadas a ningún
objeto.

this es usado dentro de una función [poniendo un ejemplo, a la function A(){};] y esta contiene el valor del objeto que invoca la función A. Necesitaríamos this
 para accesar a metodos y propiedades del objeto que invoca la función A especialmente dado que nosostros no siempre sabemos el nombre del objeto que a invocar,
 y aveces no hay un nombre que usar para referirse al objeto.
 De esta forma this realmente funciona como una referencia abreviada a "el objeto que lo antecede".

 Aquí otro ejemplo ilustrando el uso de this en Javascript.

 	var person = {
    firstName   :"Pancho",
    lastName    :"López",
    //Ya que "this" es usado dentro del metodo showFullName de abajo, y como el método showFullName es definido en el objeto person ​
    // "this" va a tener el valor del objeto (variable) person por que el objeto person llama showFullame()
    showFullName:function () {
    console.log (this.firstName + " " + this.lastName);
    }
​	//se sigue viendo como abreviación, en lugar de poner 
	//console.log (person.firstName + " " + person.lastName);
    }
​
    person.showFullName (); // Se imprime en la consola :"Pancho López"


