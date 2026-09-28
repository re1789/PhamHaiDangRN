<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đếm số lần xuất hiện và tạo mảng duy nhất</title>
    <link rel="stylesheet" href="./Cau-2-style.css">
</head>
<body>
    <?php
        $mang = '';
        $xuathien = '';
        $duynhat = '';

        if(isset($_POST['okay'])){
            $mang = trim((string)($_POST['txt'] ?? ''));
            $dcbs = preg_split('/\s*,\s*/', $mang);

            $numbers = [];
		    foreach ($dcbs as $dcbb) {
			    $so[] = (int)$dcbb;
		    }

            $count = array_count_values($so);
            $xuathien = implode(' ', array_map( static fn($so, $count) => $so . ':' . $count, array_keys($count), array_values($count)));


            $duynhat = implode(', ', array_keys($count));
        }
    ?>
    <form action="./Cau-2.php" method="post">
        <div class="container">
            <div class="header">
                <h1>Đếm số lần xuất hiện và tạo mảng duy nhất</h1>
            </div>
            <table>
                <tr>
                    <td><p>Mảng:</p></td>
                    <td><input type="text" name="txt" required value="<?php echo htmlspecialchars($_POST['txt'] ?? ''); ?>"></td>
                </tr>
                <tr>
                    <td><p>Số lần xuất hiện:</p></td>
                    <td><input type="text" name="" readonly value="<?php echo htmlspecialchars($xuathien) ?>"></td>
                </tr>
                <tr>
                    <td><p>Mảng duy nhất:</p></td>
                    <td><input type="text" name="" readonly value="<?php echo htmlspecialchars($duynhat) ?>"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit" name="okay">Thực hiện</button></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>