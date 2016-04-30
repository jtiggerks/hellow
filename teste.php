<?
 
header('Content-type: application/json');


if($_POST['tipo']=='login')
{

	// consulta na base de dados
	if(($_POST['usuario'] == 123) && $_POST['senha'] == 123)
		$json_response[] = array("acesso"=>true,"usuario"=>123,'evento_numero'=>777);
	else
		$json_response[] = array("acesso"=>false,"usuario"=>0,'evento_numero'=>0);

	echo $_GET['callback'] . '(' . json_encode($json_response) . ');';
}

?>