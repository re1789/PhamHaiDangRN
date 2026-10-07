    <?php
        $num = '';
        $char = '';

        if(isset($_POST['okay'])){
            $num = $_POST['num'] ?? '';

            if(is_numeric($num)){
                $thang = (int)$num;

                $listM = [
                    1  => 'January',
                    2  => 'February',
                    3  => 'March',
                    4  => 'April',
                    5  => 'May',
                    6  => 'June',
                    7  => 'July',
                    8  => 'August',
                    9  => 'September',
                    10 => 'October',
                    11 => 'November',
                    12 => 'December',
                ];

                if(isset($listM[$thang])){
                    $char = $listM[$thang];
                }else{
                    $char = "Tháng không hợp lệ! (1-12)";
                }
            }else if(!empty($num)){
                $char = "Vui lòng nhập số!";
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
            <h1>Chuyển tháng thành chữ</h1>
        </div>
        <table>
            <tr>
                <td>Nhập tháng(số):</td>
                <td><input type="text" name="num" value="<?php echo htmlspecialchars($num) ?>"></td>
            </tr>
            <tr>
                <td>Tháng(chữ)</td>
                <td><input type="text" name="char" value="<?php echo htmlspecialchars($char) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><button name="okay" class="btn">Thực hiện</button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>