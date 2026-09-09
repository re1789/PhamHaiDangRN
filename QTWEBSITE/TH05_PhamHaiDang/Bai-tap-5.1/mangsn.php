<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mảng số nguyên</title>
</head>
<style>
    .box{
        width: 450px; 
        margin: 0 auto; 
        padding: 15px;
        text-align: center;
    }
</style>
<body>
    <div class="box">
        <h1 style="color: green;">Mảng số nguyên</h1>
    <?php
    $mang = array(2, 3, 7, 8, 15);
    echo implode(", ", $mang)
?>
    </div>
</body>
</html>