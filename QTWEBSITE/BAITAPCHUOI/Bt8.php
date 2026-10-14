<?php 
    $nhap = '';
    $kq = '';

    if(isset($_POST['okay'])){
        $nhap = $_POST['nhap'] ?? '';

        if($nhap !== ''){
            $count = [];
            $i = 0;

            while(isset($nhap[$i])){
                $char = $nhap[$i];

                if($char !== ' '){
                    if(isset($count[$char])){
                        $count[$char]++;
                    } else {
                        $count[$char] = 1;
                    }
                }
                $i++;
            }

            if(!empty($count)){
                $maxchar = '';
                $maxcount = -1;

                foreach($count as $char => $counting){
                    if($counting > $maxcount){
                        $maxcount = $counting;
                        $maxchar = $char;
                    }
                }

                $kq = "Ký tự " . $maxchar . " xuất hiện nhiều nhất.";
            } else {
                $kq = "Chuỗi chỉ chứa khoảng trắng!";
            }
        } else {
            $kq = "Vui lòng nhập chuỗi!";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Tìm ký tự xuất hiện nhiều nhất</title>
</head>
<body>
    <form action="" method="post" class="container">
        <div class="header">
            <h1>Tìm ký tự xuất hiện nhiều nhất</h1>
        </div>
        <table>
            <tr>
                <td>Nhập chuỗi:</td>
                <td><input type="text" required name="nhap" value="<?php echo htmlspecialchars($nhap) ?>"></td>
            </tr>
            <tr>
                <td>Kết quả:</td>
                <td><input type="text" readonly name="kq" value="<?php echo htmlspecialchars($kq) ?>"></td>
            </tr>
            <tr>
                <td colspan="3"><Button class="btn" name="okay">Thực hiện</Button></td>
            </tr>
        </table>
    </form>
    <script src="./script.js"></script>
</body>
</html>