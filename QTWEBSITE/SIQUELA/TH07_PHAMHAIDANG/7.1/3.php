<?php
// Kết nối CSDL qlnhanvien
$conn = mysqli_connect("localhost", "root", "", "qlnhanvien");

if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}

// Thiết lập mã hóa tiếng Việt UTF-8
mysqli_set_charset($conn, "utf8mb4");

// Truy vấn lấy các thông tin: manv, hoten, phai, ngaysinh, diachi, mapb từ bảng nhanvien
$sql = "SELECT manv, CONCAT(ho, ' ', ten) as hoten, phai, ngaysinh, diachi, mapb FROM nhanvien";
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Danh Sách Nhân Viên</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h2 { text-align: center; color: #d35400; font-weight: bold; }
        table { width: 90%; margin: 0 auto; border-collapse: collapse; border: 1px solid #888; }
        th, td { border: 1px solid #888; padding: 8px 10px; }
        th { background-color: #f2f2f2; text-align: center; font-weight: bold; }
        .text-center { text-align: center; }
    </style>
</head>
<body>

    <h2>DANH SÁCH NHÂN VIÊN</h2>

    <table>
        <tr>
            <th>STT</th>
            <th>MãNV</th>
            <th>Họ tên</th>
            <th>Phái</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Phòng ban</th>
        </tr>
        <?php
        if ($result && mysqli_num_rows($result) > 0) {
            $stt = 1;
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo "<td class='text-center'>" . $stt++ . "</td>";
                echo "<td class='text-center'>" . htmlspecialchars($row["manv"]) . "</td>";
                echo "<td>" . htmlspecialchars($row["hoten"]) . "</td>";
                echo "<td class='text-center'>" . htmlspecialchars($row["phai"]) . "</td>";
                echo "<td class='text-center'>" . htmlspecialchars($row["ngaysinh"]) . "</td>";
                echo "<td>" . htmlspecialchars($row["diachi"]) . "</td>";
                echo "<td class='text-center'>" . htmlspecialchars($row["mapb"]) . "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='7' class='text-center'>Không có dữ liệu nhân viên</td></tr>";
        }
        ?>
    </table>

</body>
</html>

<?php
mysqli_close($conn);
?>