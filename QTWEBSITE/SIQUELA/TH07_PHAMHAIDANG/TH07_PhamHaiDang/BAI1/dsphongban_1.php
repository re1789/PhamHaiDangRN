<?php
    $connect = mysqli_connect('localhost', 'root', '', 'qlnhanvien');

    if(!$connect) {
        die("Kết nối thất vọng: " . mysqli_connect_error());
    }

    mysqli_set_charset($connect, "UTF8");

    $sql = ("SELECT * FROM phongban");

    $result = mysqli_query($connect, $sql)
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>DANH SÁCH PHÒNG BAN</title>
</head>
<body>
    <div>
        <h1>DANH SÁCH NHÂN VIÊN</h1>
    </div>
    <table>
        <tr>
            <th>Mã phòng ban</th>
            <th>Tên phòng ban</th>
        </tr>
        <?php
            if($result && mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {

                    echo "<tr>";
                    echo "<td class='text-center'>" . htmlspecialchars($row["mapb"]) . "</td>";
                    echo "<td>" . htmlspecialchars($row["tenpb"]) . "</td>";
                }
            } else {
                echo "<tr><td colspan = '7'>Không có dữ liệu</td></td>";
            }
        ?>
    </table>
</body>
</html>