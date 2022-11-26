
$(document).ready(function (){
    $('#BtnContinuar').click(function (){
        let preguntas=parseInt($('#N_RQuestions').val());
        let participantes=parseInt($('#N_Participantes').val());
        if(preguntas>3 && participantes>=3 && participantes<=5){
            $('#PrimerModal').hide();
            $('#SegundoModal').show();
            //$('<center> <img src="/static/img/Abra.png" width="100px" height="100px"> <table> <td> <div id="color"><input type=\'text\' class="colores" /> </div> <script> $(".colores").spectrum({ color: "#fff", showPalette: true, palette: [ [\'black\', \'white\', \'blanchedalmond\'], [\'rgb(255, 128, 0);\', \'hsv 100 70 50\', \'lightyellow\'] ], change: function(color) { //alert(color.toHexString()); $(\'.container\').css("background-color",color.toHexString()); } }); </script> </td> <td> <input class="form-control" type="text" placeholder="Username"> </td> </table> <br> <div class="mb-3"> <!-- Trigger/Open The Modal --> <button onclick="document.getElementById(\'id01\').style.display=\'block\'" class="w3-button w3-green">Seleccionar personaje</button> <div id="id01" class="w3-modal"> <div class="w3-modal-content"> <div class="w3-container"> <span onclick="document.getElementById(\'id01\').style.display=\'none\'" class="w3-button w3-display-topright">&times;</span> <div class="container"> <div class="img_container" width="200px" height="200px"> <br> <img src="/static/img/Abra.png" alt="" class="main_img"> </div> <br> <div class="thumbnail_container"> <img class="thumbnail active" src="/static/img/Abra.png" alt=""> <img class="thumbnail" src="/static/img/Aerodactyl.png" alt=""> <img class="thumbnail" src="/static/img/Alakazam.png" alt=""> <img class="thumbnail" src="/static/img/Arbok.png" alt=""> <img class="thumbnail" src="/static/img/Arcanine.png" alt=""> </div> <div class="thumbnail_container"> <img class="thumbnail" src="/static/img/Articuno.png" alt=""> <img class="thumbnail" src="/static/img/Beedrill.png" alt=""> <img class="thumbnail" src="/static/img/Bellsprout.png" alt=""> <img class="thumbnail" src="/static/img/Blastoise.png" alt=""> <img class="thumbnail" src="/static/img/Bulbasaur.png" alt=""> </div> <div class="thumbnail_container"> <img class="thumbnail" src="/static/img/Butterfree.png" alt=""> <img class="thumbnail" src="/static/img/Caterpie.png" alt=""> <img class="thumbnail" src="/static/img/Chansey.png" alt=""> <img class="thumbnail" src="/static/img/Charizard.png" alt=""> <img class="thumbnail" src="/static/img/Charmander.png" alt=""> </div> <script src="/static/js/main.js"></script> </div> <script src="/static/js/main.js"></script> <br> <button class="btn btn-danger"> Seleccionar</button> <br><br> </div> </div> </div> </div> </center>').insertAfter('#navBarPlayers');
        }else{
            $('#error1').remove();
            $('#error2').remove();
            $('#N_RQuestions').removeClass('is-invalid');
            $('#N_Participantes').removeClass('is-invalid');
            if(preguntas>3){
                $('#N_Participantes').addClass('is-invalid');
                $('<div id="error1" class="invalid-feedback">Solo de 3 a 5 participantes.</div>').insertAfter('#N_Participantes');
            }else{
                if(participantes>=3 && participantes<=5){
                    $('#N_RQuestions').addClass('is-invalid');
                    $('<div id="error2" class="invalid-feedback">Debe ser mayor a 3.</div>').insertAfter('#N_RQuestions');
                }else{
                    $('#N_Participantes').addClass('is-invalid');
                    $('#N_RQuestions').addClass('is-invalid');
                    $('<div id="error2" class="invalid-feedback">Debe ser mayor a 3.</div>').insertAfter('#N_RQuestions');
                    $('<div id="error1" class="invalid-feedback">Solo de 3 a 5 participantes.</div>').insertAfter('#N_Participantes');
                }
            }
        }
    });
});