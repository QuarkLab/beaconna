<?php
	require('dbcon.php');

echo "a";
header('Content-Type: application/json');
var_dump($response);
var_dump($_POST);

echo json_encode($response);


$_POST = json_decode(file_get_contents('php://input'), true);
var_dump($_POST);die();
	$item_no = int($_POST['item_no']);
	$item_name = $_POST['item_name'];
	$item_desc = $_POST['item_desc'];
	$item_price = int($_POST['item_price']);
	$item_tags = $_POST['item_tags'];
echo "b";

	$mysql = "INSERT INTO items VALUES ('$item_no','$item_name','$item_desc','$item_price','$item_tags')";

	$res = mysqli_query($conn,$mysql);
	if(!$res){
		die('Error in insertion');
	}
	else{
		echo "Success";
	}
?>