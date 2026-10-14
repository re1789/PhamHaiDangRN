<?php
$chuoi = '';
$kq = '';
if (isset($_POST['chuoi'])) {
    $chuoi = trim($_POST['chuoi']);
    $kq = str_word_count($chuoi);
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
            <h2>ĐẾM SỐ TỪ CÓ TRONG 1 CHUỖI</h2>
        </div>
        <form action="" method="post">
            <table>
                <tr>
                    <td><p>Nhập chuỗi:</p></td>
                    <td><input type="text" name="chuoi" value="<?php echo htmlspecialchars($chuoi); ?>"></td>
                </tr>
                <tr>
                    <td><p>Số từ có trong từng chuỗi:</p></td>
                    <td><input type="text" value="<?php echo htmlspecialchars($kq); ?>"></td>
                </tr>
                <tr>
                    <td colspan="3"><button name="thuchien" class="btn">Thực hiện</button></td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>