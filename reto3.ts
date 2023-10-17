class Electrodomesticos {
    private precioBase: string;
    private color: string;
    private consumoEnergetico: string;
    private peso: number;

    constructor(precioBase: string = "100€", color: string = "Blanco", consumoEnergetico: string = "F", peso: number = 5) {
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

    setPrecioBase(precioBase: string): string {
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

    comprobarConsumoEnergetico(consumo: string) {
        const letrasValidas: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
        if (letrasValidas.indexOf(consumo.toUpperCase()) !== -1) {
            return consumo.toUpperCase();
        } else {
            console.log('Consumo energético no válido');
            return consumo.toUpperCase();
        }
    }
    comprobarColor(color: string) {
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
 
class Lavadora extends Electrodomesticos{
    private carga;
    private motor;

    constructor (precioBase: string = "100€", color: string = "Blanco", consumoEnergetico: string = "F", peso: number = 5, carga: number = 5, motor:object){ 
        super(precioBase, color, consumoEnergetico, peso)
        this.carga = carga;
        this.motor = motor;
    } 
}

















// ----------- Prueba de Clases con objetos dentro-
// class Motor {
//     private name;
//     private potencia; 
//     constructor(name:string,potencia:number){
//         this.name = name;
//         this.potencia = potencia; 
//     }
// }

// const motor = new Motor("Ford", 500); 
// const motor2 = new Motor("renault", 90); 
// const motor3 = new Motor("Chevrolet", 50); 

// const lavadora = new Lavadora("150€", "gris", "A", 10, 10, motor3);
// console.log(lavadora);

// ----------------
