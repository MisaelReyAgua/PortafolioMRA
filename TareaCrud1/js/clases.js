// se va a crear un molde para la gift card
// como la clase la voy a ocupar en app se ocupa export
export class Gift{
    // Se llama a la función constructura que sirve para construir todos los elementos
    constructor(id,gift,tipo,tiempo,precio,imagen){
        this.id = id;
        this.gift = gift;
        this.tipo = tipo;
        this.tiempo = tiempo;
        this.precio = precio;
        this.imagen = imagen;
        
        
    }
}