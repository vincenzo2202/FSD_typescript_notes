var Person = /** @class */ (function () {
    function Person(nombre, edad, dni, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    return Person;
}());
;
var pepita = new Person("Vincenzo", 19, "2342342F", "H", 10, 50);
var pepita2 = new Person("Andres", 23, "72490743S", "H", 10, 50);
var maria = new Person("Bienve", 22, "65556556d", "M", 10, 10);
console.log(maria.nombre);
