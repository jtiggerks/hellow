<?
 
header('Content-type: application/json');



$json_response[] = array("nome"=>'Online');		 		 
echo $_GET['callback'] . '(' . json_encode($json_response) . ');';
 
?>