const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar= false, hasta=10) => {

    try{

        let salida = '';
        let consola ='';
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'x'.green} ${ i } ${ '='.green } ${ base * i}\n`;
         }

        if ( listar ) {
            console.log('=================='.green);
            console.log('tabla de:'.green, colors.blue(base));
            console.log('=================='.green);

            console.log(consola);
        }

        fs.writeFileSync(`./tablas/tabla del ${ base }.txt`, salida);
       

        return `tabla del ${ base}.txt`;
    } catch (err) {
        err;
    }



}

module.exports = {
    crearArchivo,
    
}
