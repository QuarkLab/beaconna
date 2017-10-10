<?php
	require('dbcon.php');

<<<<<<< HEAD
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
=======
>>>>>>> e02f0a37eba4519aa2665e9c0e2777f78913ff8a

	if ($_SERVER['REQUEST_METHOD'] == 'POST')
	{
	  $data = json_decode(file_get_contents("php://input"));
	  // echo $data->item_no;

<<<<<<< HEAD
	$res = mysqli_query($conn,$mysql);
	if(!$res){
		die('Error in insertion');
	}
	else{
		echo "Success";
=======
		$item_no = $data->item_no;
		$item_name = $data->item_name;
		$item_desc = $data->item_desc;
		$item_price = $data->item_price;
		$item_tags = $data->item_tags;

		$mysql = "INSERT INTO items VALUES ('$item_no','$item_name','$item_desc','$item_price','$item_tags')";

		$res = mysqli_query($conn,$mysql);

		if(!$res){
			die('Error in insertion');
		}
		else{
			echo "\n*** Data added successfully! ***\n";
		}

>>>>>>> e02f0a37eba4519aa2665e9c0e2777f78913ff8a
	}


?>