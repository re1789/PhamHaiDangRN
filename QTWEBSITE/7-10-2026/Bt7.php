<?php
$chuoi = "";
$nguyenam = 0;
$phuam = 0;
$kq = "";
if (isset($_POST["dem"])) {
    $chuoi = $_POST["chuoi"];
    for ($i = 0; $i < strlen($chuoi); $i++) {
        $kt = substr($chuoi, $i, 1);
        if (($kt >= 'a' && $kt <= 'z') || ($kt >= 'A' && $kt <= 'Z')) {
            if (strpos("aeiouAEIOU", $kt) !== false)
                $nguyenam++;
            else
                $phuam++;
        }
    }
    $kq = "Có $nguyenam nguyên âm và $phuam phụ âm";
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
            background-color: darkcyan;
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
            <h2>ĐẾM NGUYÊN ÂM, PHỤ ÂM</h2>
        </div>
        <form action="" method="post">
            <div class="content">
                <p>
                    Nhập chuỗi: <input type="text" value="<?php echo $chuoi; ?>">
                </p>
                <p>
                    Kết quả: <input type="text" value="<?php echo $kq; ?>" readonly>
                </p>
                <button name="dem" class="nut">Đếm</button>
            </div>
        </form>
    </div>
</body>
</html>