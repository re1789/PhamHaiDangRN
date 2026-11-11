<?php
session_start();

if (!isset($_SESSION["username"])) {
    header("Location: dangnhap.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRANG 2</title>
</head>
<body>
    <h2>TRANG 2</h2>
    <?php
        echo "Xin chào, " . $_SESSION["username"] . "!";
    ?>
    <br><br>
    <a href="page-3.php">Đến trang 3</a> | 
    <a href="thoat.php">Thoát</a>
</body>
</html>