<?php
session_start();

// Kiểm tra nếu chưa đăng nhập mà vào trang này thì quay về index.php[cite: 8]
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
    <link rel="stylesheet" href="./styles/tieptuc.css">
    <title>Trang Tiếp Tục</title>
</head>
<body>
    <div class="container">
        <h2>TRANG TIẾP TỤC</h2>
        
        <img src="https://www.decathlon.vn/blog/wp-content/uploads/2025/11/gigachad-la-gi-1-gigachad-la-gi-01.jpg" alt="Avatar" class="avatar">
        
        <div class="welcome-msg">
            Chào <?php echo htmlspecialchars($_SESSION["hoten"]); ?> đã đăng nhập!
        </div>
        
        <div class="user-info">
            Tên đăng nhập: <b><?php echo htmlspecialchars($_SESSION["tendangnhap"]); ?></b>
        </div>
        
        <div class="links">
            <a href="ketqua.php">Quay lại</a> |
            <a href="thoat.php">Thoát</a>
        </div>
    </div>
</body>
</html>