// Se importa la clase Gift
import {Gift} from "./clases.js"
import {cargaDeDatos} from "./funciones.js"
let datos = [];
// Se obtiene el cuerpo de la tabla
const cuerpoTabla = document.querySelector("#cuerpo-tabla");
//Modal de bootstrap
const myModal = new bootstrap.Modal(document.getElementById('modalGift'))

let idGiftUpdate = null;

window.mostrarModal = (id) => {
    idGiftUpdate = id;
    let index = datos.findIndex((item)=> item.id==id);
    // obtenemos la posicion del arreglo y le asignamos los datos al modal
    document.querySelector('#giftModal').value = datos[index].gift;
    document.querySelector('#tipoModal').value = datos[index].tipo;
    document.querySelector('#tiempoModal').value = datos[index].tiempo;
    document.querySelector('#precioModal').value = datos[index].precio;
    document.querySelector('#imagenModal').value = datos[index].imagen;
    myModal.show()
}

const giftUpdate = (e)=>{
    e.preventDefault()
    let index = datos.findIndex((item)=> item.id==idGiftUpdate);
    datos[index].gift =  document.querySelector('#giftModal').value
    datos[index].tipo = document.querySelector('#tipoModal').value
    datos[index].tiempo = document.querySelector('#tiempoModal').value
    datos[index].precio = document.querySelector('#precioModal').value
    datos[index].imagen = document.querySelector('#imagenModal').value
    localStorage.setItem('datos',JSON.stringify(datos));
    cargarTabla();
    myModal.hide();
}


// creamos una funcion para cargar la tabla
const cargarTabla = ()=>{
    datos = JSON.parse(localStorage.getItem("datos"));
    cuerpoTabla.innerHTML = '';
    datos.map((item)=>{
        const fila = document.createElement('tr')
        const celdas = `<th>${item.gift}</th>
        <td>${item.tipo}</td>
        <td>${item.tiempo}</td>
        <td>$${item.precio}</td>
        <td>
        <div class="d-flex gap-2">
        <button class="btn btn-outline-warning" onclick="mostrarModal(${item.id})"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button class="btn btn-outline-danger" onclick="borrarGift(${item.id})"><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
        </td>`;
        fila.innerHTML=celdas;
        cuerpoTabla.append(fila);
    })
}

// Creamos la funcion para agregar
const agregarGift=(event)=>{
    event.preventDefault();
    // obtenemos la posicion del id del arreglo
    let id = datos.at(-1).id + 1;
    // obtenemos los valores del form
    let gift = document.querySelector('#gift').value
    let tipo= document.querySelector('#tipo').value
    let tiempo = document.querySelector('#tiempo').value
    let precio = document.querySelector('#precio').value
    let imagen = document.querySelector('#imagen').value
    datos.push(new Gift(id,gift,tipo,tiempo,precio,imagen));
    document.querySelector('#formGift').reset();
    localStorage.setItem('datos',JSON.stringify(datos));
    cargarTabla();
}

// se crea una funcion para eliminar y se ocupa window para que sea un metodo global
window.borrarGift = (id) =>{
    // obtemos la posicion del elemento
    let index = datos.findIndex((item)=> item.id==id)
    let validar = confirm(`Esta segure que quiere elimnar la gift card ${datos[index].gift}?`)
    if(validar){
        datos.splice(index, 1)
        localStorage.setItem('datos',JSON.stringify(datos));
        cargarTabla();
    }
}
cargaDeDatos();
cargarTabla();

// espera que den click al boton del formulario para ir a la funcion agregar gift
document.querySelector('#formGift').addEventListener('submit',agregarGift);
// espera que den click al boton del formulario para ir a la funcion giftUpdate 
document.querySelector('#formModal').addEventListener('submit',giftUpdate);