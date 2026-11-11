<?php
session_start();
if (!isset($_SESSION["tendangnhap"])) {
    header("Location: index.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/ketqua.css">
    <title>Kết Quả Đăng Nhập</title>
</head>
<body>
    <div class="container">
        <div class="header">KẾT QUẢ ĐĂNG NHẬP</div>
        <div class="content">
            <div class="row">
                <div class="label">Họ tên</div>
                <div class="value"><?php echo htmlspecialchars($_SESSION["hoten"]); ?></div>
            </div>
            <div class="row">
                <div class="label">Email</div>
                <div class="value"><?php echo htmlspecialchars($_SESSION["email"]); ?></div>
            </div>
            <div class="row">
                <div class="label">Tên đăng nhập</div>
                <div class="value"><?php echo htmlspecialchars($_SESSION["tendangnhap"]); ?></div>
            </div>
            <div class="row">
                <div class="label">Mật khẩu</div>
                <div class="value"><?php echo htmlspecialchars($_SESSION["matkhau"]); ?></div>
            </div>
            
            <div class="links">
                <a href="tieptuc.php">Tiếp tục</a>
                <a href="thoat.php">Thoát</a>
            </div>
        </div>
    </div>
</body>
</html>