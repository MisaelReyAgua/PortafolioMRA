var div1 = document.querySelector('#div1');
var fondo = document.querySelector('#fondo');
fondo.addEventListener('change', function () {
    var nuevoFondo = fondo.value;
    div1.style.background = nuevoFondo;
});

var texto = document.querySelector('#texto');
// funcion flecha
texto.addEventListener('change', () => {
    var nuevoColor = texto.value;
    div1.style.color = nuevoColor;
})

var fuente = document.querySelector('#fuente');
fuente.addEventListener('change', () => {
    var nuevaFuente = fuente.value;
    div1.style.fontSize = nuevaFuente + 'px';
})

var alto = document.querySelector('#alto');
alto.addEventListener('change', () => {
    var nuevoAlto = alto.value;
    div1.style.height = nuevoAlto + 'px';
})

var ancho = document.querySelector('#ancho');
ancho.addEventListener('change', () => {
    var nuevoAncho = ancho.value;
    div1.style.width = nuevoAncho + 'px';
})

var borde = document.querySelector('#borde');
borde.addEventListener('change', () => {
    var nuevoBorde = borde.value;
    div1.style.border = nuevoBorde + 'px solid #000';
})

var letra = document.getElementById('letra');
letra.addEventListener('keyup', function(){
    div1.innerHTML = letra.value;
})
// keyup, keydown, keypress, change, blur
// querySelector()c Selecciona el primer elemento que coincide con el valor indicado, 
// sea clase o id. Y document. getElementById() 
// Selecciona el primer id que tenga como id el valor indicado.