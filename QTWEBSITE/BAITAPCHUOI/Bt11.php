<?php 
    $nhap = '';
    $start = '';
    $length = '';
    $kq = '';
    if(isset($_POST['okay'])) {
        $nhap = $_POST['nhap'] ?? '';
        $start = $_POST['start'] ?? '';
        $length = $_POST['length'] ?? '';
        if($nhap !== '' && $start !== '' && $length !== '') {
            $kq = substr($nhap, $start, $length);
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Lấy chuỗi con từ một chuỗi</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Lấy chuỗi con từ một chuỗi</h1>
        </div>
        <table>
            <tr>
                <td>Nhập chuỗi:</td>
                <td><input type="text" required name="nhap" value="<?php echo htmlspecialchars($nhap) ?>"></td>
            </tr>
            <tr>
                <td>Vị trí bắt đầu:</td>
                <td><input type="text" required name="start" value="<?php echo htmlspecialchars($start) ?>"></td>
            </tr>
            <tr>
                <td>Độ dài:</td>
                <td><input type="text" required name="length" value="<?php echo htmlspecialchars($length) ?>"></td>
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