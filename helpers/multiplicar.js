const fs = require('fs');
const colors = require('colors');

/**
 * 
 * @param {*} base any number
 * @returns result of multiplication of "number base" to number 1 to 
 */
const crearArchivo = async ( base, listar = false ) => {
    let salida = '';
    
    try {
        
        for(let i=1; i<=10; i++){
            salida += `${ base } ${ colors.red('X')} ${ i } ${colors.green('=')} ${ base * i}\n`;
        
        }
        if( listar ){
            console.log(salida);
        }
           
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    
        return `tabla-${ base }.txt`;

    } catch (error) {
        throw error;
    }

    
    
}

module.exports = {
    crearArchivo
}