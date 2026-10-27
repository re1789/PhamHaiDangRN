<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thông Tin Các Sản Phẩm - Dạng Cột Có Link</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h2 {
            text-align: center;
            color: #b22222;
        }
        table.main-table {
            width: 90%;
            margin: 0 auto;
            border-collapse: collapse;
            border: 1px solid #bbb;
        }
        table.main-table td {
            border: 1px solid #bbb;
            padding: 10px;
            text-align: center;
            vertical-align: top;
            width: 20%;
        }
        .product-name a {
            font-weight: bold;
            color: #b22222;
            font-size: 14px;
            text-decoration: none;
        }
        .product-name a:hover {
            text-decoration: underline;
        }
        .product-info {
            font-size: 13px;
            margin-bottom: 8px;
            margin-top: 4px;
        }
        .product-img img {
            max-width: 80px;
            height: auto;
        }
    </style>
</head>
<body>

    <h2>THÔNG TIN CÁC SẢN PHẨM</h2>

    <?php
    // Kết nối MySQL với tài khoản root, mật khẩu rỗng
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");

    // Đọc bảng sua
    $sql = "SELECT * FROM sua";
    $result = mysqli_query($conn, $sql);
    ?>

    <table class="main-table">
        <?php
        if (mysqli_num_rows($result) > 0) {
            $col_count = 0;
            $cols_per_row = 5; // Mỗi dòng 5 cột

            while ($row = mysqli_fetch_assoc($result)) {
                if ($col_count % $cols_per_row == 0) {
                    echo "<tr>";
                }

                $don_gia = number_format($row['Don_gia'], 0, ',', '.') . " VNĐ";
                $trong_luong = $row['Trong_luong'] . " gr";
                $hinh = $row['Hinh'];
                $ma_sua = $row['Ma_sua'];

                echo "<td>";
                // Tạo link truyền mã sữa sang trang chi tiết[cite: 8]
                echo "<div class='product-name'><a href='bt7.2.php?ma_sua=" . urlencode($ma_sua) . "'>" . htmlspecialchars($row['Ten_sua']) . "</a></div>";
                echo "<div class='product-info'>" . $trong_luong . " - " . $don_gia . "</div>";
                echo "<div class='product-img'><img src='Image/" . htmlspecialchars($hinh) . "' alt='" . htmlspecialchars($row['Ten_sua']) . "'></div>";
                echo "</td>";

                $col_count++;

                if ($col_count % $cols_per_row == 0) {
                    echo "</tr>";
                }
            }

            // Điền các ô trống nếu số lượng sản phẩm không chia hết cho 5
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
    mysqli_close($conn);
    ?>

</body>
</html>