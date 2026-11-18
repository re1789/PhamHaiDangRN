<?php
include("include/db.php");

if (isset($_GET['maxe'])) {
    $maxe = $_GET['maxe'];
    mysqli_query($conn, "DELETE FROM xe WHERE MaXe='$maxe'");
    header("Location: xoa.php");
}

include("include/header.php");
$sql = "SELECT xe.*, loaixe.TenLoai, chitietxe.Loai 
        FROM xe 
        LEFT JOIN loaixe ON xe.MaLoai = loaixe.MaLoai 
        LEFT JOIN chitietxe ON xe.MaXe = chitietxe.MaXe";
$result = mysqli_query($conn, $sql);
?>
<div class="title">XÓA THÔNG TIN XE MÁY</div>
<div class="content">
    <table class="data-table">
        <tr>
            <th>Mã xe</th>
            <th>Tên xe</th>
            <th>Loại xe</th>
            <th>Giá bán</th>
            <th>Mô tả</th>
            <th>Liên kết</th>
        </tr>
        <?php while($row = mysqli_fetch_assoc($result)) { ?>
        <tr>
            <td class="center"><?php echo $row['MaXe']; ?></td>
            <td><?php echo $row['TenXe']; ?></td>
            <td class="center"><?php echo $row['TenLoai']; ?></td>
            <td class="center"><?php echo number_format($row['Gia']); ?></td>
            <td><?php echo nl2br($row['Loai']); ?></td>
            <td class="center"><a href="xoa.php?maxe=<?php echo $row['MaXe']; ?>" onclick="return confirm('Bạn có chắc muốn xóa?');">Xóa</a></td>
        </tr>
        <?php } ?>
    </table>
</div>
<?php include("include/footer.php"); ?>