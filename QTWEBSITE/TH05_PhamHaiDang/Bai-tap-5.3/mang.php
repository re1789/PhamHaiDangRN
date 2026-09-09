<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .container{
        border: 1px solid black;
        width: 600px;
        margin: 0 auto;
    }
    .header{
        color: white;
        background-color: lightblue;
        padding: 3px;
        margin: 0 auto;
        text-align: center;
    }
    .content{
        margin-left: 15%;
    }
    td{
        padding: 10px;
    }
    .btn{
        width: 100%;
        border: 0 solid;
        padding: 10px;
        border-radius: 15px;
        background-color: gray;
        color: white;
    }
    .btn:hover{
        background-color: tomato;
    }
    .btn:active{
        background-color: turquoise;
    }
</style>
<body>
    <?php
        if (isset($_POST['okay'])){
            $dayso = $_POST['txt'];
            $mang = explode(',' , $dayso);
            $n = count($mang);
	
	        $tong = 0;
        for($i=0; $i<$n; $i++){
            $tong = $tong + $mang[$i];
        }}

    ?>
    <form method="post">
        <div class="container">
        <div class="header">
            <h1>THAO TÁC MẢNG</h1>
        </div>
        <table class="content">
            <tr>
                <td>Nhập dãy số</td>
                <td><input type="text" name="txt"></td>
            </tr>
            <tr>
                <td></td>
                <td><button type="submit" name="okay" class="btn">Tính</button></td>
            </tr>
            <tr>
                <td>Mảng đã nhập</td>
                <td><input type="text" disabled="disabled"></td>
            </tr>

            <tr>
                <td>Tổng các số trong mảng</td>
                <td><input type="text" disabled="disabled" value="<?php if (isset($tong)) echo $tong;?>"></td>
            </tr>

            <tr>
                <td>TBC các số trong mảng</td>
                <td><input type="text" disabled="disabled"></td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>