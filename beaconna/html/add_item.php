<?php
	require('dbcon.php');

	$item_no = $_POST['item_no'];
	$item_name = $_POST['item_name'];
	$item_desc = $_POST['item_desc'];
	$item_price = $_POST['item_price'];
	$item_tags = $_POST['item_tags'];

	$mysql = "INSERT INTO items VALUES ('$item_no','$item_name','$item_desc','$item_price','$item_tags')";

	$res = mysqli_query($conn,$mysql);

	if(!$res){
		die('Error in insertion');
	}
	else{
		header('Location: inventory.php');
	}
?>