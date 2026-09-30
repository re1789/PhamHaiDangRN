<?php
    $hientai ='';
$snke = '';
$kq = '';
    if(isset($_POST['okay'])) {
        $hientai = $_POST['inpT1'];
        $snke = $_POST['inpT2'];
        $kq = $_POST['outP'];

        $date1 = DateTime::createFromFormat('d/m/Y', trim($hientai));
        $date2 = DateTime::createFromFormat('d/m/Y', trim($snke));

        if($date1 && $date2 == !null) {
            $tinh = $date1 -> diff($date2);
            $nam = $tinh -> y;
            $thang = $tinh -> m;
            $ngay = $tinh -> d;

            $kq = "Cách nhau {$nam} năm {$thang} tháng và {$ngay} ngày.";
        } 
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Tính khoảng cách</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Tính khoảng cách</h1>
        </div>
        <table>
            <tr>
                <td>Ngày hiện tại:</td>
                <td><input type="text" required name="inpT1" value="<?php echo htmlspecialchars($hientai) ?>"></td>
            </tr>
            <tr>
                <td>Nhập sinh nhật kế:</td>
                <td><input type="text" required name="inpT2" value="<?php echo htmlspecialchars($snke) ?>"></td>
            </tr>
            <tr>
                <td>Khoảng cách:</td>
                <td><marquee behavior="" direction="right"><input type="text" readonly name="outP" value="<?php echo htmlspecialchars($kq) ?>"></marquee></td>
            </tr>
            <tr>
                <td colspan="3"><Button type="submit" name="okay" class="btn"><span data-text="Thực hiện">Thực hiện</span></Button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>