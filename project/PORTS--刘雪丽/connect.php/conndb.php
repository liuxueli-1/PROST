<?php
	$conn = mysql_connect("localhost","123456","shopping");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("pingduoduo",$conn)){
		die("数据库选择失败".mysql_error());
    };
    
?>