class Password {
    constructor(longitud = 8, contraseña) {
        this.longitud = longitud;
        this.contraseña = contraseña;
    }
    generarContraseña() { 
       let array = [];
       for (let i=0;i<this.longitud; i++){
        array.push(Math.floor(Math.random() * 10)) 
     }
     let arrayString = array.join(''); 
      this.contraseña = arrayString
    }
}; 

const cliente = new Password (10, 654654)// creo el objeto
console.log(cliente);
cliente.generarContraseña()
console.log(cliente); 
cliente.generarContraseña()
console.log(cliente);

