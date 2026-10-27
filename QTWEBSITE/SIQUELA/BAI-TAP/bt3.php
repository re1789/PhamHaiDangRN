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

    // Kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }

    // Thiết lập bảng mã tiếng Việt
    mysqli_set_charset($conn, "utf8");

    // 2. Đọc bảng khach_hang[cite: 2, 4]
    $sql = "SELECT * FROM khach_hang";
    $result = mysqli_query($conn, $sql);
    ?>

    <!-- 3. Xuất thông tin dạng lưới có định dạng, kết hợp hiển thị hình ảnh ở cột giới tính[cite: 4] -->
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
                // Xác định màu nền khác nhau cho dòng chẵn và dòng lẻ[cite: 3]
                $bgcolor = ($count % 2 == 0) ? "#ffffff" : "#fce4d6";
                
                // Xử lý hiển thị ảnh dựa vào cột Phải (1: Nữ, 0: Nam)[cite: 4]
                // Giả định thư mục chứa ảnh cùng cấp với file php tên là 'Image' 
                // và tên file ảnh tương ứng là 'nu.png' và 'nam.png'
                $gioi_tinh = $row['Phai'];
                if ($gioi_tinh == 1) {
                    $img_tag = "<img src='Image/girl.jpg' width='30' alt='Nữ'>";
                } else {
                    $img_tag = "<img src='Image/chad.jpg' width='30' alt='Nam'>";
                }

                echo "<tr bgcolor='$bgcolor'>";
                echo "<td>" . $row['Ma_khach_hang'] . "</td>";
                echo "<td>" . $row['Ten_khach_hang'] . "</td>";
                echo "<td align='center'>" . $img_tag . "</td>"; // Hiển thị hình ảnh thay vì số[cite: 4]
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