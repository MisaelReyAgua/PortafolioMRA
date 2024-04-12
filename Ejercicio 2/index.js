//Crear un evento
//Primero se debe de declarar la variable para poder agregarle un evento
var boton = document.getElementById('btn');
boton.addEventListener('click',operacion);


function operacion(){
    var num1 = parseInt( document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var opcion = parseInt(document.getElementById('operacion').value);
    var resultado; //Sólo declara la variable, porque hará varias operaciones.
    if(opcion==1){
        resultado = num1 + num2;
    }
    else if(opcion==2){
        resultado = num1 - num2;
    }
    else if(opcion==3){
        resultado = num1 * num2;
    }
    else{
        resultado = num1 / num2;
    }
    document.getElementById('resultado').innerHTML = resultado;
}

