// Una array es un tipo de variable que puede contener multiples valores
// En JS el array puede ser de varios tipos de datos

var edades = [18,15,20,5,13,22,50,41,26];
var nombres = ['Dan','Ernesto','pedro'];
var variado = [25,'Jimaica',7.5,'Santiago'];

// Para mostrar posicion de Array
// console.log(edades[2]);

// Añadir elemenos a un arrays
// nombres.push('Nuevo');

//Elimina el primer elemento del array
// nombres.shift(); 
// console.log(nombres);

 //Elimina el ultimo elemento del Array
// nombres.pop();
// console.log(nombres);

// Se ocupa un for para imprimir cada valor del array en la posicion j
// for(var j=0; j< nombres.length; j++){
//     console.log(nombres[j]);
// }

// para llenar un select
// var opciones ='';
//  for(var j=0; j< nombres.length; j++){   
//     opciones += '<option value="'+j+'">'+nombres[j]+'</option>'
// }
// document.querySelector('#opciones').innerHTML = opciones;

// para llenar una tabla
var opciones ='';
var filas=''
 for(var j=0; j< nombres.length; j++){   
    opciones += '<option value="'+j+'">'+nombres[j]+'</option>'
    filas += '<tr><td>' + (j+1)+'</td><td>'+nombres[j]+'</td></tr>'
}
document.querySelector('#opciones').innerHTML = opciones;
document.querySelector('#tabla').innerHTML = filas;

// Saber el indice de un elemento de array
// console.log(variado.indexOf(25));



// Suma de arrays

// let array1 = [10,5,6,8,2];
// let array2 = [3,7,20,16,1];
// let array3 = [];

// for(i=0; i<array1.length;i++){
//     array3.push(array1[i] + array2[i]);
// }
// console.log(array3);




