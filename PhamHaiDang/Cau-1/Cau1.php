<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tính năm âm lịch</title>
    <link rel="stylesheet" href="./Cau-1-style.css">
</head>
<body>
    <?php
        $can = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
        $chi = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
        $congiap = ['ti.JPG'];
    ?>
    <form action="" method="post">
        <div class="container">
            <div class="header">
                <h1>Tính năm âm lịch</h1>
            </div>
            <table>
                <tr>
                    <td><p>Năm dương lịch</p></td>
                    <td></td>
                    <td>Năm âm lịch</td>
                </tr>
                <tr>
                    <td><input type="text"></td>
                    <td><button class="btn"> => </button></td>
                    <td><input type="text" readonly></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <img src="<?php htmlspecialchars($congiap) ?>" alt="">
                    </td>
                    <td></td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>