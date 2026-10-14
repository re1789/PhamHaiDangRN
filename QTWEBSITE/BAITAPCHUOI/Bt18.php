<?php 
    $nhap = '';
    $child = '';
    $locate = '';
    $kq = '';
    if(isset($_POST['okay'])) {
        $nhap = $_POST['nhap'] ?? '';
        $child = $_POST['child'] ?? '';
        $locate = $_POST['locate'] ?? '';

        if($nhap !== '' && $child !== '' && $locate !== '') {
            $kq = substr_replace($nhap, $child . " ", $locate, 0);
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Chèn chuỗi con</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Chèn chuỗi con</h1>
        </div>
        <table>
            <tr>
                <td>Nhập chuỗi:</td>
                <td><input type="text" required name="nhap" value="<?php echo htmlspecialchars($nhap) ?>"></td>
            </tr>
            <tr>
                <td>VNhập chuỗi con:</td>
                <td><input type="text" required name="child" value="<?php echo htmlspecialchars($child) ?>"></td>
            </tr>
            <tr>
                <td>Vị trí:</td>
                <td><input type="text" required name="locate" value="<?php echo htmlspecialchars($locate) ?>"></td>
            </tr>
            <tr>
                <td>Kết quả:</td>
                <td><input type="text" readonly name="kq" value="<?php echo htmlspecialchars($kq) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><Button class="btn" name="okay">Thực hiện</Button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>