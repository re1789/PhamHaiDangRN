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
    <title>TRANG 3</title>
</head>
<body>
    <h2>TRANG 3</h2>
    <?php
        echo "Chào mừng trở lại, " . $_SESSION["username"] . "!";
    ?>
    <br><br>
    <a href="page-2.php">Đến trang 2</a> | 
    <a href="thoat.php">Thoát</a>
</body>
</html>