<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thông Tin Sữa - Phân Trang</title>
    <link rel="stylesheet" href="./styles/bt4.css">
</head>
<body>

    <h2>THÔNG TIN SỮA</h2>

    <?php
    // 1. Kết nối vào MySQL với user là root và mật khẩu rỗng
    $conn = mysqli_connect("localhost", "root", "", "ql_ban_sua");

    // Kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }

    // Thiết lập bảng mã tiếng Việt
    mysqli_set_charset($conn, "utf8");

    // 2. Thiết lập số dòng trên mỗi trang (Yêu cầu: mỗi trang gồm 2 dòng dữ liệu)[cite: 5]
    $rows_per_page = 5;

    // Lấy số trang hiện tại từ URL, mặc định là trang 1
    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    if ($page < 1) $page = 1;

    $offset = ($page - 1) * $rows_per_page;

    // 3. Đọc dữ liệu tổng số lượng sữa để tính tổng số trang
    $sql_total = "SELECT COUNT(*) as total FROM sua";
    $result_total = mysqli_query($conn, $sql_total);
    $row_total = mysqli_fetch_assoc($result_total);
    $total_rows = $row_total['total'];
    $total_pages = ceil($total_rows / $rows_per_page);

    // 4. Truy vấn lấy dữ liệu cho trang hiện tại (kết nối bảng sua, hang_sua, loai_sua)[cite: 2, 5]
    $sql = "SELECT sua.Ten_sua, hang_sua.Ten_hang_sua, loai_sua.Ten_loai, sua.Trong_luong, sua.Don_gia 
            FROM sua 
            JOIN hang_sua ON sua.Ma_hang_sua = hang_sua.Ma_hang_sua 
            JOIN loai_sua ON sua.Ma_loai_sua = loai_sua.Ma_loai_sua 
            LIMIT $offset, $rows_per_page";
    
    $result = mysqli_query($conn, $sql);
    ?>

    <!-- 5. Hiển thị bảng dữ liệu -->
    <table>
        <tr>
            <th>Số TT</th>
            <th>Tên sữa</th>
            <th>Hãng sữa</th>
            <th>Loại sữa</th>
            <th>Trọng lượng</th>
            <th>Đơn giá</th>
        </tr>

        <?php
        if (mysqli_num_rows($result) > 0) {
            $stt = $offset + 1;
            while ($row = mysqli_fetch_assoc($result)) {
                // Phân biệt màu nền dòng chẵn và dòng lẻ[cite: 5]
                $row_class = ($stt % 2 == 0) ? "row-even" : "row-odd";
                
                // Định dạng đơn giá theo kiểu tiền tệ (ví dụ: 3.600 VNĐ)[cite: 5]
                $don_gia = number_format($row['Don_gia'], 0, ',', '.') . " VNĐ";
                $trong_luong = $row['Trong_luong'] . " gram";

                echo "<tr class='$row_class'>";
                echo "<td align='center'>" . $stt . "</td>";
                echo "<td>" . $row['Ten_sua'] . "</td>";
                echo "<td>" . $row['Ten_hang_sua'] . "</td>";
                echo "<td>" . $row['Ten_loai'] . "</td>";
                echo "<td align='center'>" . $trong_luong . "</td>";
                echo "<td align='right'>" . $don_gia . "</td>";
                echo "</tr>";

                $stt++;
            }
        } else {
            echo "<tr><td colspan='6' align='center'>Không có dữ liệu sữa</td></tr>";
        }
        ?>
    </table>

    <!-- 6. Hiển thị thanh phân trang dạng số (<< 1 2 3 ... >>)[cite: 5] -->
    <div class="pagination">
        <?php
        // Nút lùi về trang trước (<<)
        if ($page > 1) {
            echo "<a href='?page=" . ($page - 1) . "'>&lt;&lt;</a> ";
        } else {
            echo "<span>&lt;&lt;</span> ";
        }

        // Các số trang[cite: 5]
        for ($i = 1; $i <= $total_pages; $i++) {
            if ($i == $page) {
                echo "<span>$i</span> ";
            } else {
                echo "<a href='?page=$i'>$i</a> ";
            }
        }

        // Nút tiến tới trang sau (>>)
        if ($page < $total_pages) {
            echo "<a href='?page=" . ($page + 1) . "'>&gt;&gt;</a>";
        } else {
            echo "<span>&gt;&gt;</span>";
        }
        ?>
    </div>

    <?php
    // Đóng kết nối cơ sở dữ liệu
    mysqli_close($conn);
    ?>

</body>
</html>