<?php
include("include/db.php");

if (isset($_POST['btnXoaNhieu'])) {
    if (isset($_POST['chon'])) {
        foreach ($_POST['chon'] as $maxe) {
            mysqli_query($conn, "DELETE FROM xe WHERE MaXe='$maxe'");
        }
    }
    header("Location: xoa-multi.php");
}

include("include/header.php");
$sql = "SELECT xe.*, loaixe.TenLoai, chitietxe.Loai 
        FROM xe 
        LEFT JOIN loaixe ON xe.MaLoai = loaixe.MaLoai 
        LEFT JOIN chitietxe ON xe.MaXe = chitietxe.MaXe";
$result = mysqli_query($conn, $sql);
?>
<div class="title">XÓA NHIỀU XE MÁY</div>
<div class="content">
    <form method="post">
        <div class="center">
            <input type="submit" name="btnXoaNhieu" value="Xóa các xe được chọn" class="btn-orange">
        </div>
        <table class="data-table">
            <tr>
                <th>Chọn</th>
                <th>Mã xe</th>
                <th>Tên xe</th>
                <th>Loại xe</th>
                <th>Giá bán</th>
                <th>Mô tả</th>
            </tr>
            <?php while($row = mysqli_fetch_assoc($result)) { ?>
            <tr>
                <td class="center"><input type="checkbox" name="chon[]" value="<?php echo $row['MaXe']; ?>"></td>
                <td class="center"><?php echo $row['MaXe']; ?></td>
                <td><?php echo $row['TenXe']; ?></td>
                <td class="center"><?php echo $row['TenLoai']; ?></td>
                <td class="center"><?php echo number_format($row['Gia']); ?></td>
                <td><?php echo nl2br($row['Loai']); ?></td>
            </tr>
            <?php } ?>
        </table>
        <div class="center">
            <input type="submit" name="btnXoaNhieu" value="Xóa các xe được chọn" class="btn-orange">
        </div>
    </form>
</div>
<?php include("include/footer.php"); ?>