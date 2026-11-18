<?php
$conn = mysqli_connect("sql113.byethost33.com", "b33_43470156", "123456789", "b33_43470156_qlxemay");
if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}
mysqli_set_charset($conn, "utf8mb4");
?>