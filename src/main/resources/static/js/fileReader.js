const fs = require("fs"),
    NOMBRE_ARCHIVO = "../files/banco_de_preguntas_a_aleatorizar.txt";

fs.readFile(NOMBRE_ARCHIVO, 'utf8', (error, datos) => {
    if (error) throw error;
    //console.log("El contenido es: ", datos);

    var preguntas = [];
    //var respuesta = new Map();
    var respuestas = [];
    var lineas = datos.split('\n');

    for(var linea of lineas) {
        //console.log('[linea]', linea)
        if(linea.charAt(0)=='¿'){
            //console.log(linea);
            preguntas.push(linea);
        }else{
            var respuesta = new Map();
            respuesta.set('contenido',linea.substring(3,linea.length));
            if(linea.substring(0,2)=='SI'){
                //console.log(linea);
                //console.log(linea.substring(3,linea.length-1));
                respuesta.set('opcion',true);
            }else{
                respuesta.set('opcion',false);
            }respuestas.push(respuesta);
        }

    }
    //console.log(respuestas);
});




