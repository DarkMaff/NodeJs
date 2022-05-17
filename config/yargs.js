const argv = require('yargs')

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOprion: true,
        describe: 'Es la base de la tabla de multiplicar'
    })

    .option('h', {
        alias: 'hasta',
        type: 'number',
        defauld: 10,
        describe: 'Este es el numero hasta donde quieres la tabla'
    })

    .option('l',{
        alias:'listar',
        type:'boolean',
        defauld: false,
        describe: 'Muestra la tabla en consola'
    })

    .check( (argv, options) => {
        if( isNaN(argv.b) ){
            throw ' la base tiene que ser un numero'
        }
        return true;
    })
    
    .argv;
    module.exports = argv;