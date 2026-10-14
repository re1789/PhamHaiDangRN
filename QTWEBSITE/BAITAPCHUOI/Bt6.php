<?php 
    $nhap = '';
    $chu1 = '';
    $chu2 = '';
    $kytu = '';

    if(isset($_POST['okay'])){
        $nhap = $_POST['nhap'] ?? '';

        $chucai = 0;
        $chuso = 0;
        $dacbiet = 0;
        $i = 0;

        while(isset($nhap[$i])){
            $char = $nhap[$i];

            if(preg_match('/^[a-zA-ZÀ-ỹ]$/u', $char)){
                $chucai++;
            } 
            elseif(is_numeric($char)){
                $chuso++;
            } 
            elseif($char !== ' ') {
                $dacbiet++;
            }
            $i++;
        }

        $chu1 = $chucai;
        $chu2 = $chuso;
        $kytu = $dacbiet;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Đếm số ký tự trong chuỗi</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h2>ĐẾM SỐ KÝ TỰ TRONG CHUỖI</h2>
        </div>
        <table>
            <tr>
                <td>Nhập chuỗi:</td>
                <td><input type="text" required name="nhap" value="<?php echo htmlspecialchars($nhap) ?>"></td>
            </tr>
            <tr>
                <td>Số chữ cái:</td>
                <td><input type="text" readonly value="<?php echo htmlspecialchars($chu1) ?>"></td>
            </tr>
            <tr>
                <td>Số chữ số:</td>
                <td><input type="text" readonly value="<?php echo htmlspecialchars($chu2) ?>"></td>
            </tr>
            <tr>
                <td>Số ký tự đặc biệt:</td>
                <td><input type="text" readonly value="<?php echo htmlspecialchars($kytu) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><button class="btn" name="okay">Đếm</button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>