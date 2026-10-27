<?php
// Kết nối CSDL qlnhanvien sử dụng hàm thủ tục (Procedural)
$conn = mysqli_connect("localhost", "root", "", "qlnhanvien");

if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}

// Thiết lập mã hóa tiếng Việt UTF-8
mysqli_set_charset($conn, "utf8mb4");

// Truy vấn lấy tất cả thông tin từ bảng phongban
$sql = "SELECT * FROM phongban";
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Danh Sách Phòng Ban</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h2 { text-align: center; color: #d35400; }
        table { width: 50%; margin: 0 auto; border-collapse: collapse; border: 1px solid #888; }
        th, td { border: 1px solid #888; padding: 8px 12px; }
        th { background-color: #f2f2f2; text-align: center; font-weight: bold; }
        .text-center { text-align: center; }
    </style>
</head>
<body>

    <h2>DANH SÁCH PHÒNG BAN</h2>

    <table>
        <tr>
            <th>Mã PB</th>
            <th>Tên phòng ban</th>
        </tr>
        <?php
        if ($result && mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo "<td class='text-center'>" . htmlspecialchars($row["mapb"]) . "</td>";
                echo "<td>" . htmlspecialchars($row["tenpb"]) . "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='2' class='text-center'>Không có dữ liệu phòng ban</td></tr>";
        }
        ?>
    </table>

</body>
</html>

<?php
mysqli_close($conn);
?>