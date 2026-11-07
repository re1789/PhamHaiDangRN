<?php
session_start();

if (isset($_POST["submit"])) {
    // Lưu thông tin vào session
    $_SESSION["hoten"] = $_POST["hoten"];
    $_SESSION["email"] = $_POST["email"];
    $_SESSION["tendangnhap"] = $_POST["tendangnhap"];
    $_SESSION["matkhau"] = $_POST["matkhau"];
    
    // Chuyển sang trang kết quả
    header("Location: ketqua.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/index.css">
    <title>Thông Tin Đăng Nhập</title>
</head>
<body>
    <div class="container">
        <div class="header">THÔNG TIN ĐĂNG NHẬP</div>
        <form method="post" action="" class="form-content">
            <div class="form-group">
                <label>Họ tên</label>
                <input type="text" name="hoten" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" required>
            </div>
            <div class="form-group">
                <label>Tên đăng nhập</label>
                <input type="text" name="tendangnhap" required>
            </div>
            <div class="form-group">
                <label>Mật khẩu</label>
                <input type="password" name="matkhau" required>
            </div>
            <div class="btn-container">
                <input type="submit" name="submit" value="Đăng nhập">
            </div>
        </form>
    </div>
</body>
</html>