<?php 
    $nhap = '';
    $kq = '';
    if(isset($_POST['okay'])){
        $nhap = $_POST['nhap'] ?? '';
        if($nhap !== ''){
            $mang = explode(',', $nhap);
            $mang = array_map('trim', $mang);
            sort($mang);
            $kq = implode(', ', $mang);
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Sắp xếp các chuỗi</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Sắp xếp các chuỗi</h1>
        </div>
        <table>
            <tr>
                <td>Nhập chuỗi:</td>
                <td><input type="text" required name="nhap" value="<?php echo htmlspecialchars($nhap) ?>"></td>
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