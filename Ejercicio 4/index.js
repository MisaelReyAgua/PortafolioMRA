var boton = document.getElementById('btnCalcular');
boton.addEventListener('click',calcular);
 
function calcular(){
    var parcial1 = parseInt(document.getElementById('parcial1').value);
    var parcial2 = parseInt(document.getElementById('parcial2').value);
    var parcial3 = parseInt(document.getElementById('parcial3').value);
    var ordinario = parseInt(document.getElementById('ordinario').value);
    var calificacionFinal = (((parcial1+parcial2+parcial3)/3)+ordinario)/2;
    document.getElementById('calificacionFinal').innerText= calificacionFinal;
    if (calificacionFinal <=6){
        document.getElementById('calificacionFinal').classList.add('text-danger');
    }
    else{
        document.getElementById('calificacionFinal').classList.remove('text-danger');
        document.getElementById('calificacionFinal').classList.add('text-success');
    }
    

}
