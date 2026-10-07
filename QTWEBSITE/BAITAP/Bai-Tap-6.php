<?php
    $ngay_nhap = '';
    $kq = '';

    if (isset($_POST['okay'])) {
        $ngay_nhap = $_POST['ngay_nhap'] ?? '';
        $kq = $_POST['kq'] ?? '';

        if (!empty($ngay_nhap)) {
            $parts = explode('/', trim($ngay_nhap));

            if (count($parts) === 3 && is_numeric($parts[0]) && is_numeric($parts[1]) && is_numeric($parts[2])) {
                $day = (int)$parts[0];
                $month = (int)$parts[1];
                $year = (int)$parts[2];

                if (checkdate($month, $day, $year)) {
                    $kq = "Ngày hợp lệ";
                } else {
                    $kq = "Ngày không hợp lệ";
                }
            } else {
                $kq = "Ngày không hợp lệ";
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
    <title>Kiểm tra ngày hợp lệ</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Kiểm tra ngày hợp lệ</h1>
        </div>
        <table>
            <tr>
                <td>Nhập</td>
                <td><input type="text" name="ngay_nhap" value="<?php echo htmlspecialchars($ngay_nhap) ?>"></td>
            </tr>
            <tr>
                <td>Kiểm tra:</td>
                <td><input type="text" name="kq" value="<?php echo htmlspecialchars($kq) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><button name="okay" class="btn">Thực hiện</button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>