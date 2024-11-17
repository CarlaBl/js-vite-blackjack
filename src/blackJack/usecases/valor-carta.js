/**
 * Esta funcion me dice cual es el valor de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */

export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length-1); // método de los string que regresa un string cortado
    return ( isNaN(valor) ) ?     // isNaN  nos dice si es un número o no
        ( valor === 'A') ? 11 : 10 
        : valor * 1 ; //  para trasformar el string en número lo multiplicamos * 1
}