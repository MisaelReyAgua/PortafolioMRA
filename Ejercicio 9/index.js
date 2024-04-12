var btn = document.querySelector('#btnCalcular');
btn.addEventListener('click', function(){
    var rangoInicio = document.getElementById('rangoInicio').value;
    var rangoFin = document.getElementById('rangoFin').value;
    calcular(rangoInicio, rangoFin);
})


function calcular(rangoInicio, rangoFin){
    var div = document.getElementById('res');
    var resultado = 0;
    
    for(var i = rangoInicio; i <= rangoFin; i++){
        if(i % 2 == 0){
            resultado = resultado + parseInt(i);
        }
    }
    
    div.innerHTML = resultado;
}