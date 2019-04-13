<?php
	include 'connect.php';
	// $res = $conn ->query("select * from goods order by time");
	// fetch_all(MYSQLI_ASSOC);
    $yema = $_GET["yema"]; 
    $num = $_GET["num"];

    $sql_time = "SELECT * FROM goods where id not in (21,22,23,24) order by time";
	$sql_price = "SELECT * FROM goods where id not in (21,22,23,24) order by price";
	$sql_oldprice = "SELECT * FROM goods where id not in (21,22,23,24) order by oldprice";
	$sql_zhekou = "SELECT * FROM goods where id not in (21,22,23,24) order by zhekou";
	$sql_saleNum = "SELECT * FROM goods where id not in (21,22,23,24) order by saleNum";
    $result_time = $conn->query($sql_time);
    $result_price = $conn->query($sql_price);
    $result_oldprice = $conn->query($sql_oldprice);
    $result_zhekou = $conn->query($sql_zhekou);
    $result_saleNum = $conn->query($sql_saleNum);
    // var_dump($result2,$result1);
    // 按time排序取出来的数据
        // 获取商品表的所有数据
        $row_time = $result_time->fetch_all(MYSQLI_ASSOC);
        $row_price = $result_price->fetch_all(MYSQLI_ASSOC);
        $row_oldprice = $result_oldprice->fetch_all(MYSQLI_ASSOC);
        $row_zhekou = $result_zhekou->fetch_all(MYSQLI_ASSOC);
        $row_saleNum = $result_saleNum->fetch_all(MYSQLI_ASSOC);
        $caijian_time = array_slice($row_time,($yema-1)*$num,$num);
        $caijian_price = array_slice($row_price,($yema-1)*$num,$num);
        $caijian_oldprice = array_slice($row_oldprice,($yema-1)*$num,$num);
        $caijian_zhekou = array_slice($row_zhekou,($yema-1)*$num,$num);
        $caijian_saleNum = array_slice($row_saleNum,($yema-1)*$num,$num);
        $data = array(
            "row_time" => $caijian_time,
            "row_price" => $caijian_price,
            "row_oldprice" => $caijian_oldprice,
            "row_zhekou" => $caijian_zhekou,
            "row_saleNum" => $caijian_saleNum,
            "len" => count($row_time),
            "yema" => $yema,
            "num" => $num
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    
?>