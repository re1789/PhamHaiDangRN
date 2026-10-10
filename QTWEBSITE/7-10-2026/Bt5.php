<?php
$chuoi1 = "";
$chuoi2 = "";
$kt1 = 0;
$kt2 = 0;
$kq = "";
if (isset($_POST["sosanh"])) {
    $chuoi1 = $_POST["chuoi1"];
    $chuoi2 = $_POST["chuoi2"];
    $kt1 = strlen($chuoi1);
    $kt2 = strlen($chuoi2);
    if ($chuoi1 == $chuoi2) {
        $kq = "Hai chuỗi bằng nhau";
    } else if ($chuoi1 > $chuoi2) {
        $kq = "Chuỗi 1 lớn hơn chuỗi 2";
    } else {
        $kq = "Chuỗi 1 nhỏ hơn chuỗi 2";
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
            background-color: steelblue;
        }
        .title{
            color: lightgreen;
            font-size: 20px;
            font-weight: 300;
            text-align: center;
        }
        .content{
            color: white;
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
            <h2>ĐẾM KÝ TỰ</h2>
        </div>
        <form action="" method="post">
            <div class="content">
                <p>
                    Nhập chuỗi 1 (ko dấu): <input type="text" name="chuoi1" value="<?php echo $chuoi1; ?>">
                </p>
                <p>
                    Nhập chuỗi 2 (ko dấu): <input type="text" name="chuoi2" value="<?php echo $chuoi2; ?>">
                </p>
                <p>
                    Số ký tự chuỗi 1: <input type="text" value="<?php echo $kt1; ?>" readonly>
                </p>
                <p>
                    Số ký tự chuỗi 2: <input type="text" value="<?php echo $kt2; ?>"readonly>
                </p>
                <p>
                    Kết quả so sánh: <input type="text" value="<?php echo $kq; ?>">
                </p>
                <button class="nut" name="sosanh">So Sánh</button>
            </div>
        </form>
    </div>
</body>
</html>