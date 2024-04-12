export class Persona{
    //Atributos y metodos
    nombre = '';
    apellidos = '';
    peso = '';
    altura = '';
    // el metodo constructor sirve para inicializar variables
    constructor(nom,ape,pe,al){
        // el this hace referencia a la misma clase de persona que se esta creando
        this.nombre = nom;
        this.apellidos = ape;
        this.peso = pe;
        this.altura= al; 
    }

    saludar(){
        return 'Hola, soy ' + this.nombre + " "+ this.apellidos;
    }

    imc(){
        return (this.peso/(this.altura*this.altura));
    }
}