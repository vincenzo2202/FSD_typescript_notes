/*Haz una clase llamada Persona que siga las siguientes condiciones:
● Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
● Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo
(0 números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una
constante para ello.
● Instancia al menos tres objetos.*/


class Persona { 
    constructor(nombre = "", edad = 0 , dni, sexo = "H", peso = 0, altura = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
};

const pepito = new Persona("Vincenzo", 19, "2342342F", "H");

const pepito2 = new Persona("Andres", 23, "72490743S");

const pruebaSin = new Persona;


console.log(pepito);
console.log(pepito2);
console.log(pruebaSin);