var Mousetrap = require('mousetrap')
var operacionSeleccionada = ""

//OBTENCION DE ELEMENTOS HTML
var botonUno = document.getElementById('botonUno')
var botonDos = document.getElementById('botonDos')
var botonTres = document.getElementById('botonTres')
var botonCuatro = document.getElementById('botonCuatro')
var botonCinco = document.getElementById('botonCinco')
var botonSeis = document.getElementById('botonSeis')
var botonSiete = document.getElementById('botonSiete')
var botonOcho = document.getElementById('botonOcho')
var botonNueve = document.getElementById('botonNueve')
var botonCero = document.getElementById('botonCero')
var botonSuma = document.getElementById('botonSuma')
var botonResta = document.getElementById('botonResta')
var botonMultiplicacion = document.getElementById('botonMultiplicacion')
var botonDivision = document.getElementById('botonDivision')
var botonBorrar = document.getElementById('botonBorrar')
var botonLimpiar = document.getElementById('botonLimpiar')
var actual = document.getElementById('actual')
var botonIgual = document.getElementById('botonIgual')

//ESCRITURA CON TECLAS
Mousetrap.bind('1', clickUno)
Mousetrap.bind('2', clickDos)
Mousetrap.bind('3', clickTres)
Mousetrap.bind('4', clickCuatro)
Mousetrap.bind('5', clickCinco)
Mousetrap.bind('6', clickSeis)
Mousetrap.bind('7', clickSiete)
Mousetrap.bind('8', clickOcho)
Mousetrap.bind('9', clickNueve)
Mousetrap.bind('0', clickCero)

//AGREGANDO FUNCION CLICK A LOS BOTONES
botonUno.addEventListener('click', clickUno)
botonDos.addEventListener('click', clickDos)
botonTres.addEventListener('click', clickTres)
botonCuatro.addEventListener('click', clickCuatro)
botonCinco.addEventListener('click', clickCinco)
botonSeis.addEventListener('click', clickSeis)
botonSiete.addEventListener('click', clickSiete)
botonOcho.addEventListener('click', clickOcho)
botonNueve.addEventListener('click', clickNueve)
botonCero.addEventListener('click', clickCero)
botonSuma.addEventListener('click', clickSuma)
botonResta.addEventListener('click', clickResta)
botonMultiplicacion.addEventListener('click', clickMultiplicacion)
botonDivision.addEventListener('click', clickDivision)
botonBorrar.addEventListener('click', clickBorrar)
botonLimpiar.addEventListener('click', clickLimpiar)
botonIgual.addEventListener('click', clickIgual)

//DEFINIENDO FUNCIONES
function clickUno(){
    actual.innerHTML+='1'
}

function clickDos(){
    actual.innerHTML+='2'
}

function clickTres(){
    actual.innerHTML+='3'
}

function clickCuatro(){
    actual.innerText+='4'
}

function clickCinco(){
    actual.innerHTML+='5'
}

function clickSeis(){
    actual.innerHTML+='6'
}

function clickSiete(){
    actual.innerHTML+='7'
}

function clickOcho(){
    actual.innerHTML+='8'
}

function clickNueve(){
    actual.innerText+='9'
}

function clickCero(){
    actual.innerHTML+='0'
}

function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual + valorResultado
    actual.innerHTML = 0
    operacionSeleccionada = "1"
    historial[contadorHistorial] = historial[contadorHistorial] + resultado + " + " 
}

function clickResta(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    if (valorResultado == 0) {
        resultado.innerHTML = valorActual * 1
    }
    else if (actual.innerHTML == 0) {
        operacionSeleccionada = "2"
    }
    else
    resultado.innerHTML = valorResultado - valorActual 
    actual.innerHTML = 0
    operacionSeleccionada = "2"
}

function clickMultiplicacion(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    if (valorResultado == 0) {
        resultado.innerHTML = valorActual * 1
    }else if (actual.innerHTML == 0) {
        operacionSeleccionada = "3"
    }else
    resultado.innerHTML = valorActual * valorResultado
    actual.innerHTML = 0
    operacionSeleccionada = "3"
}

function clickDivision(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    if (valorResultado == 0) {
        resultado.innerHTML = valorActual * 1
    }else if (actual.innerHTML == 0) {
        operacionSeleccionada = "4"
    }else
    resultado.innerHTML = valorResultado / valorActual
    actual.innerHTML = 0
    operacionSeleccionada = "4"
}

function clickIgual(){
    if (operacionSeleccionada == "1") {
        clickSuma();
    }
    else if (operacionSeleccionada == "2") {
        clickResta();
    } 
    else if (operacionSeleccionada == "3") {
        clickMultiplicacion();
    }
    else if (operacionSeleccionada == "4") {
        clickDivision();
    }
    else {
        resultado.innerHTML = "Error de selección de operación"
    }

}

function clickBorrar(){
    let cadenaIngreso = actual.innerHTML.split("")
    cadenaIngreso.pop()
    let cadenaBorrado = 0
    for (let i = 1; i < cadenaIngreso.length; i++) { //i=1 porque el arreglo tiene el numero 0 al principio
        cadenaBorrado += cadenaIngreso[i]
        
    }
    actual.innerHTML = cadenaBorrado    
}

function clickLimpiar() {
    actual.innerHTML = 0
    resultado.innerHTML = 0
}