<?php
    include 'connect.php';
    $uname = $_GET["uname"];
    $bid = $_GET["bid"];
    $qty = $_GET["qty"];
    $list = $_GET["list"];
    $del_uname = $_GET["del_uname"];    
    $biddelete = $_GET["biddelete"];  

    $res1 = $conn->query("select * from car where bid=".$bid." and uname='".$uname."'");
    
    $res2 = $conn->query("select * from car where bid='".$biddelete."' and uname='".$uname."'");

    $res3 = $conn->query("select * from car where uname ='".$del_uname."'");

    $num = $res1->num_rows;
    
	$num2 = $res2->num_rows;

	$num3= $res3->num_rows;
    // 增加商品
	if($num == 0){
	    $conn->query("insert into car (uname,bid,bnum) values ('".$uname."','".$bid."',1)");
    }else if($num!=0){
        $conn->query("update car set bnum = '".$qty."' where bid='".$bid."' and uname='".$uname."'");
    }

    if($num!=0 && $list == 1){
        $conn->query("update car set bnum = bnum+1 where bid='".$bid."' and uname='".$uname."'");
    }

    
    
    //删除商品
    if($num2 != 0){
       $conn->query("delete from car where bid='".$biddelete."' and uname='".$uname."'");	    
    }
    // 清空购物车
    if($num3 != 0){
        $conn->query("delete from car where uname='".$del_uname."'");	    
     }
    $res1->close();
	$conn->close();
?>