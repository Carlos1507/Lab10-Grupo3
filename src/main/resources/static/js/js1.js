<!--Código por Jex-->
$(document).ready(function (){
    $('#BtnContinuar').click(function (){
        let preguntas=parseInt($('#N_RQuestions').val());
        let participantes=parseInt($('#N_Participantes').val());
        if(preguntas>3 && participantes>=3 && participantes<=5){
            $('#PrimerModal').hide();
            $('#SegundoModal').show();
            for (let i=0; i<(participantes-3);i++){
                $('#display'+(i+4)).show();
            }
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