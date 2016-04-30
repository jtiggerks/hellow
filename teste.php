<?
 
	header('Content-type: application/json');


	if($_REQUEST['tipo']=='login')
	{
		// consulta na base de dados
		if(($_REQUEST['usuario'] == 123) && $_REQUEST['senha'] == 123)
			$json_response[] = array("acesso"=>true,"usuario"=>123,'evento_numero'=>777,'evento_nome'=>'Casamento João e Maria');
		else
			$json_response[] = array("acesso"=>false,"usuario"=>$_REQUEST['usuario'],'evento_numero'=>0);

		echo $_GET['callback'] . '(' . json_encode($json_response) . ');';
	}


	if($_REQUEST['tipo']=='leitor')
	{
 		// consultar o código pesquisado na base de dados retornar o nome
		// codigo fake 12345		
	
		if($_REQUEST['codigo'] == 12345)
			$json_response[] = array("nome"=>'Nome do Convidado',"acesso"=>true);
		else
			$json_response[] = array("nome"=>'Não encontrado',"acesso"=>false);
	 

		echo $_GET['callback'].'('.json_encode($json_response). ');';
	}


?>