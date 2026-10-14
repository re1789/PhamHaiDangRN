<?php
    $nhap = '';
    $pass = '';
    $kq = '';

    $data = [
        'user1' => '123456',
        'user2' => '13579',
        'user3' => '246810'
    ];

    if(isset($_POST['okay'])) {
        $nhap = $_POST['nhap'] ?? '';
        $pass = $_POST['pass'] ?? '';

        if(isset($data[$nhap]) && $data[$nhap] == $pass) {
            $kq = "Đăng nhập thành công";
        } else {
            $kq = "Đăng nhập thất bại";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Kiểm tra username và password</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Kiểm tra username và password</h1>
        </div>
        <table>
            <tr>
                <td>Nhập username:</td>
                <td><input type="text" required name="nhap" value="<?php echo htmlspecialchars($nhap) ?>"></td>
            </tr>
            <tr>
                <td>Nhập password:</td>
                <td><input type="password" required name="pass" value="<?php echo htmlspecialchars($pass) ?>"></td>
            </tr>
            <tr>
                <td>Kết quả:</td>
                <td><input type="text" readonly value="<?php echo htmlspecialchars($kq)?>"></td>
            </tr>
            <tr>
                <td colspan="3"><button class="btn" name="okay">Thực hiện</button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>