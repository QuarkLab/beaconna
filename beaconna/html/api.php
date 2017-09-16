<?php
	require('dbcon.php');


	if ($_SERVER['REQUEST_METHOD'] == 'POST')
	{
	  $data = json_decode(file_get_contents("php://input"));
	  // echo $data->item_no;

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

	}


?>