<?php
        $today = '';
        $yesterday = '';

        if (isset($_POST['okay'])) {
            $today = $_POST['today'] ?? '';

            if (!empty($today)) {
                $date = DateTime::createFromFormat('d/m/Y', trim($today));

                if ($date) {
                    $date->modify('-1 day');
                    $yesterday = $date->format('d/m/Y');
                } else {
                    $yesterday = "Định dạng không hợp lệ! (d/m/y)";
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
    <title>Chuyển tháng thành chữ</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Ngày hôm qua</h1>
        </div>
        <table>
            <tr>
                <td>Ngày hiện tại:</td>
                <td><input type="text" name="today" value="<?php echo htmlspecialchars($today) ?>"></td>
            </tr>
            <tr>
                <td>Ngày hôm qua</td>
                <td><input type="text" name="yesterday" value="<?php echo htmlspecialchars($yesterday) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><button name="okay" class="btn">Thực hiện</button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>