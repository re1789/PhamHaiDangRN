<?php
    $day1 = '';
    $day2 = '';
    $kq = '';

    if (isset($_POST['okay'])) {
        $day1 = $_POST['day1'] ?? '';
        $day2 = $_POST['day2'] ?? '';
        $ket_qua =$_POST['kq'] ?? '';

        if (!empty($day1) && !empty($day2)) {
            $date1 = DateTime::createFromFormat('d/m/Y', trim($day1));
            $date2 = DateTime::createFromFormat('d/m/Y', trim($day2));

            if ($date1 && $date2) {
                if ($date1 == $date2) {
                    $kq = "2 thời gian = nhau";
                } elseif ($date1 < $date2) {
                    $kq = "Ngày thứ nhất < Ngày thứ hai";
                } else {
                    $kq = "Ngày thứ nhất > Ngày thứ hai";
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
    <title>So sánh 2 ngày</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>So sánh 2 ngày</h1>
        </div>
        <table>
            <tr>
                <td>Nhập ngày 1</td>
                <td><input type="text" name="day1" value="<?php echo htmlspecialchars($day1)?>"></td>
            </tr>
            <tr>
                <td>Nhập ngày 2</td>
                <td><input type="text" name="day2" value="<?php echo htmlspecialchars($day2)?>"></td>
            </tr>
            <tr>
                <td>Kiểm tra</td>
                <td><input type="text" name="kq" readonly value="<?php echo htmlspecialchars($kq)?>"></td>
            </tr>
            <tr>
                <td colspan="3"><Button class="btn" name="okay">Thực hiện</Button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>