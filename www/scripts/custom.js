
(function ($) {
$(document).ready(function()
{
	var page = $('#pagina-atual').val();
 


	if(page == 'login')
	{
		localStorage.clear();
	}


	function alerta(e){
	$("<div title='Aviso'></div>").dialog({
	   open: function(event, ui) { $(this).html('<span style="text-align:"center;">'+e+'</span>'); $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); },
		show: { effect: "fade", duration: 300 },
		buttons: [
	    {
	      text: "Ok",
	      click: function() {
	        $( this ).dialog("close");
	      }
	    }
	  ]
	});	
	}

	function sem_Conexao(e){
	$("<div title='Sem conexão'></div>").dialog({
	   open: function(event, ui) { $(this).html('<span style="text-align:"center;">Conecte-se para utilizar esta função.</span>'); $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); },
		show: { effect: "fade", duration: 300 },
		buttons: [
	    {
	      text: "Voltar",
	      click: function() {
	        $( this ).dialog("close");		
	      }
	    }
	  ]
	});	
}


function abre_Home()
{
	$('#pagina-atual').val('home');	
	// se validado envia para página de tarefas
	var hideDeffered = $('#login, #busca').hide("fade", { direction: "top", easing: 'easeInOutBack' }, 500);

	hideDeffered.promise().done(function() {
		$("#home, .header").show("slide", { direction: "top", easing: 'easeInOutBack' }, 500);
	});
}

var snapper = new Snap({
   element: document.getElementById('content')
});


$('.b_menu').on('click', function(e) { 
  	$(this).toggleClass('active-slide');
	 
	if( snapper.state().state=="left" )
	{
		snapper.close();		 			
	} else {
		snapper.open('left');	 
	}
	return false;
});


$('.menu_busca').on('click', function(e) 
{
	var hideDeffered = $('#login,#home').hide("fade", { direction: "top", easing: 'easeInOutBack' }, 500);	
	hideDeffered.promise().done(function() {
		$("#busca").show("slide", { direction: "down", easing: 'easeInOutBack' }, 500);
		snapper.close();
	});
});


$('.menu_home').on('click', function(e)
{			 
	var hideDeffered = $('#login,#busca').hide("fade", { direction: "top", easing: 'easeInOutBack' }, 500);	
	hideDeffered.promise().done(function() {
		$("#home").show("slide", { direction: "down", easing: 'easeInOutBack' }, 500);
		snapper.close();
	});
});




$('#button_login').on('click', function(e)
{		 
 	$.ajax({
		url: 'http://www.perfiljt.com.br/app/teste.php?nocache=' + (new Date()).getTime(),
		cache:false,
		type: 'POST',
		data: {tipo:'login',usuario: $('#usuario').val(), senha: $('#senha').val()},
		dataType: 'jsonp',
		jsonp: 'callback',
		timeout: 10000,
		success: function(results)
		{		
			var json = $.parseJSON(results);

			if(results[0].acesso)
			{

				localStorage.setItem('usuario_logado',results[0].usuario);
				localStorage.setItem('evento_numero',results[0].evento_numero);
				localStorage.setItem('evento_nome',results[0].evento_nome);

				$('.evento_nome_text').empty().append(results[0].evento_nome);
				abre_Home();

			}else{
				alerta('Acesso inválido. Verifique seu email');
				localStorage.clear();
			}

	 },
	 error: function (jqXHR, exception) {
	        var msg = '';
	        if (jqXHR.status === 0) {
	            msg = 'Not connect.\n Verify Network.';
	        } else if (jqXHR.status == 404) {
	            msg = 'Requested page not found. [404]';
	        } else if (jqXHR.status == 500) {
	            msg = 'Internal Server Error [500].';
	        } else if (exception === 'parsererror') {
	            msg = 'Requested JSON parse failed.';
	        } else if (exception === 'timeout') {
	            msg = 'Time out error.';
	        } else if (exception === 'abort') {
	            msg = 'Ajax request aborted.';
	        } else {
	            msg = 'Uncaught Error.\n' + jqXHR.responseText;
	        }

           alert(msg);
		}
	});// fim ajax
	
});// fim login clique
	 




})
}(jQuery));




 


 

