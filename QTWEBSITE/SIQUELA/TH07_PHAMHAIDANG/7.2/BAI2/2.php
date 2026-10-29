<?php
    $username = 'root';
    $database = 'qlxemay';
    $localhost = 'localhost';
    $pass = '';

    $conn = new mysqli($localhost, $username, $pass, $database);

    if(!$conn) {
        die("Kết nối thất vọng: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "UTF8");

    $sql = ("SELECT * FROM xe");

    $result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Danh mục xe máy</title>
</head>
<body>
    <table class="container">
        <tr>
            <th class="title">DANH MỤC XE MÁY</th>
        </tr>
        <tr>
            <td>
                <table class="table">
                    <?php
                    if ($result && mysqli_num_rows($result) > 0) {
                        while ($row = mysqli_fetch_assoc($result)) {
                            if ($row['HienThi'] == 1) {
                                $ten_xe = htmlspecialchars($row['TenXe']);
                                $gia = number_format($row['Gia'], 0, ',', '.') . " VNĐ";
                                $hinh = !empty($row['Hinh']) ? trim($row['Hinh']) : "default.jpg";

                                echo "<tr>";

                                echo "<td class='img-column'>";
                                echo "<img src='/Product/" . $hinh . "' alt='" . $ten_xe . "'>";
                                echo "</td>";

                                echo "<td class='info-column'>";
                                echo "<div class='xe-name'>" . $ten_xe . "</div>";
                                echo "<div class='xe-gia'>Giá bán: " . $gia . "</div>";
                                echo "</td>";

                                echo "</tr>";
                            }
                        }
                    } else {
                        echo "<tr><td colspan='2' align='center'>Không có dữ liệu xe máy</td></tr>";
                    }
                    ?>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>