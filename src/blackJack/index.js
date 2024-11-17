import _ from 'underscore';
import { crearDeck, pedirCarta,valorCarta, turnoComputadora, crearCartaHTML } from './usecases';
/** 
* 2C = Two of Clubs (Treboles)
* 2D = Two of Diamonds (Diamantes)
* 2H = Two of Hearts (Corazones)
* 2S = Two of Spades (Espadas)
*/
// Crear baraja
let deck         = [];
const tipos      = ['C','D','H','S'],
      especiales = ['A','J','Q','K'];

let puntosJugador     = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo   = document.querySelector('#btnNuevo'),
      divCartasJugadores = document.querySelector('#jugador-cartas'),
      divCartasComputadora = document.querySelector('#computadora-cartas'),
      puntosHTML = document.querySelectorAll('small');


deck = crearDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener('click',() => {  // Callback una funcion que se manda como argumento
    
    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta (carta);
    puntosHTML[0].innerText = puntosJugador;
    
    const imgCarta = crearCartaHTML(carta);
    divCartasJugadores.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Perdiste');
        btnPedir.disabled   = true; // Bloquear el btn 
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador,puntosHTML[1], divCartasComputadora,deck);

    } else if ( puntosJugador === 21 ){
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador,puntosHTML[1], divCartasComputadora,deck);
    }    
});
// evento del boton Detener 
btnDetener.addEventListener('click',() => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador,puntosHTML[1], divCartasComputadora,deck);
});
//evento del boton Nuevo Juego
btnNuevo.addEventListener('click',() => {

    console.clear();
    deck = [];
    deck =  crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugadores.innerHTML   = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});



