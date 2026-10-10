<?php
$chuoi = "";
$chu = 0;
$so = 0;
$ktdb = 0;
if (isset($_POST["dem"])) {
    $chuoi = $_POST["chuoi"];
    for ($i = 0; $i < strlen($chuoi); $i++) {
        $kt = substr($chuoi, $i, 1);
        if (($kt >= 'a' && $kt <= 'z') || ($kt >= 'A' && $kt <= 'Z')) {
            $chu++;
        } else if ($kt >= '0' && $kt <= '9') {
            $so++;
        } else if ($kt != " ") {
            $ktdb++;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 500px;
            margin: 0 auto;
            padding: 10px;
            background-color: gray;
        }
        .title{
            color: blue;
            font-size: 20px;
            font-weight: 300;
            text-align: center;
        }
        .content{
            color: skyblue;
            font-size: 20px;
            padding: 10px;
            position: relative;
        }
        .content input{
            position: absolute;
            left: 220px;
            width: 220px;
        }
        .nut{ 
            display: block; 
            margin: 0 auto;
            padding: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">
            <h2>ĐẾM SỐ KÝ TỰ TRONG CHUỖI</h2>
        </div>
        <form action="" method="post">
            <div class="content">
                <p>
                    Nhập chuỗi: <input type="text" name="chuoi" value="<?php echo $chuoi; ?>">
                </p>
                <p>
                    Số chữ cái: <input type="text" value="<?php echo $chu; ?>" readonly>
                </p>
                <p>
                    Số chữ số: <input type="text" value="<?php echo $so; ?>" readonly>
                </p>
                <p>
                    Số ký tự đặc biệt: <input type="text" value="<?php echo $ktdb; ?>" readonly>
                </p>
                <button name="dem" class="nut">Đếm</button>
            </div>
        </form>
    </div>
</body>
</html>