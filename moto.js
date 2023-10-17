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
var Vehiculos = /** @class */ (function () {
    function Vehiculos(nombre, velocidad) {
        this.nombre = nombre;
        this.velocidad = velocidad;
    }
    Vehiculos.prototype.getVelocidad = function () {
        console.log(this.velocidad);
    };
    Vehiculos.prototype.acelerar = function () {
        return this.velocidad += 20;
    };
    return Vehiculos;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(nombre, velocidad, ruedas, marca, modelo) {
        if (nombre === void 0) { nombre = "pepito"; }
        if (velocidad === void 0) { velocidad = 0; }
        if (ruedas === void 0) { ruedas = 2; }
        var _this = _super.call(this, nombre, velocidad) || this;
        _this.ruedas = ruedas;
        _this.marca = marca;
        _this.modelo = modelo;
        return _this;
    }
    Moto.prototype.getMarca = function () {
        console.log(this.marca);
    };
    Moto.prototype.setMarca = function (marca) {
        this.marca = marca;
        return marca;
    };
    Moto.prototype.acelerar = function () {
        return this.velocidad += 30;
    };
    Moto.prototype.frenar = function () {
        return this.velocidad -= 20;
    };
    return Moto;
}(Vehiculos));
;
var BMW = new Vehiculos("andres", 0);
BMW.acelerar();
console.log(BMW);
var ducati = new Moto("Ducati", 100, 2, "yamaha", "d350");
ducati.acelerar();
ducati.setMarca("mi verdadera moto");
console.log(ducati);
