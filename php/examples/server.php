<?php
	$latency = 0;
	if(isset($_GET['latency']))
	{
		$latency = intval($_GET['latency']);
		sleep($latency);		
	}
	
	header('Content-type:application/json;charset=utf-8');
	
	$data = ['name' => 'jsondata', 'value' => 'test', 'sleep' => $latency, 'ru' => 'Мастер'];
	echo json_encode($data);
?>