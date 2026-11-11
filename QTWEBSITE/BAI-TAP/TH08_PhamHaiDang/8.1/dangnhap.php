<?php
    session_start();

    if (isset($_POST["submit"])) {
        $user = $_POST["username"];
        $pass = $_POST["password"];

        if ($user == "admin" && $pass == "123") {
            $_SESSION["username"] = $user;
            header("Location: page-2.php");
            exit();
        } else {
            $error = "Sai tài khoản hoặc mật khẩu!";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/dangnhap.css">
    <title>Đăng Nhập</title>
</head>
<body>
    <form method="post" action="" class = "container">
        <h2 class = "Header">Đăng Nhập</h2>
        <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
        <div class = "input">
            <div>
                <label>Tài khoản: </label>
                <input type="text" name="username" required>
            </div>
            <br>
            <div>
                <label>Mật khẩu: </label>
                <input type="password" name="password" required>
            </div>
            <br>
            <div>
                <input type="submit" name="submit" value="Đăng nhập">
            </div>
        </div>
    </form>
</body>
</html>