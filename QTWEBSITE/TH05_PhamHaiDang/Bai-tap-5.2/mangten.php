<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mảng chứa tên</title>
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
    <h1 style="color: green;">Mảng chứa tên</h1>
    <?php
        $mang = array('Jong', 'Yong', 'Cho', 'Ha', 'Min');
        echo implode(", ", $mang)
    ?>
</div>
</body>
</html>