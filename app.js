const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs')

console.clear();



        crearArchivo( argv.b, argv.l, argv.h)
            .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado')  )
            .catch( err => console.log(err) );
      




            
 //console.log(argv);



// let parametro = argv[2];
// let base = parametro.split('=')[1]