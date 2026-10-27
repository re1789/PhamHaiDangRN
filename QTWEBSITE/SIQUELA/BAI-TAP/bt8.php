<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thông Tin Chi Tiết Các Loại Sữa - Phân Trang</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h2 {
            text-align: center;
            color: #b25900;
            font-style: italic;
        }
        table.detail-table {
            width: 70%;
            margin: 0 auto 20px auto;
            border-collapse: collapse;
            border: 2px solid #b25900;
        }
        th {
            background-color: #fff;
            color: #b25900;
            font-size: 20px;
            font-style: italic;
            padding: 8px;
            border: 1px solid #b25900;
            text-align: center;
        }
        td.img-cell {
            width: 30%;
            text-align: center;
            vertical-align: middle;
            border: 1px solid #bbb;
            padding: 10px;
        }
        td.img-cell img {
            max-width: 130px;
            height: auto;
        }
        td.info-cell {
            width: 70%;
            vertical-align: top;
            border: 1px solid #bbb;
            padding: 10px;
            font-size: 14px;
        }
        .section-title {
            font-weight: bold;
            font-style: italic;
            margin-top: 6px;
            color: #000;
        }
        .price-weight {
            text-align: right;
            font-weight: bold;
            color: #b25900;
            margin-top: 10px;
        }
        .pagination {
            text-align: center;
            margin-top: 20px;
            font-size: 16px;
        }
        .pagination a {
            text-decoration: none;
            color: blue;
            margin: 0 3px;
        }
        .pagination a:hover {
            text-decoration: underline;
        }
        .pagination span {
            color: red;
            font-weight: bold;
            margin: 0 3px;
        }
    </style>
</head>
<body>

    <h2>THÔNG TIN CHI TIẾT CÁC LOẠI SỮA</h2>

    <?php
    // 1. Kết nối vào MySQL với user là root và mật khẩu rỗng
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");

    // 2. Thiết lập phân trang (Yêu cầu: mỗi trang gồm 2 sản phẩm)[cite: 9]
    $rows_per_page = 2;
    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    if ($page < 1) $page = 1;
    $offset = ($page - 1) * $rows_per_page;

    // Tính tổng số lượng sản phẩm để chia trang
    $sql_total = "SELECT COUNT(*) as total FROM sua";
    $result_total = mysqli_query($conn, $sql_total);
    $row_total = mysqli_fetch_assoc($result_total);
    $total_rows = $row_total['total'];
    $total_pages = ceil($total_rows / $rows_per_page);

    // 3. Truy vấn dữ liệu cho trang hiện tại (kết hợp bảng sua và hang_sua)[cite: 2, 9]
    $sql = "SELECT sua.*, hang_sua.Ten_hang_sua 
            FROM sua 
            JOIN hang_sua ON sua.Ma_hang_sua = hang_sua.Ma_hang_sua 
            LIMIT $offset, $rows_per_page";
    
    $result = mysqli_query($conn, $sql);

    // 4. Hiển thị thông tin chi tiết các sản phẩm
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $don_gia = number_format($row['Don_gia'], 0, ',', '.') . " VNĐ";
            $trong_luong = $row['Trong_luong'] . " gr";
            ?>
            <table class="detail-table">
                <tr>
                    <th colspan="2"><?php echo htmlspecialchars($row['Ten_sua']) . " - " . htmlspecialchars($row['Ten_hang_sua']); ?></th>
                </tr>
                <tr>
                    <td class="img-cell">
                        <img src="Image/<?php echo htmlspecialchars($row['Hinh']); ?>" alt="<?php echo htmlspecialchars($row['Ten_sua']); ?>">
                    </td>
                    <td class="info-cell">
                        <div class="section-title">Thành phần dinh dưỡng:</div>
                        <div><?php echo htmlspecialchars($row['TP_Dinh_duong']); ?></div>
                        
                        <div class="section-title">Lợi ích:</div>
                        <div><?php echo htmlspecialchars($row['Loi_ich']); ?></div>
                        
                        <div class="price-weight">
                            Trọng lượng: <?php echo $trong_luong; ?> - Đơn giá: <?php echo $don_gia; ?>
                        </div>
                    </td>
                </tr>
            </table>
            <?php
        }
    } else {
        echo "<p align='center'>Không có sản phẩm nào!</p>";
    }
    ?>

    <!-- 5. Thanh phân trang dạng số (<< 1 2 3 ... >>)[cite: 9] -->
    <div class="pagination">
        <?php
        // Nút lùi trang trước (<<)
        if ($page > 1) {
            echo "<a href='?page=" . ($page - 1) . "'>&lt;&lt;</a> ";
        } else {
            echo "<span>&lt;&lt;</span> ";
        }

        // Các số trang[cite: 9]
        for ($i = 1; $i <= $total_pages; $i++) {
            if ($i == $page) {
                echo "<span>$i</span> ";
            } else {
                echo "<a href='?page=$i'>$i</a> ";
            }
        }

        // Nút tiến trang sau (>>)
        if ($page < $total_pages) {
            echo "<a href='?page=" . ($page + 1) . "'>&gt;&gt;</a>";
        } else {
            echo "<span>&gt;&gt;</span>";
        }
        ?>
    </div>

    <?php
    mysqli_close($conn);
    ?>

</body>
</html>