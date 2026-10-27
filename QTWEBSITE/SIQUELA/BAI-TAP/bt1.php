<?php
    $server = 'localhost';
    $username = 'root';
    $pass = '';
    $dbname = 'ql_ban_sua';

    $conn = new mysqli( $server, $username, $pass, $dbname);
    $result = $conn -> query("SELECT * FROM hang_sua")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Thông tin hãng sữa</title>
</head>
<body>
    
    <table>
        <div class="title">
            <h1>THÔNG TIN HÃNG SỮA</h1>
        </div>
        <tr>
            <th>Mã HS</th>
            <th>Tên hãng sữa</th>
            <th>Địa chỉ</th>
            <th>Điện thoại</th>
            <th>Email</th>
        </tr>
        <?php while($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?= $row['Ma_hang_sua'] ?></td>
                <td><?= $row['Ten_hang_sua'] ?></td>
                <td><?= $row['Dia_chi'] ?></td>
                <td><?= $row['Dien_thoai'] ?></td>
                <td><?= $row['Email'] ?></td>
            </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>