<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thông Tin Khách Hàng - Hiển Thị Ảnh Giới Tính</title>
</head>
<body>

    <h2 align="center">THÔNG TIN KHÁCH HÀNG</h2>

    <?php
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");

    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");

    $sql = "SELECT * FROM khach_hang";
    $result = mysqli_query($conn, $sql);
    ?>

    <table border="1" cellspacing="0" cellpadding="8" align="center" width="80%">
        <tr bgcolor="#ffc000">
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
                $gioi_tinh = $row['Phai'];
                if ($gioi_tinh == 1) {
                    $img_tag = "<img src='Image/girl.jpg' width='30' alt='Nữ'>";
                } else {
                    $img_tag = "<img src='Image/chad.jpg' width='30' alt='Nam'>";
                }
                echo "<td>" . $row['Ma_khach_hang'] . "</td>";
                echo "<td>" . $row['Ten_khach_hang'] . "</td>";
                echo "<td align='center'>" . $img_tag . "</td>";
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
    mysqli_close($conn);
    ?>

</body>
</html>