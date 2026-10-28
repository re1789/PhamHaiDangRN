<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thông Tin Chi Tiết Các Loại Sữa - Phân Trang</title>
    <link rel="stylesheet" href="./styles/bt8.css">
</head>
<body>

    <h2>THÔNG TIN CHI TIẾT CÁC LOẠI SỮA</h2>

    <?php
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");

    $rows_per_page = 3;
    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    if ($page < 1) $page = 1;
    $offset = ($page - 1) * $rows_per_page;

    $sql_total = "SELECT COUNT(*) as total FROM sua";
    $result_total = mysqli_query($conn, $sql_total);
    $row_total = mysqli_fetch_assoc($result_total);
    $total_rows = $row_total['total'];
    $total_pages = ceil($total_rows / $rows_per_page);

    $sql = "SELECT sua.*, hang_sua.Ten_hang_sua 
            FROM sua 
            JOIN hang_sua ON sua.Ma_hang_sua = hang_sua.Ma_hang_sua 
            LIMIT $offset, $rows_per_page";
    
    $result = mysqli_query($conn, $sql);

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

    <div class="pagination">
        <?php
        if ($page > 1) {
            echo "<a href='?page=" . ($page - 1) . "'>&lt;&lt;</a> ";
        } else {
            echo "<span>&lt;&lt;</span> ";
        }

        for ($i = 1; $i <= $total_pages; $i++) {
            if ($i == $page) {
                echo "<span>$i</span> ";
            } else {
                echo "<a href='?page=$i'>$i</a> ";
            }
        }

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