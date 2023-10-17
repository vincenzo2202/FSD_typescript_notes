class Vehiculos {
    private nombre;
    public velocidad;

    constructor(nombre: string, velocidad: number) {
        this.nombre = nombre;
        this.velocidad = velocidad;
    }

    getVelocidad(): void {
        console.log(this.velocidad);
    }

    acelerar(): number {
        return this.velocidad += 20
    }
}


class Moto extends Vehiculos implements Chichonicle {
    private ruedas;
    public marca;
    public modelo; 
    constructor(nombre: string = "pepito", velocidad: number = 0, ruedas: number = 2, marca:string, modelo:string) {
        super(nombre, velocidad)
        this.ruedas = ruedas;
        this.marca = marca
        this.modelo = modelo
    }

    getMarca():void{
        console.log(this.marca);
    } 

    setMarca(marca:string):string{
        this.marca = marca  
        return marca
    }

    acelerar(): number {
        return this.velocidad += 30
    }
    
    frenar():number{
        return this.velocidad -= 20         
    } 
}


interface Chichonicle {
    marca: string;
    modelo: string;
    velocidad: number; 
    frenar(): number 
};

const BMW = new Vehiculos("andres", 0);
BMW.acelerar();
console.log(BMW);



const ducati = new Moto("Ducati", 100, 2, "yamaha", "d350");
ducati.acelerar();
ducati.setMarca("mi verdadera moto")
console.log(ducati);


