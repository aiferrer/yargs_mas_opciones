const { crearArchivo, mostrarArchivoCreado } = require('./tabla');
const color = require('colors');
const argv = require('yargs')
    .options('b', {
        alias: 'base',
        demandOption: true,
        type: 'number'
    })
    .option('l', {
        alias: 'listar',
        demandOption: false,
        type: 'boolean',
        default: false
    })
    .check((argv, options) => {
        const base = argv.b;
        if (isNaN(base)) {
            throw new Error("La base debe ser un numero");
        }
        if (base < 1 || base > 20) {
            throw new Error("Debes colocar un valor de base entre 1 y 20")
        }
        else return true;
    })
    .argv;

//console.log(process.argv);
//console.log(argv);

if (argv.b) {
    crearArchivo(argv.b)
    .then( nombreArchivo => console.log(`Se ha creado el archivo ${nombreArchivo}`)
    )
    .catch(e => console.log('ERROR: '.red + e));
}
else{
    return console.log('ERROR: '.red + 'Debe escribir un comando que contenga el argumento base: Ej --base=2' )
}



if (argv.l) {
    console.log(`Mostrando la tabla de base: ${argv.b} \n`.green +  mostrarArchivoCreado(argv.b).rainbow);
}