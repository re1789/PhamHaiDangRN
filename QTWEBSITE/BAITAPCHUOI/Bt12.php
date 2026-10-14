<?php
    $nhap1 = '';
    $nhap2 = '';
    $kq = '';
    if(isset($_POST['okay'])) {
        $nhap1 = $_POST['nhap1'] ?? '';
        $nhap2 = $_POST['nhap2'] ?? '';

        if($nhap1 !== '' && $nhap2 !== '') {
            if(strpos($nhap1, $nhap2) !== false) {
                $kq = "Chuỗi con có tồn tại trong chuỗi";
            } else {
                $kq = "Chuỗi con không tồn tại";
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
    <title>Kiểm tra chuỗi con</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Kiểm tra chuỗi con</h1>
        </div>
        <table>
            <tr>
                <td>Nhập chuỗi:</td>
                <td><input type="text" required name="nhap1" value="<?php echo htmlspecialchars($nhap1) ?>"></td>
            </tr>
            <tr>
                <td>Nhập chuỗi con:</td>
                <td><input type="text" required name="nhap2" value="<?php echo htmlspecialchars($nhap2) ?>"></td>
            </tr>
            <tr>
                <td>Kết quả:</td>
                <td><input type="text" readonly value="<?php echo htmlspecialchars($kq) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><Button class="btn" name="okay">Thực hiện</Button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>