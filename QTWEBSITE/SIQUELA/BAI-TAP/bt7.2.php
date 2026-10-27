<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chi Tiết Sản Phẩm</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table.detail-table {
            width: 70%;
            margin: 0 auto;
            border-collapse: collapse;
            border: 2px solid #b25900;
        }
        th {
            background-color: #fff;
            color: #b25900;
            font-size: 22px;
            font-style: italic;
            padding: 10px;
            border: 1px solid #b25900;
            text-align: center;
        }
        td.img-cell {
            width: 35%;
            text-align: center;
            vertical-align: middle;
            border: 1px solid #bbb;
            padding: 15px;
        }
        td.img-cell img {
            max-width: 160px;
            height: auto;
        }
        td.info-cell {
            width: 65%;
            vertical-align: top;
            border: 1px solid #bbb;
            padding: 15px;
        }
        .section-title {
            font-weight: bold;
            font-style: italic;
            margin-top: 10px;
            color: #000;
        }
        .price-weight {
            text-align: right;
            font-weight: bold;
            margin-top: 20px;
        }
        .back-link {
            text-align: center;
            padding: 10px;
            border: 1px solid #bbb;
            background-color: #f9f9f9;
        }
        .back-link a {
            color: #b25900;
            text-decoration: underline;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <?php
    // Kết nối MySQL[cite: 2]
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");

    // Lấy mã sữa từ URL truyền sang
    $ma_sua = isset($_GET['ma_sua']) ? $_GET['ma_sua'] : '';

    // Truy vấn thông tin chi tiết sữa kết hợp với hãng sữa
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
        <!-- Tiêu đề: Tên sữa - Hãng sữa[cite: 8] -->
        <tr>
            <th colspan="2"><?php echo htmlspecialchars($row['Ten_sua']) . " - " . htmlspecialchars($row['Ten_hang_sua']); ?></th>
        </tr>
        
        <!-- Nội dung chi tiết -->
        <tr>
            <td class="img-cell">
                <img src="Hinh/<?php echo htmlspecialchars($row['Hinh']); ?>" alt="<?php echo htmlspecialchars($row['Ten_sua']); ?>">
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

        <!-- Link Quay về[cite: 8] -->
        <tr>
            <td colspan="2" class="back-link">
                <a href="bt7.1.php">Quay về</a>
            </td>
        </tr>
    </table>

    <?php
    } else {
        echo "<p align='center'>Không tìm thấy thông tin sản phẩm!</p>";
        echo "<p align='center'><a href='list_dang_cot_co_link.php'>Quay về danh sách</a></p>";
    }

    mysqli_close($conn);
    ?>

</body>
</html>