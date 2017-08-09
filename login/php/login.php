<?php
header("content-type:text/html;charset=utf-8");
$userword=$_REQUEST["userword"];
$password=$_REQUEST["password"];
$val=$userword.$password;

$arr=array("12345qweqwe","fsadfa");
$flag="false";
foreach($arr as $str){
	if($str===$val){
		$flag="true";
	}
}
echo $flag;
?>