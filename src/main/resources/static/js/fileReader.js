
const fs = require("fs");
const file_path = "../files/banco_de_preguntas_a_aleatorizar.txt";

/*exports.parseFile = fuunction(file_path){*/
/*Code for reading a txt file and save it in Array Maps*/
fs.readFile(file_path, 'utf8', (error, datos) => {
        if (error) throw error;
        //console.log("El contenido es: ", datos);

        var preguntas = [];
        //var respuesta = new Map();
        var respuestas = [];
        var lineas = datos.split('\n');
        let i = 1;
        let j = 1;
        for (var linea of lineas) {
            //console.log('[linea]', linea)
            if (linea.charAt(0) == '¿') {
                //console.log(linea);
                var pregunta = new Map();
                pregunta.set('idPregunta', i);
                pregunta.set('contenido', linea);
                preguntas.push(pregunta);
                i = i + 1;
            } else {
                var respuesta = new Map();
                respuesta.set('idAlternativa', j);
                respuesta.set('idPregunta', i);
                respuesta.set('contenido', linea.substring(3, linea.length));
                if (linea.substring(0, 2) == 'SI') {
                    //console.log(linea);
                    //console.log(linea.substring(3,linea.length-1));
                    respuesta.set('opcion', true);
                } else {
                    respuesta.set('opcion', false);
                }
                respuestas.push(respuesta);
                j = j + 1;
            }


        }

        /*Parse Map Into JSON to Upload to DataBase*/
        let respuestas1 = [];
        for(var respuesta of respuestas){
            respuestas1.push(Object.fromEntries(respuesta));
        }
        //console.log(respuestas1);
        var preguntas1 = [];
        for(var pregunta of preguntas){
            preguntas1.push(Object.fromEntries(pregunta));
        }
        //console.log(preguntas1);
        //Quiero retornar los objetos creados en esta función
    /*
    return {
            'answers': respuestas1,
            'questions':preguntas1};*/
});
/*}*/





