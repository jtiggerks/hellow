
(function ($) {
$(document).ready(function()
{

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
			//abre_Home();
	      }
	    }
	  ]
	});	
}


function abre_Home(){
//$("#footer ul li").removeClass('menu-home-ativo');
 
 
$('#pagina-atual').val('home');	
$("#voltar-header").hide();
  
var hideDeffered = $('#login').hide("fade", { direction: "up", easing: 'easeInOutBack' }, 50);
hideDeffered.promise().done(function() {
	$('#login').show("fade", { direction: "right", easing: 'easeInOutBack' }, 1000);
});	
}

	var snapper = new Snap({
	  element: document.getElementById('content')
	});


$('.b_menu').on('click', function(e) { 
	  	$(this).toggleClass('active-slide');
		 
		if( snapper.state().state=="left" ){
			snapper.close();
			 			
		} else {
			snapper.open('left');
		 
		}
		return false;
});

$('.menu_busca').on('click', function(e) {
			 
			var hideDeffered = $('#login,#home').hide("fade", { direction: "top", easing: 'easeInOutBack' }, 700);
			
			hideDeffered.promise().done(function() {
				$("#busca").show("slide", { direction: "down", easing: 'easeInOutBack' }, 700);
				snapper.close();
			});
});

$('.menu_home').on('click', function(e) {
			 
			var hideDeffered = $('#login,#busca').hide("fade", { direction: "top", easing: 'easeInOutBack' }, 700);
			
			hideDeffered.promise().done(function() {
				$("#home").show("slide", { direction: "down", easing: 'easeInOutBack' }, 700);
				snapper.close();
			});
});

$('#button_login').on('click', function(e) {
 	 

		// se validado envia para página de tarefas
		var hideDeffered = $('#login').hide("fade", { direction: "top", easing: 'easeInOutBack' }, 1700);
		
		hideDeffered.promise().done(function() {
			$("#home, .header").show("slide", { direction: "top", easing: 'easeInOutBack' }, 700);
		});

			
 		$.ajax({
		url: 'http://www.perfiljt.com.br/app/teste.php?nocache=' + (new Date()).getTime(),
		cache:false,
		dataType: 'jsonp',
		jsonp: 'callback',
		timeout: 10000,
		success: function(results)
		{		
			var json = $.parseJSON(results);

			$.each(results, function(i,item){
				alerta(item.nome);	
			});

			// se validado envia para página de tarefas
			var hideDeffered = $('#login').hide("fade", { direction: "top", easing: 'easeInOutBack' }, 1700);
			
			hideDeffered.promise().done(function() {
				$("#home, .header").show("slide", { direction: "top", easing: 'easeInOutBack' }, 700);
			});



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

           sem_Conexao();
		}
	});
});
	 




})
}(jQuery));




 


 

