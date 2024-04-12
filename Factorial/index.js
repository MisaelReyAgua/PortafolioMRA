var div = document.querySelector('#res');
var fin = document.querySelector('#fin');
fin.addEventListener('keypress',function(event){
    console.log(event); //Se ocupa para ver los codigos de cada tecla
    var fac = 1;
    if(event.charCode == 13){
        
        for(var i = 1; i <= fin.value; i++){
            fac = fac * i   
        }
        div.innerHTML = fac;
    }
    
})