<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thông Tin Các Sản Phẩm - Dạng Cột</title>
    <link rel="stylesheet" href="./styles/bt6.css">
</head>
<body>

    <h2>THÔNG TIN CÁC SẢN PHẨM</h2>

    <?php
    // 1. Kết nối vào MySQL với user là root và mật khẩu rỗng
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");

    // Kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }

    // Thiết lập bảng mã tiếng Việt
    mysqli_set_charset($conn, "utf8");

    // 2. Đọc bảng sua[cite: 2, 7]
    $sql = "SELECT * FROM sua";
    $result = mysqli_query($conn, $sql);
    ?>

    <table class="main-table">
        <?php
        if (mysqli_num_rows($result) > 0) {
            $col_count = 0;
            $cols_per_row = 5; // Yêu cầu: mỗi dòng có 5 cột[cite: 7]

            while ($row = mysqli_fetch_assoc($result)) {
                // Nếu là cột đầu tiên của dòng, mở thẻ <tr>
                if ($col_count % $cols_per_row == 0) {
                    echo "<tr>";
                }

                // Định dạng dữ liệu
                $don_gia = number_format($row['Don_gia'], 0, ',', '.') . " VNĐ";
                $trong_luong = $row['Trong_luong'] . " gr";
                $hinh = $row['Hinh'];

                echo "<td>";
                echo "<div class='product-name'>" . htmlspecialchars($row['Ten_sua']) . "</div>";
                echo "<div class='product-info'>" . $trong_luong . " - " . $don_gia . "</div>";
                echo "<div class='product-img'><img src='Image/" . htmlspecialchars($hinh) . "' alt='" . htmlspecialchars($row['Ten_sua']) . "'></div>";
                echo "</td>";

                $col_count++;

                // Nếu đã đủ 5 cột, đóng thẻ </tr>
                if ($col_count % $cols_per_row == 0) {
                    echo "</tr>";
                }
            }

            // Nếu số lượng sản phẩm không chia hết cho 5, điền các ô trống để giữ khung bảng đều đẹp
            if ($col_count % $cols_per_row != 0) {
                $remaining = $cols_per_row - ($col_count % $cols_per_row);
                for ($i = 0; $i < $remaining; $i++) {
                    echo "<td></td>";
                }
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='5' align='center'>Không có sản phẩm nào trong cơ sở dữ liệu</td></tr>";
        }
        ?>
    </table>

    <?php
    // Đóng kết nối cơ sở dữ liệu
    mysqli_close($conn);
    ?>

</body>
</html>