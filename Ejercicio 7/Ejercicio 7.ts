class Persona{  /*se declara una clase con 2 atributos uno de tipo number y otro de tipo String */
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){  /*se define el constructor que toma 2 parámetros dentro del mismo se asigna el valor de los mismos  */
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){ /*se define un método que imprime por consola los valores de los atributos de la clase */
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`);
    }
}

let persona1:Persona; /*se declara una variable de tipo Persona */
persona1 = new Persona("Juan", 25);/*se instancia un objeto de tipo Persona y se le asigna a la variable persona1 */
persona1.imprimir();/*se llama al método imprimir del objeto persona1 */

