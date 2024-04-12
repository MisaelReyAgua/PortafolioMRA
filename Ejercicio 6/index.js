var div = document.querySelector('#res');

/*for( var i = 1; i <= 100; i++){
    // console.log(i);  Se imprime en consola de la pagina del 1 al 100
    div.innerHTML += i + '<br>'; // div.innerHTML = div.innerHTML + i para imprimirlo 
}
*/
var fin = document.querySelector('#fin');
fin.addEventListener('keypress',function(event){
    console.log(event); //Se ocupa para ver los codigos de cada tecla
    if(event.charCode == 13){
        div.innerHTML = '';
        for(var i = 1; i <= fin.value; i++){
            div.innerHTML += i + '<br>';   
        }
    }
    
})