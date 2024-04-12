var boton = document.getElementById('btnCalcular');
boton.addEventListener('click',descuento);

function descuento(){
    var precio = parseFloat(document.getElementById('precio').value)
    var opcion = parseInt(document.getElementById('descuento').value);
    var resultado; 
    if(opcion==10){
        resultado = precio - (precio*0.1);
    }
    else if(opcion==15){
        resultado = precio - (precio*0.15);

    }
    else if(opcion==20){
        resultado = precio - (precio*0.2);

    }
    else if(opcion==30){
        resultado = precio - (precio*0.3);

    }
    else{
        resultado = precio - (precio*0.5);

    }
    document.getElementById('precio_final').innerHTML = resultado;


}

// var boton = document.getElementById('btnCalcular');
// boton.addEventListener('click',calcular);
// function calcular(){
//     var precio = parseInt(document.getElementById('precio').value);
//     var desc = parseInt(document.getElementById('descuento').value);
//     var final = precio - (precio * (desc/100));
//     document.getElementById('precio_final').innerText= final;
// }