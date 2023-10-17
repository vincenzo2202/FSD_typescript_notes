class Person {
    nombre;
    edad;
    dni;
    sexo;
    peso;
    altura;

    constructor(nombre:string, edad:number, dni:string, sexo:string, peso:number, altura:number) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}; 

const pepita = new Person("Vincenzo", 19, "2342342F", "H", 10 , 50);

const pepita2 = new Person("Andres", 23, "72490743S", "H", 10 , 50);

const maria = new Person("Bienve", 22, "65556556d","M", 10, 10);

console.log(maria.nombre);
 
 
 