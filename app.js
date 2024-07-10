var numeroSecreto;
var intentos;
let listaNumeroSecreto = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos += 1;
        limpiarCaja('#valorUsuario')

    }
    return;
}

function limpiarCaja(valorCaja) {
    document.querySelector(valorCaja).value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if (listaNumeroSecreto.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    } else {
        if (listaNumeroSecreto.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSecreto.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    

}

function nuevoJuego() {
    limpiarCaja('#valorUsuario');
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', '1');
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

    console.log(numeroSecreto)
}

condicionesIniciales();
