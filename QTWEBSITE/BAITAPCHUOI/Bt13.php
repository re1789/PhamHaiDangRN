<?php
    $nhap = '';
    $select = '';
    $kq = '';

    if(isset($_POST['okay'])) {
        $nhap = $_POST['nhap'] ?? '';
        $select = $_POST['select'] ?? '';

        if($nhap !== ''){
            if($select == "thuong"){
                $kq = mb_strtolower($nhap, 'UTF-8');
            } else if ($select == "hoa"){
                $kq = mb_strtoupper($nhap, 'UTF-8');
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
    <title>Chuyển chữ hoa thành chữ thường và ngược lại</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Chuyển chữ hoa thành chữ thường và ngược lại</h1>
        </div>
        <table>
            <tr>
                <td>Nhập chuỗi:</td>
                <td><input type="text" required name="nhap" value="<?php echo htmlspecialchars($nhap) ?>"></td>
            </tr>
            <tr>
                <td>Kiểu chuyển chuỗi:</td>
                <td>
                    <select name="select" id="cb">
                        <option value="thuong" <?php if($select == 'thuong') echo 'selected' ?>>Thường</option>
                        <option value="hoa" <?php if($select == 'hoa') echo 'selected' ?>>Hoa</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Kết quả:</td>
                <td><input type="text" readonly name="kq" value="<?php echo htmlspecialchars($kq) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><button class="btn" name="okay">Thực hiện</button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>