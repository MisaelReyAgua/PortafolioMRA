import {Persona} from './Persona.js';
const benny = new Persona('Benito','Juarez',69,1.80);
const porfi = new Persona('Porfirio','Days',82,1.70);
console.log(benny.saludar()); 
console.log(benny.imc()); 
console.log(porfi.saludar());

import { Combo } from './Combo.js';
const colores = new Combo('cmbColores','colores','text-danger',['azul','rojo', 'verde']);
document.getElementById('div1').innerHTML = colores.mostrar();

let btn = document.querySelector('#btn1');
btn.addEventListener('click',()=>{
    let valores = document.querySelector('#valores').value;
    console.log(valores)
    let arrayValores = valores.split(',');
    const colores = new Combo('cmbColores','colores','text-danger',arrayValores);
    document.getElementById('div1').innerHTML += colores.mostrar();
})


import { Boton } from './Boton.js';
const  btn1 = new Boton('Eliminar','danger','btn1','btnEliminar');
const  btn2 = new Boton('Guardar','success','btn2','btnGuardar');
var div2 = document.querySelector('#div2');
div2.innerHTML = btn1.mostrar()+btn2.mostrar();