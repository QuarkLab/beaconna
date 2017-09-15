<?php
	// $date = date('Y-m-d', strtotime(str_replace('-', '/', $date)));
	var_dump($_POST);

	$ad_no = $_POST['ad_no'];
	$ad_topic = $_POST['ad_topic'];
	$ad_desc = $_POST['ad_content'];
	$ad_date = $_POST['date'];
	$ad_month = $_POST['month'];
	$ad_year = $_POST['year'];

	$ad_date = $ad_year.'-'.$ad_month.'-'.$ad_date;
	echo $ad_date;
	require('dbcon.php');

	$sql = "INSERT INTO ads VALUES ('$ad_no','$ad_topic','$ad_desc','$ad_date')";

	$res = mysqli_query($conn,$sql);

	if(!$res){
		echo "error in insertion";
	}
	else{
		header('Location: advertistment.php');
	}
?>