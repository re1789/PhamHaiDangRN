<?php
    $nhap = '';
    $kq = '';

    if (isset($_POST['okay'])) {
        $nhap = $_POST['nhap'] ?? '';
        if($nhap !== '') {
            if ($nhap == mb_strtoupper($nhap, 'UTF-8') && $nhap !== mb_strtolower($nhap, 'UTF-8')) {
                $kq = "Ký tự " . $nhap . " là chữ hoa";
            } else if ($nhap !== mb_strtoupper($nhap, 'UTF-8') && $nhap == mb_strtolower($nhap, 'UTF-8')) {
                $kq = "Ký tự " . $nhap . " là chữ thường";
            } else {
                $kq = "Nhập chữ cái, không nhập ký tự đặc biệt";
            }
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Kiểm tra chữ hoa - chữ thường</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Kiểm tra chữ hoa - chữ thường</h1>
        </div>
        <table>
            <tr>
                <td>Nhập một ký tự:</td>
                <td><input type="text" name="nhap" required value="<?php echo htmlspecialchars($nhap) ?>"></td>
            </tr>
            <tr>
                <td>Kết quả:</td>
                <td><input type="text" readonly value="<?php echo htmlspecialchars($kq) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><button class="btn" name = "okay">Thực hiện</button></td>
            </tr>
        </table>
    </form>
</body>
</html>