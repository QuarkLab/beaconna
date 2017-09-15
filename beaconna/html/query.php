<?php
	require('dbcon.php');

	$GLOBALS['conn'] = $conn;

	function getData($table){
		// $table_req = $table;
		$con = $GLOBALS['conn'];

		$res = mysqli_query($con,'SELECT * FROM $table');

		return $res;
	}

	$cos = getData($table = 'items');

	var_dump($cos);
?>