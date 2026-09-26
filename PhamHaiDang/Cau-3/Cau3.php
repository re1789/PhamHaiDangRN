<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Cau-3-style.css">
    <title>Tìm phần thử khác nhau giữa hai mảng</title>
</head>
<body>
    <?php
        $mang1 = '';
        $mang2 = '';

        $ptmang1 = '';
        $ptmang2 = '';
        if(isset($_POST['okay'])){
            $mang1 = trim((string)($_POST['txt1'] ?? ''));
	        $mang2 = trim((string)($_POST['txt2'] ?? ''));    

            $pt1 = array_map('trim', explode(',', $mang1));
	        $pt2 = array_map('trim', explode(',', $mang2));

            $pt1 = array_values(array_unique($pt1));
		    $pt2 = array_values(array_unique($pt2));
		    $ptmang1 = implode(', ', array_diff($pt1, $pt2));
		    $ptmang2 = implode(', ', array_diff($pt2, $pt1));
        }
    ?>
    <form action="" method="post">
        <div class="container">
            <div class="header">
                <h1>Tìm phần thử khác nhau giữa hai mảng</h1>
            </div>
            <table>
                <tr>
                    <td><p>Mảng chuỗi thứ nhất:</p></td>
                    <td><input type="text" name="txt1" required value="<?= htmlspecialchars($mang1) ?>"></td>
                </tr>
                <tr>
                    <td><p>Mảng chuỗi thứ hai:</p></td>
                    <td><input type="text" name="txt2" required value="<?= htmlspecialchars($mang2) ?>"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit" name="okay">Phân tích hai mảng</button></td>
                </tr>
                <tr>
                    <td><p>Phần tử chỉ có trong mảng thứ nhất</p></td>
                    <td><input type="text" name="" readonly value="<?= htmlspecialchars($ptmang1) ?>"></td>
                </tr>
                <tr>
                    <td>Phần tử chỉ có trong mảng thứ hai</td>
                    <td><input type="text" name="" readonly value="<?= htmlspecialchars($ptmang2) ?>"></td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>