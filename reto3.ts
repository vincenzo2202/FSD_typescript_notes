class Electrodomesticos {
    private precioBase: number;
    private color: string;
    public consumoEnergetico: string;
    public peso: number;

    constructor(precioBase: number = 100, color: string = "Blanco", consumoEnergetico: string = "F", peso: number = 5) {
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso
    } 

    getPrecioBase(): void {
        console.log(this.precioBase);
    }

    getColor(): void {
        console.log(this.color);
    }

    getConsumoEnegetico(): void {
        console.log(this.consumoEnergetico);
    }

    getPeso(): void {
        console.log(this.peso);
    }

    setPrecioBase(precioBase: number): number {
        this.precioBase = precioBase;
        return precioBase
    };

    setColor(color: string): string {
        this.color = color;
        return color
    };

    setConsumoEnergetico(consumoEnergetico: string): string {
        this.consumoEnergetico = consumoEnergetico
        return consumoEnergetico
    };

    setPeso(peso: number): number {
        this.peso = peso
        return peso
    };

    comprobarConsumoEnergetico(consumo: string): string {
        const letrasValidas: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
        if (letrasValidas.indexOf(consumo.toUpperCase()) !== -1) {
            return consumo.toUpperCase();
        } else {
            console.log('Consumo energético no válido');
            return consumo.toUpperCase();
        }
    }

    comprobarColor(color: string): string {
        const coloresValidos: string[] = ["blanco", "negro", "rojo", "azul", "gris"]
        if (coloresValidos.indexOf(color.toLowerCase()) !== -1) {
            return color.toLowerCase()
        } else {
            console.log("Este color no es valido");
            return color.toLowerCase()
        }
    }

    precioFinal(consumoEnergetico: string, peso: number): number | void {
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
        let precio = 0
        if (consumoEnergetico.toUpperCase() === 'A') {
            precio = 100
        } else if (consumoEnergetico.toUpperCase() === 'B') {
            precio = 80
        } else if (consumoEnergetico.toUpperCase() === 'C') {
            precio = 60
        } else if (consumoEnergetico.toUpperCase() === 'D') {
            precio = 50
        } else if (consumoEnergetico.toUpperCase() === 'E') {
            precio = 30
        } else if (consumoEnergetico.toUpperCase() === 'F') {
            precio = 10
        } else {
            console.log("Cosumo energético no valido");
        }
        if (typeof (peso) === "number") {
            if (peso >= 0 && peso <= 19) {
                precio += 10
            } else if (peso >= 20 && peso <= 49) {
                precio += 50
            } else if (peso >= 50 && peso <= 79) {
                precio += 80
            } else if (peso >= 80) {
                precio += 100
            }
            return precio
        } else {
            console.log("Peso no es un número, introduce uno correcto");
        }
    }
};

class Lavadora extends Electrodomesticos {
    private carga;
    private precioFin;

    constructor(precioBase: number = 100, color: string = "Blanco", consumoEnergetico: string = "F", peso: number = 5, carga: number = 5, precioFin: number = 0) {
        super(precioBase, color, consumoEnergetico, peso)
        this.carga = carga;
        this.precioFin = precioFin;
    }

    getCarga(): void {
        console.log(this.carga);
    }; 

    precioFinal(consumoEnergetico: string, peso: number): number | void {
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
        if (consumoEnergetico.toUpperCase() === 'A') {
            this.precioFin = 100
        } else if (consumoEnergetico.toUpperCase() === 'B') {
            this.precioFin = 80
        } else if (consumoEnergetico.toUpperCase() === 'C') {
            this.precioFin = 60
        } else if (consumoEnergetico.toUpperCase() === 'D') {
            this.precioFin = 50
        } else if (consumoEnergetico.toUpperCase() === 'E') {
            this.precioFin = 30
        } else if (consumoEnergetico.toUpperCase() === 'F') {
            this.precioFin = 10
        } else {
            console.log("Cosumo energético no valido");
        }
        if (typeof (peso) === "number") {
            if (peso >= 0 && peso <= 19) {
                this.precioFin += 10
            } else if (peso >= 20 && peso <= 49) {
                this.precioFin += 50
            } else if (peso >= 50 && peso <= 79) {
                this.precioFin += 80
            } else if (peso >= 80) {
                this.precioFin += 100
            }

        } else {
            console.log("Peso no es un número, introduce uno correcto");
        }
        if (typeof (peso) === "number") {
            if (peso > 30) {
                this.precioFin += 50
                return this.precioFin
            }
        } else {
        }
    }
}; 

class Television extends Electrodomesticos {
    private resolucion;
    private _4k;
    private precioFinTv;
    constructor(precioBase: number = 100, color: string = "Blanco", consumoEnergetico: string = "F", peso: number = 5, resolucion: number = 20, _4K: boolean = false, precioFinTv: number) {
        super(precioBase, color, consumoEnergetico, peso)
        this.resolucion = resolucion;
        this._4k = _4K;
        this.precioFinTv = precioFinTv
    }

    getResolucion(): void {
        console.log(this.resolucion + "pulgadas");
    }

    get_4k(): void {
        console.log(this._4k);
    }

    precioFinal(consumoEnergetico: string, peso: number): number | void {
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
        if (consumoEnergetico.toUpperCase() === 'A') {
            this.precioFinTv = 100
        } else if (consumoEnergetico.toUpperCase() === 'B') {
            this.precioFinTv = 80
        } else if (consumoEnergetico.toUpperCase() === 'C') {
            this.precioFinTv = 60
        } else if (consumoEnergetico.toUpperCase() === 'D') {
            this.precioFinTv = 50
        } else if (consumoEnergetico.toUpperCase() === 'E') {
            this.precioFinTv = 30
        } else if (consumoEnergetico.toUpperCase() === 'F') {
            this.precioFinTv = 10
        } else {
            console.log("Cosumo energético no valido");
        }
        if (typeof (peso) === "number") {
            if (peso >= 0 && peso <= 19) {
                this.precioFinTv += 10
            } else if (peso >= 20 && peso <= 49) {
                this.precioFinTv += 50
            } else if (peso >= 50 && peso <= 79) {
                this.precioFinTv += 80
            } else if (peso >= 80) {
                this.precioFinTv += 100
            }
        } else {
            console.log("Peso no es un número, introduce uno correcto");
        }

        if (this.resolucion > 40) {
            this.precioFinTv *= 1.30
        }
        if (this._4k == true) {
            this.precioFinTv += 50
        }
        return this.precioFinTv
    }

    setResolucion(resolucion: number) {
        this.resolucion = resolucion;
        return resolucion;
    };

    set_4k(_4k: boolean) {
        this._4k = _4k;
        return _4k;
    }; 
    
} 
const samsung = new Television(1100, "negro", "A", 100, 1000, true, 0);
samsung.precioFinal("A", 100);
console.log(samsung.precioFinal("A", 100));
samsung.set_4k(false);
samsung.setResolucion(30);
console.log(samsung.precioFinal("A", 100)); 
// const haier = new Lavadora()
// haier.precioFinal("A", 55) 
// console.log(haier); 
