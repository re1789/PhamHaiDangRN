<?php
include("include/db.php");
include("include/header.php");

$sql = "SELECT xe.*, loaixe.TenLoai, chitietxe.Loai, chitietxe.DungTich, chitietxe.CongXuat 
        FROM xe 
        LEFT JOIN loaixe ON xe.MaLoai = loaixe.MaLoai 
        LEFT JOIN chitietxe ON xe.MaXe = chitietxe.MaXe";
$result = mysqli_query($conn, $sql);
?>
<div class="title">QUẢN LÝ XE MÁY</div>
<div class="content">
    <?php while($row = mysqli_fetch_assoc($result)) { ?>
    <div class="xe-item">
        <img src="images/<?php echo $row['Hinh']; ?>" alt="<?php echo $row['TenXe']; ?>">
        <div class="xe-info">
            <h3><?php echo $row['TenXe']; ?></h3>
            <p>- Động cơ: <?php echo $row['Loai']; ?></p>
            <p>- Dung tích: <?php echo $row['DungTich']; ?></p>
            <p>- Công suất: <?php echo $row['CongXuat']; ?></p>
            <p><strong>Loại xe: <?php echo $row['TenLoai']; ?></strong></p>
            <p><strong>Giá bán: <?php echo number_format($row['Gia']); ?> VNĐ</strong></p>
        </div>
    </div>
    <?php } ?>
</div>
<?php include("include/footer.php"); ?>