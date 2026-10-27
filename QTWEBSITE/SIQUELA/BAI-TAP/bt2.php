<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thông Tin Khách Hàng</title>
</head>
<body>

    <h2 align="center">THÔNG TIN KHÁCH HÀNG</h2>

    <?php
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");

    // Kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }

    mysqli_set_charset($conn, "utf8");

    $sql = "SELECT * FROM khach_hang";
    $result = mysqli_query($conn, $sql);
    ?>

    <table>
        <tr>
            <th>Mã KH</th>
            <th>Tên khách hàng</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
        </tr>

        <?php
        if (mysqli_num_rows($result) > 0) {
            $count = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                
                echo "<td>" . $row['Ma_khach_hang'] . "</td>";
                echo "<td>" . $row['Ten_khach_hang'] . "</td>";
                echo "<td align='center'>" . $row['Phai'] . "</td>";
                echo "<td>" . $row['Dia_chi'] . "</td>";
                echo "<td>" . $row['Dien_thoai'] . "</td>";
                echo "</tr>";
                
                $count++;
            }
        } else {
            echo "<tr><td colspan='5' align='center'>Không có dữ liệu khách hàng</td></tr>";
        }
        ?>
    </table>

    <?php
    // Đóng kết nối cơ sở dữ liệu
    mysqli_close($conn);
    ?>

</body>
</html>