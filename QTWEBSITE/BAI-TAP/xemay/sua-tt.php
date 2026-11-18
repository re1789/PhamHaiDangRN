<?php
include("include/db.php");
$maxe = $_GET['maxe'];

if (isset($_POST['btnCapNhat'])) {
    $tenxe = $_POST['tenxe'];
    $maloai = $_POST['maloai'];
    $gia = $_POST['gia'];
    $mota = $_POST['mota'];
    $hinhcu = $_POST['hinhcu'];

    $hinh = $_FILES['hinh']['name'];
    if ($hinh != "") {
        move_uploaded_file($_FILES['hinh']['tmp_name'], "images/" . $hinh);
    } else {
        $hinh = $hinhcu;
    }

    mysqli_query($conn, "UPDATE xe SET TenXe='$tenxe', MaLoai='$maloai', Gia='$gia', Hinh='$hinh' WHERE MaXe='$maxe'");
    mysqli_query($conn, "UPDATE chitietxe SET Loai='$mota' WHERE MaXe='$maxe'");

    header("Location: sua-xe.php");
}

$xe = mysqli_fetch_assoc(mysqli_query($conn, "SELECT xe.*, chitietxe.Loai FROM xe LEFT JOIN chitietxe ON xe.MaXe = chitietxe.MaXe WHERE xe.MaXe='$maxe'"));
$dsLoai = mysqli_query($conn, "SELECT * FROM loaixe");
include("include/header.php");
?>
<div class="title">THÔNG TIN XE CẦN CHỈNH SỬA</div>
<div class="content">
    <form method="post" enctype="multipart/form-data">
        <input type="hidden" name="hinhcu" value="<?php echo $xe['Hinh']; ?>">
        <table class="form-table">
            <tr>
                <td>Tên xe</td>
                <td><input type="text" name="tenxe" value="<?php echo $xe['TenXe']; ?>" required></td>
            </tr>
            <tr>
                <td>Chọn loại xe</td>
                <td>
                    <select name="maloai">
                        <?php while($l = mysqli_fetch_assoc($dsLoai)) { ?>
                            <option value="<?php echo $l['MaLoai']; ?>" <?php if($l['MaLoai'] == $xe['MaLoai']) echo "selected"; ?>>
                                <?php echo $l['TenLoai']; ?>
                            </option>
                        <?php } ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Giá bán (VNĐ)</td>
                <td><input type="number" name="gia" value="<?php echo $xe['Gia']; ?>" required></td>
            </tr>
            <tr>
                <td>Nhập mô tả trên nhiều dòng,<br>bắt đầu bằng dấu -</td>
                <td><textarea name="mota" rows="5"><?php echo $xe['Loai']; ?></textarea></td>
            </tr>
            <tr>
                <td>Chọn file hình</td>
                <td><input type="file" name="hinh"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" name="btnCapNhat" value="Cập nhật" class="btn-orange"></td>
            </tr>
        </table>
    </form>
</div>
<?php include("include/footer.php"); ?>