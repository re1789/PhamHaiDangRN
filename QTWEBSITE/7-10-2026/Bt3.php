<?php
$chuoi = "";
$kq = "";
if (isset($_POST['chuoi'])) {
    $chuoi = $_POST['chuoi'];
    $kyTu = str_split($chuoi);
    $kyTu = array_reverse($kyTu);
    $kq = implode(', ', $kyTu);
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
            <h2>Chia Chuỗi Thành Các Ký Tự Đảo Ngược</h2>
        </div>
        <form action="" method="post">
            <div class="content">   
            </div>
            <table>
                <tr>
                    <td><p>Nhập chuỗi: </p></td>
                    <td><input type="text" name="chuoi" value="<?php echo $chuoi; ?>"></td>
                </tr>
                <tr>
                    <td><p>Các ký tự riêng lẻ: </p></td>
                    <td><input type="text" value="<?php echo $kq; ?>" readonly></td>
                </tr>
                <tr>
                    <td colspan="3"><button type="submit" name="thuchien" class="nut">Thực hiện</button></td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>