import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0 )
    throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    if (!tiposEspeciales|| tiposEspeciales.length === 0 )
        throw new Error('TiposEspeciales es obligatorio como un arreglo de string');
        

    let deck = []; // reinicializar el deck

    for ( let i = 2; i <= 10; i++){
        for ( let tipo of tiposDeCarta ){
            deck.push(i + tipo);
        }  
    }
    for( let tipo of tiposDeCarta){
        for( let esp of tiposEspeciales){
            deck.push(esp + tipo);
        }
    }
        // esta funcion regresa un arreglo con diferente orden 
    return _.shuffle(deck);

}