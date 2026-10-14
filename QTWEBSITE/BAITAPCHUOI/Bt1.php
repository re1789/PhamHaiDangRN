<?php
$chuoi = "";
$demChuoi = 0;
// if (isset($_POST["thuchien"])) {
//     $chuoi = $_POST["chuoi"];

//     $doDai = strlen($chuoi);
// }
if (isset($_POST["tinh"])) {
    $chuoi = $_POST["chuoi"];
    for ($i = 0; isset($chuoi[$i]); $i++) {
        $demChuoi++;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>ĐỘ DÀI CHUỖI</h2>
        </div>
        <form action="" method="post">
            <div>
            <table><tr>
                <td><p>Nhập chuỗi: </p></td>
                <td><input type="text" name="chuoi" value="<?php echo $chuoi; ?>"></td>
            </tr>
            <tr>
                <td>            
                    <p>Độ dài chuỗi: </p></td>
                <td><input type="text" value="<?php echo $demChuoi; ?>" readonly></td>
            </tr>
            <tr>
                <td colspan="3"><button class="btn" type="submit" name="tinh">Thực hiện</button></td>
            </tr>
        </form>
        </div>
    </div>
</body>
</html>