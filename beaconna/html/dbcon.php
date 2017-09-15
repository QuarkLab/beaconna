<?php
	$server = 'localhost';
	$username = 'root';
	$pass = '';
	$db = 'beaconna';

	$conn = mysqli_connect($server,$username,$pass,$db);

	if(!$conn){
		die("DB not connected".mysqli_connect_error());
	}
?>