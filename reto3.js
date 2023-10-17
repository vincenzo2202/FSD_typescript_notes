var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Electrodomesticos = /** @class */ (function () {
    function Electrodomesticos(precioBase, color, consumoEnergetico, peso) {
        if (precioBase === void 0) { precioBase = "100€"; }
        if (color === void 0) { color = "Blanco"; }
        if (consumoEnergetico === void 0) { consumoEnergetico = "F"; }
        if (peso === void 0) { peso = 5; }
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
    }
    Electrodomesticos.prototype.getPrecioBase = function () {
        console.log(this.precioBase);
    };
    Electrodomesticos.prototype.getColor = function () {
        console.log(this.color);
    };
    Electrodomesticos.prototype.getConsumoEnegetico = function () {
        console.log(this.consumoEnergetico);
    };
    Electrodomesticos.prototype.getPeso = function () {
        console.log(this.peso);
    };
    Electrodomesticos.prototype.setPrecioBase = function (precioBase) {
        this.precioBase = precioBase;
        return precioBase;
    };
    ;
    Electrodomesticos.prototype.setColor = function (color) {
        this.color = color;
        return color;
    };
    ;
    Electrodomesticos.prototype.setConsumoEnergetico = function (consumoEnergetico) {
        this.consumoEnergetico = consumoEnergetico;
        return consumoEnergetico;
    };
    ;
    Electrodomesticos.prototype.setPeso = function (peso) {
        this.peso = peso;
        return peso;
    };
    ;
    Electrodomesticos.prototype.comprobarConsumoEnergetico = function (consumo) {
        var letrasValidas = ['A', 'B', 'C', 'D', 'E', 'F'];
        if (letrasValidas.indexOf(consumo.toUpperCase()) !== -1) {
            return consumo.toUpperCase();
        }
        else {
            console.log('Consumo energético no válido');
            return consumo.toUpperCase();
        }
    };
    Electrodomesticos.prototype.comprobarColor = function (color) {
        var coloresValidos = ["blanco", "negro", "rojo", "azul", "gris"];
        if (coloresValidos.indexOf(color.toLowerCase()) !== -1) {
            return color.toLowerCase();
        }
        else {
            console.log("Este color no es valido");
            return color.toLowerCase();
        }
    };
    Electrodomesticos.prototype.precioFinal = function (consumoEnergetico, peso) {
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
        var precio = 0;
        if (consumoEnergetico.toUpperCase() === 'A') {
            precio = 100;
        }
        else if (consumoEnergetico.toUpperCase() === 'B') {
            precio = 80;
        }
        else if (consumoEnergetico.toUpperCase() === 'C') {
            precio = 60;
        }
        else if (consumoEnergetico.toUpperCase() === 'D') {
            precio = 50;
        }
        else if (consumoEnergetico.toUpperCase() === 'E') {
            precio = 30;
        }
        else if (consumoEnergetico.toUpperCase() === 'F') {
            precio = 10;
        }
        else {
            console.log("Cosumo energético no valido");
        }
        if (typeof (peso) === "number") {
            if (peso >= 0 && peso <= 19) {
                precio += 10;
            }
            else if (peso >= 20 && peso <= 49) {
                precio += 50;
            }
            else if (peso >= 50 && peso <= 79) {
                precio += 80;
            }
            else if (peso >= 80) {
                precio += 100;
            }
            return precio;
        }
        else {
            console.log("Peso no es un número, introduce uno correcto");
        }
    };
    return Electrodomesticos;
}());
;
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(precioBase, color, consumoEnergetico, peso, carga, motor) {
        if (precioBase === void 0) { precioBase = "100€"; }
        if (color === void 0) { color = "Blanco"; }
        if (consumoEnergetico === void 0) { consumoEnergetico = "F"; }
        if (peso === void 0) { peso = 5; }
        if (carga === void 0) { carga = 5; }
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this.carga = carga;
        _this.motor = motor;
        return _this;
    }
    return Lavadora;
}(Electrodomesticos));
var Motor = /** @class */ (function () {
    function Motor(name, potencia) {
        this.name = name;
        this.potencia = potencia;
    }
    return Motor;
}());
var motor = new Motor("Ford", 500);
var motor2 = new Motor("renault", 90);
var motor3 = new Motor("Chevrolet", 50);
var lavadora = new Lavadora("150€", "gris", "A", 10, 10, motor3);
console.log(lavadora);
