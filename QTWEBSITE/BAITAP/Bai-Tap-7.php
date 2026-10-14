<?php
    $nhap = '';
    $dau = '';
    $cuoi = '';

    if (isset($_POST['okay'])) {
        $nhap = $_POST['nhap'] ?? '';
        $dau = $_POST['dau'] ?? '';
        $cuoi = $_POST['cuoi'] ?? '';

        if (!empty($nhap)) {
            $date = DateTime::createFromFormat('d/m/Y', trim($nhap));

            if ($date) {
                $dau = $date->format('01/m/Y');

                $cuoi = $date->format('t/m/Y');
            } else {
                $dau = "Ngày không hợp lệ!";
                $cuoi = "Ngày không hợp lệ!";
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
    <title>Xuất ngày đầu cuối</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Xuất ngày đầu cuối</h1>
        </div>
        <table>
            <tr>
                <td>Nhập ngày</td>
                <td><input type="text" name="nhap" value="<?php echo htmlspecialchars($nhap)?>"></td>
            </tr>
            <tr>
                <td>Ngày đầu</td>
                <td><input type="text" name="dau" readonly value="<?php echo htmlspecialchars($dau)?>"></td>
            </tr>
            <tr>
                <td>Ngày cuối</td>
                <td><input type="text" name="cuoi" readonly value="<?php echo htmlspecialchars($cuoi)?>"></td>
            </tr>
            <tr>
                <td colspan="3"><Button class="btn" name="okay">Thực hiện</Button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>