<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tìm kiếm mảng</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <?php
        $mang = [];
        $find = '';
        $kq = '';

        if (isset($_POST['okay'])) {
            $txt = $_POST['txt'] ?? '';
            $find = trim($_POST['find'] ?? '');
            $mang = array_map('trim', explode(',', $txt));
            $mang = array_values(array_filter($mang, fn($value) => $value !== ''));

            $vitri = array_search((string)$find, $mang, true);
            if ($vitri !== false) {
                $kq = 'Tìm thấy ' . $find . ' tại vị trí thứ ' . ($vitri + 1) .  ' trong mảng';
            }
            else{
                $kq = 'Không tìm thấy ' . $find . ' trong mảng';
            }
        }
    ?>
    <form action="timkiem-mang.php" method="post">
        <div class="container">
            <div class="header">
                <h1>TÌM KIẾM</h1>
            </div>
            <table class="content">
                <tr>
                    <td><p>Nhập mảng:</p></td>
                    <td><input type="text" name="txt" value="<?php echo htmlspecialchars($_POST['txt'] ?? ''); ?>"></td>
                </tr>
                <tr>
                    <td>Nhập số cần tìm:</td>
                    <td><input type="text" name="find" value="<?php echo htmlspecialchars($_POST['find'] ?? ''); ?>"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit" name="okay" class="btn">Tìm kiếm</button></td>
                </tr>
                <tr>
                    <td><p>Mảng:</p></td>
                    <td><input type="text" disabled="disabled" value="<?php echo htmlspecialchars(implode(', ', $mang)); ?>"></td>
                </tr>
                <tr>
                    <td><p>Kết quả tìm kiếm:</p></td>
                    <td><input type="text" disabled="disabled" value="<?php echo htmlspecialchars($kq); ?>"></td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>