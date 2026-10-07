<?php
        $ngay_nhap = '';
        $kq = '';

        if (isset($_POST['okay'])) {
            $ngay_nhap = $_POST['ngay_nhap'] ?? '';

            if (!empty($ngay_nhap)) {
                $date = DateTime::createFromFormat('d/m/Y', trim($ngay_nhap));

                if ($date) {
                    $day_of_week = $date->format('N');

                    if ($day_of_week == 6 || $day_of_week == 7) {
                        $kq = "Đây là ngày cuối tuần.";
                    } else {
                        $kq = "Đây không phải là ngày cuối tuần.";
                    }
                } else {
                    $kq = "Định dạng không hợp lệ! (d/m/y)";
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
    <title>Kiểm tra ngày</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Kiểm tra ngày</h1>
        </div>
        <table>
            <tr>
                <td>Nhập</td>
                <td><input type="text" name="ngay_nhap" value="<?php echo htmlspecialchars($ngay_nhap) ?>"></td>
            </tr>
            <tr>
                <td>Kiểm tra:</td>
                <td><input type="text" value="<?php echo htmlspecialchars($kq) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><button name="okay" class="btn">Thực hiện</button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>