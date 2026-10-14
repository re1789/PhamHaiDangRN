<?php 
    $nhap1 = '';
    $nhap2 = '';
    $kq = '';
    $kt1 = '';
    $kt2 = '';

    if(isset($_POST['okay'])){
        $nhap1 = $_POST['chuoi1'] ?? '';
        $nhap2 = $_POST['chuoi2'] ?? '';

        $dem1 = 0;
        while(isset($nhap1[$dem1])){
            $dem1++;
        }

        $dem2 = 0;
        while(isset($nhap2[$dem2])){
            $dem2++;
        }

        $kt1 = $dem1;
        $kt2 = $dem2;

        if($dem1 > $dem2){
            $kq = "Chuỗi 1 lớn hơn chuỗi 2.";
        } elseif($dem1 < $dem2){
            $kq = "Chuỗi 1 nhỏ hơn chuỗi 2.";
        } else {
            $kq = "Hai chuỗi bằng nhau.";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Đếm ký tự</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div >
            <h2>ĐẾM KÝ TỰ</h2>
        </div>
        <table>
            <tr>
                <td>Nhập chuỗi 1:</td>
                <td><input type="text" required name="chuoi1" value="<?php echo htmlspecialchars($nhap1) ?>"></td>
            </tr>
            <tr>
                <td>Nhập chuỗi 2:</td>
                <td><input type="text" required name="chuoi2" value="<?php echo htmlspecialchars($nhap2) ?>"></td>
            </tr>
            <tr>
                <td>Kết quả so sánh:</td>
                <td><input type="text" readonly name="kq" value="<?php echo htmlspecialchars($kq) ?>"></td>
            </tr>
            <tr>
                <td>Số ký tự chuỗi 1:</td>
                <td><input type="text" readonly value="<?php echo htmlspecialchars($kt1) ?>"></td>
            </tr>
            <tr>
                <td>Số ký tự chuỗi 2:</td>
                <td><input type="text" readonly value="<?php echo htmlspecialchars($kt2) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><Button class="btn" name="okay">Thực hiện</Button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>