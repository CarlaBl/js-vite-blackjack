
/**
 * Esta funcion me permite tomar una carta del deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';  
    }
    return deck.pop(); // saca la ultima carta
}