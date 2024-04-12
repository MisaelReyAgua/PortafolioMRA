var btnGenerar = document.querySelector('#btnGenerar');
btnGenerar.addEventListener('click',()=>{
    var cuantos = parseInt(document.querySelector('#cuantos').value);
    var inputs = '';
    for(i=1; i<=cuantos; i++){
        inputs += '<div class="col-md-3 mt-3">';
        inputs += '<input type="number" id="n'+i+'" class="form control" placeholder="Número '+i+'">';
        inputs += '</div>';
    }
    document.getElementById('panel').innerHTML = inputs;
})

var btnOperar = document.querySelector('#btnOperar');
btnOperar.addEventListener('click',()=>{
    var cuantos = parseInt(document.querySelector('#cuantos').value);
    var op = document.querySelector('#operacion').value;
    var resultado = 0;
    if (op == 1) {
        resultado = sumar(cuantos);
    } 
    else if(op == 2){
        resultado = sumar(cuantos)/cuantos;
    }
    else if(op == 3){
        resultado = multiplicar(cuantos);
        console.log(resultado);
    }
    alert(resultado);
})

function sumar(cuantos){
    var suma = 0;
    for(var i=1; i<= cuantos;i++){
        suma+= parseInt(document.querySelector('#n'+i).value);
    }
    return suma;
}

function multiplicar(cuantos){
    var multiplicacion =1;
    for(var i=1; i<= cuantos;i++){
        multiplicacion = multiplicacion *(parseInt(document.querySelector('#n'+i).value));
    }
    return multiplicacion;
}