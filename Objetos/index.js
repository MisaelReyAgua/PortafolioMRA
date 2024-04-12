// Un Crud son las siglas de las operaciones basicas, create, read, update, delete
const objeto = {};
// Se declara el objeto
const persona = {
    // Atributos
    nombre: 'Jesus',
    apellidos: 'Pérez',
    edad: 15,
    // Metodos
    saludar: function(){
        return 'Hola,soy ' + this.nombre;
    }
}
// Se manda a llamar al metodo con .saludar()
console.log(persona.saludar());

const persona2 = {
    // Atributos
    nombre: 'Pepe',
    apellidos: 'Pecas',
    edad: 25,
    // Metodos
    saludar: function(){
        return 'Hola,soy ' + this.nombre;
    }
}
// Se crea un array de obejetos
let personas = [persona,persona2];
// Se imprime el Array
console.log(personas[0]);
// Se imprime el Array con la función
console.log(personas[0].saludar());
// Se imprime el Array con el atributo
console.log(personas[0].apellidos);

// Se hace el llenado de la tabla con un for
let tabla = '';
// Se modifica el atributo de nombre del objeto 
persona.nombre = 'Pablo';
for(let i = 0; i < personas.length; i++){
    tabla += '<tr><td>'+(i+1)+'</td><td>'
    +personas[i].nombre+'</td><td>'
    +personas[i].apellidos+'</td><td>'
    +personas[i].edad+'</td></tr>';
}
document.getElementById('tabla').innerHTML = tabla;