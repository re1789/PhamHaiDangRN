<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chi Tiết Sản Phẩm</title>
    <link rel="stylesheet" href="./styles/bt7.2.css">
</head>
<body>

    <?php
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");

    $ma_sua = isset($_GET['ma_sua']) ? $_GET['ma_sua'] : '';

    $sql = "SELECT sua.*, hang_sua.Ten_hang_sua 
            FROM sua 
            JOIN hang_sua ON sua.Ma_hang_sua = hang_sua.Ma_hang_sua 
            WHERE sua.Ma_sua = '" . mysqli_real_escape_string($conn, $ma_sua) . "'";
    
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
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

        <tr>
            <td colspan="2" class="back-link">
                <a href="bt7.1.php">Quay về</a>
            </td>
        </tr>
    </table>

    <?php
    } else {
        echo "<p align='center'>Không tìm thấy thông tin sản phẩm!</p>";
        echo "<p align='center'><a href='bt7.1.php'>Quay về danh sách</a></p>";
    }

    mysqli_close($conn);
    ?>

</body>
</html>