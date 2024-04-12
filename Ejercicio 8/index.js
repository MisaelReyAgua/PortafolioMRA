var btn = document.querySelector('#btnMostrar');
btn.addEventListener('click', function(){
    var tabla = document.querySelector('#tabla').value
    var rangoInicio = document.getElementById('rangoInicio').value;
    var rangoFin = document.getElementById('rangoFin').value;
    calcularTabla(tabla, rangoInicio, rangoFin);
})


function calcularTabla(t, rangoInicio, rangoFin){
    var div = document.getElementById('res');
    var resultado = '';
    for(var i = rangoInicio; i <= rangoFin; i++){
        resultado += t + ' x ' + i + " = " + (t*i) + '<br>';
    }
    div.innerHTML = resultado;
}
