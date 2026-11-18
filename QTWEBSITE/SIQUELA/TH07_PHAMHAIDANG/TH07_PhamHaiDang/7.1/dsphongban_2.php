<?php
    $locahost = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'qlnhanvien';

    $connect = new mysqli($locahost, $user, $pass, $db);

    if(!$connect) {
        die("Kết nối thất vọng: " . $connect -> connect_error);
    }

    mysqli_set_charset($connect, "UTF8");

    $sql = ("SELECT manv, CONCAT(ho, ' ', ten) AS hoten, phai, ngaysinh, diachi, mapb FROM nhanvien");

    $result = mysqli_query($connect, $sql)
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Danh sách nhân viên</title>
</head>
<body>
    <div>
        <h1>DANH SÁCH PHÒNG BAN</h1>
    </div>
    <table>
        <tr>
            <th>STT</th>
            <th>Mã nhân viên</th>
            <th>Họ tên</th>
            <th>Phái</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Phòng ban</th>
        </tr>
        <?php
            if($result && mysqli_num_rows($result) > 0) {
                $stt = 1;
                while ($row = mysqli_fetch_assoc($result)) {
                    $phai_txt = ($row["phai"] == 1 || strtolower($row["phai"]) == 'nam') ? "Nam" : "Nữ";

                    echo "<tr>";
                    echo "<td class='text-center'>" . $stt++ . "</td>";
                    echo "<td class='text-center'>" . htmlspecialchars($row["manv"]) . "</td>";
                    echo "<td>" . htmlspecialchars($row["hoten"]) . "</td>";
                    echo "<td class='text-center'>" . htmlspecialchars($phai_txt) . "</td>";
                    echo "<td class='text-center'>" . htmlspecialchars($row["ngaysinh"]) . "</td>";
                    echo "<td>" . htmlspecialchars($row["diachi"]) . "</td>";
                    echo "<td class='text-center'>" . htmlspecialchars($row["mapb"]) . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan = '7'>Không có dữ liệu</td></td>";
            }
        ?>
    </table>
</body>
</html>