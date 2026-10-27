<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thông Tin Các Sản Phẩm</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h2 {
            text-align: center;
            color: #b22222;
        }
        table {
            width: 70%;
            margin: 0 auto;
            border-collapse: collapse;
        }
        td {
            border: 1px solid #bbb;
            padding: 12px;
            vertical-align: middle;
        }
        .img-col {
            width: 25%;
            text-align: center;
        }
        .img-col img {
            max-width: 90px;
            height: auto;
        }
        .content-col {
            width: 75%;
        }
        .ten-sua {
            font-weight: bold;
            color: #00008b;
            font-size: 17px;
            margin-bottom: 6px;
        }
        .detail-line {
            margin-bottom: 4px;
        }
    </style>
</head>
<body>

    <h2>THÔNG TIN CÁC SẢN PHẨM</h2>

    <?php
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");

    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }

    mysqli_set_charset($conn, "utf8");

    $sql = "SELECT sua.*, hang_sua.Ten_hang_sua, loai_sua.Ten_loai 
            FROM sua 
            JOIN hang_sua ON sua.Ma_hang_sua = hang_sua.Ma_hang_sua 
            JOIN loai_sua ON sua.Ma_loai_sua = loai_sua.Ma_loai_sua";
    
    $result = mysqli_query($conn, $sql);
    ?>

    <table>
        <?php
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {

                $don_gia = number_format($row['Don_gia'], 0, ',', '.') . " VNĐ";
                $trong_luong = $row['Trong_luong'] . " gr";
                $hinh = $row['Hinh'];
                
                echo "<tr>";
                

                echo "<td class='img-col'>";
                echo "<img src='Image/" . htmlspecialchars($hinh) . "' alt='" . htmlspecialchars($row['Ten_sua']) . "'>";
                echo "</td>";
                

                echo "<td class='content-col'>";
                echo "<div class='ten-sua'>" . htmlspecialchars($row['Ten_sua']) . "</div>";
                echo "<div class='detail-line'>Nhà sản xuất: " . htmlspecialchars($row['Ten_hang_sua']) . "</div>";
                echo "<div class='detail-line'>" . htmlspecialchars($row['Ten_loai']) . " - " . $trong_luong . " - " . $don_gia . "</div>";
                echo "</td>";
                
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='2' align='center'>Không có sản phẩm nào trong cơ sở dữ liệu</td></tr>";
        }
        ?>
    </table>

    <?php

    mysqli_close($conn);
    ?>

</body>
</html>