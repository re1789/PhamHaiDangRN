<?php
$chuoi = "";
$kq = "";
if (isset($_POST["thuchien"])) {
    $chuoi = $_POST["chuoi"];
    for ($i = 0; $i < strlen($chuoi); $i++) {
        if ($chuoi[$i] != " ") {
            $kq .= $chuoi[$i] . ", ";
        }
    }
    $kq = substr($kq, 0, strlen($kq) - 2);
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
        <div class="title">
            <h2>CHIA CHUỖI THÀNH CÁC KÝ TỰ</h2>
        </div>
        <form action="" method="post">
            <div class="content">
            </div>
            <table>
                <tr>
                    <td><p>Nhập chuỗi: </p></td>
                    <td><input type="text" name="chuoi" value="<?php echo $chuoi ?>"></td>
                </tr>
                <tr>
                    <td><p>Các ký tự riêng lẻ: </p></td>
                    <td><input type="text" value="<?php echo $kq  ?>" readonly></td>
                </tr>
                <tr>
                    <td colspan="3"><button name="thuchien" class="nut">Thực hiện</button></td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>