<?php
include("include/db.php");

$namHienTai = date("Y");
$namMin = $namHienTai - 5;

if (isset($_POST['btnThem'])) {
    $maxe = "XE" . rand(100, 999);
    $tenxe = $_POST['tenxe'];
    $maloai = $_POST['maloai'];
    $gia = $_POST['gia'];
    $mota = $_POST['mota'];
    
    $hinh = $_FILES['hinh']['name'];
    if ($hinh != "") {
        move_uploaded_file($_FILES['hinh']['tmp_name'], "images/" . $hinh);
    }

    $sql1 = "INSERT INTO xe(MaXe, TenXe, MaLoai, Gia, HienThi, Hinh) VALUES('$maxe', '$tenxe', '$maloai', '$gia', 1, '$hinh')";
    mysqli_query($conn, $sql1);

    $sql2 = "INSERT INTO chitietxe(MaXe, Loai) VALUES('$maxe', '$mota')";
    mysqli_query($conn, $sql2);

    header("Location: index.php");
}

$dsLoai = mysqli_query($conn, "SELECT * FROM loaixe");
include("include/header.php");
?>
<div class="title">THÊM XE MÁY MỚI</div>
<div class="content">
    <form method="post" enctype="multipart/form-data">
        <table class="form-table">
            <tr>
                <td>Tên xe</td>
                <td><input type="text" name="tenxe" required></td>
            </tr>
            <tr>
                <td>Chọn loại xe</td>
                <td>
                    <select name="maloai">
                        <?php while($l = mysqli_fetch_assoc($dsLoai)) { ?>
                            <option value="<?php echo $l['MaLoai']; ?>"><?php echo $l['TenLoai']; ?></option>
                        <?php } ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Năm sản xuất</td>
                <td><input type="number" name="namsx" value="<?php echo $namHienTai; ?>" min="<?php echo $namMin; ?>" max="<?php echo $namHienTai; ?>"></td>
            </tr>
            <tr>
                <td>Giá bán (VNĐ)</td>
                <td><input type="number" name="gia" value="30000000" required></td>
            </tr>
            <tr>
                <td>Nhập mô tả trên nhiều dòng,<br>bắt đầu bằng dấu -</td>
                <td><textarea name="mota" rows="5"></textarea></td>
            </tr>
            <tr>
                <td>Chọn file hình</td>
                <td><input type="file" name="hinh"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" name="btnThem" value="Thêm mới" class="btn-orange"></td>
            </tr>
        </table>
    </form>
</div>
<?php include("include/footer.php"); ?>