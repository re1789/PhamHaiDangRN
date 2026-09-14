<?php
$soNgauNhien = rand(1, 20);
if ($soNgauNhien <= 10) {
    $ketQua = "Đúng";
} else {
    $ketQua = "Sai";
}
echo "Số ngẫu nhiên vừa được tạo: " . $soNgauNhien . "<br>";
echo "Số ngẫu nhiên có <= 10 không?: " . $ketQua . "<br>";
?>