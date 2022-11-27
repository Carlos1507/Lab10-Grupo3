<!--Código por Jex-->
$(document).ready(function (){
    let participantes;
    let playerCh1;
    let playerCh2;
    let playerCh3;
    let playerCh4;
    let playerCh5;
    $('#BtnContinuar').click(function (){
        let preguntas=parseInt($('#N_RQuestions').val());
        participantes=parseInt($('#N_Participantes').val());
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

    $('#btnPlayField').click(function (){
        var regex = new RegExp("^[a-zA-Z ]+$");//Solo nombres y espacios

        playerCh1= $('.playerCh1').attr('src');
        let player1= $('#player1').val();

        playerCh2= $('.playerCh2').attr('src');
        let player2= $('#player2').val();

        playerCh3= $('.playerCh3').attr('src');
        let player3= $('#player3').val();

        let cumple4;let cumple5;
        if($('#display4').is(":visible")){
            playerCh4= $('.playerCh4').attr('src');
            let player4= $('#player4').val();
            cumple4= regex.test(player4);
        }else{
            cumple4=true;
        }
        if($('#display5').is(":visible")) {
            playerCh5 = $('.playerCh5').attr('src');
            let player5 = $('#player5').val();
            cumple5= regex.test(player5);
        }else{
            cumple5=true;
        }
        if(regex.test(player1)&&regex.test(player2)&&regex.test(player3)&&cumple4&&cumple5){
            document.querySelector('#perso1').src=playerCh1;
            document.querySelector('#perso2').src=playerCh2;
            document.querySelector('#perso3').src=playerCh3;
            if($('#display4').is(":visible")){
                document.querySelector('#perso4').src=playerCh4;
                $('#linea4').show();
            }
            if($('#display5').is(":visible")){
                document.querySelector('#perso5').src=playerCh5;
                $('#linea5').show();
            }
            $('#SegundoModal').hide();
            $('#TercerModal').show();
        }else{
            alert('Nombres mal ingresados');
        }
    });
    $('#AsignarTurnos').click(function (){
        let arreglo=[[playerCh1,$('#haveColor1').css("background-color")],[playerCh2,$('#haveColor2').css("background-color")],[playerCh3,$('#haveColor3').css("background-color")],[playerCh4,$('#haveColor4').css("background-color")],[playerCh5,$('#haveColor5').css("background-color")]];
        arreglo.sort(function() { return Math.random() - 0.5 });
        for(let i=0;i<participantes;i++){
            document.querySelector('#perso'+(i+1)).src=arreglo[i][0];
            $('#linea'+(i+1)+' td').css("background-color", arreglo[i][1]);
            $('.inicio'+(i+1)+'').css("background-color", "rgba(33,37,41)");
        }
        playerCh1= arreglo[0][0];
        playerCh2= arreglo[1][0];
        playerCh3= arreglo[2][0];
        playerCh4= arreglo[3][0];
        playerCh5= arreglo[4][0];
    });
});