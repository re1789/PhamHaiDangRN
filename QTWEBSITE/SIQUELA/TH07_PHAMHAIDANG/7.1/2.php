<?php
// Kết nối CSDL qlnhanvien sử dụng hướng đối tượng (OOP)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "qlnhanvien";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Thiết lập mã hóa tiếng Việt UTF-8
$conn->set_charset("utf8mb4");

// Truy vấn lấy tất cả thông tin từ bảng phongban
$sql = "SELECT * FROM phongban";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Danh Sách Phòng Ban - OOP</title>
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
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
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
$conn->close();
?>