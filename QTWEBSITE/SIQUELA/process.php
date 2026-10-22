<?php
// Kết nối CSDL bằng tài khoản root mặc định của XAMPP
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'qlnhanvien';

$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Tạo CSDL và kết nối
$conn->query("CREATE DATABASE IF NOT EXISTS $dbname CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
$conn->select_db($dbname);

// Tạo bảng phongban nếu chưa có
$conn->query("CREATE TABLE IF NOT EXISTS phongban (
    mapb VARCHAR(5) NOT NULL PRIMARY KEY,
    tenpb VARCHAR(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");

// Tạo bảng nhanvien nếu chưa có
$conn->query("CREATE TABLE IF NOT EXISTS nhanvien (
    manv INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ho VARCHAR(40) NOT NULL,
    ten VARCHAR(10) NOT NULL,
    phai TINYINT(1) DEFAULT NULL,
    ngaysinh DATE DEFAULT NULL,
    diachi VARCHAR(50) NOT NULL,
    dienthoai VARCHAR(10) DEFAULT NULL,
    mapb VARCHAR(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");

$message = "";

// XỬ LÝ KHI NGƯỜI DÙNG BẤM NÚT HOẶC GỬI FORM
if (isset($_POST['action'])) {
    $action = $_POST['action'];

    switch ($action) {
        // --- 1. THÊM MỚI NHÂN VIÊN TỪ FORM ---
        case 'them_nhanvien':
            $ho = $_POST['ho'];
            $ten = $_POST['ten'];
            $phai = $_POST['phai'];
            $ngaysinh = $_POST['ngaysinh'];
            $diachi = $_POST['diachi'];
            $dienthoai = $_POST['dienthoai'];
            $mapb = $_POST['mapb'];

            $stmt = $conn->prepare("INSERT INTO nhanvien (ho, ten, phai, ngaysinh, diachi, dienthoai, mapb) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssissss", $ho, $ten, $phai, $ngaysinh, $diachi, $dienthoai, $mapb);
            
            if ($stmt->execute()) {
                $message = "Thêm nhân viên thành công!";
            } else {
                $message = "Lỗi thêm nhân viên: " . $conn->error;
            }
            $stmt->close();
            break;

        // --- 2. THÊM MỚI PHÒNG BAN TỪ FORM ---
        case 'them_phongban':
            $mapb_moi = $_POST['mapb_moi'];
            $tenpb_moi = $_POST['tenpb_moi'];

            $stmt = $conn->prepare("INSERT INTO phongban (mapb, tenpb) VALUES (?, ?)");
            $stmt->bind_param("ss", $mapb_moi, $tenpb_moi);

            if ($stmt->execute()) {
                $message = "Thêm phòng ban thành công!";
            } else {
                $message = "Lỗi thêm phòng ban: " . $conn->error;
            }
            $stmt->close();
            break;

        // --- 3. CÁC THAO TÁC CẤU TRÚC VÀ DỮ LIỆU ---
        case 'sua_ngaysinh':
            $sql = "UPDATE nhanvien SET ngaysinh = '2000-01-01' WHERE manv = 1";
            $message = $conn->query($sql) ? "Đã cập nhật ngày sinh nhân viên ID 1!" : "Lỗi: " . $conn->error;
            break;

        case 'xoa_nv_cuoi':
            $sql = "DELETE FROM nhanvien ORDER BY manv DESC LIMIT 1";
            $message = $conn->query($sql) ? "Đã xóa nhân viên cuối cùng!" : "Lỗi: " . $conn->error;
            break;

        case 'sua_cot':
            $conn->query("ALTER TABLE nhanvien MODIFY phai VARCHAR(3)");
            $conn->query("ALTER TABLE nhanvien MODIFY ten VARCHAR(50)");
            $message = "Đã chỉnh sửa kiểu dữ liệu cột phái và tên thành công!";
            break;

        case 'them_cot_mapb':
            $conn->query("ALTER TABLE nhanvien ADD INDEX IF NOT EXISTS idx_mapb (mapb)");
            $message = "Đã tạo Index cho cột mapb thành công!";
            break;

        // --- 4. CÁC TRUY VẤN DỮ LIỆU ---
        case 'ds_nhanvien':
            $sql = "SELECT manv, ho, ten, phai, ngaysinh, diachi, dienthoai FROM nhanvien LIMIT 5";
            break;

        case 'sapxep_hoten':
            $sql = "SELECT * FROM nhanvien ORDER BY ten ASC, ho ASC";
            break;

        case 'sapxep_tuoi':
            $sql = "SELECT * FROM nhanvien ORDER BY ngaysinh DESC";
            break;

        case 'nv_cntt':
            $sql = "SELECT * FROM nhanvien WHERE mapb = 'CNTT'";
            break;

        case 'ghep_hoten':
            $sql = "SELECT nv.manv, CONCAT(nv.ho, ' ', nv.ten) AS hoten, 
                    CASE WHEN nv.phai = 1 OR nv.phai = 'Nam' THEN 'Nam' ELSE 'Nữ' END AS gioitinh, 
                    nv.ngaysinh, nv.dienthoai, pb.tenpb 
                    FROM nhanvien nv 
                    LEFT JOIN phongban pb ON nv.mapb = pb.mapb";
            break;

        case 'tong_nv_pb':
            $sql = "SELECT pb.mapb, pb.tenpb, COUNT(nv.manv) AS tong_nv 
                    FROM phongban pb 
                    LEFT JOIN nhanvien nv ON pb.mapb = nv.mapb 
                    GROUP BY pb.mapb, pb.tenpb";
            break;
    }
}

// Lấy danh sách phòng ban để hiển thị vào thẻ select lựa chọn phòng ban
$ds_phongban = $conn->query("SELECT * FROM phongban");
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Quản Lý Nhân Viên</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f4f7f6; }
        h2 { color: #333; }
        .box { background: #fff; padding: 15px; margin-bottom: 15px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 10px; }
        .form-group { display: flex; flex-direction: column; }
        .form-group label { margin-bottom: 5px; font-weight: bold; font-size: 14px; }
        .form-group input, .form-group select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
        button { padding: 9px 15px; margin: 4px 2px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #0056b3; }
        button.btn-submit { background: #28a745; font-weight: bold; }
        button.btn-submit:hover { background: #218838; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #007bff; color: white; }
        .msg { color: green; font-weight: bold; background: #e2f0d9; padding: 10px; border-radius: 4px; margin-bottom: 15px; }
    </style>
</head>
<body>

    <h2>Hệ Thống Quản Lý Nhân Sự (qlnhanvien)</h2>

    <?php if (!empty($message)) echo "<div class='msg'>$message</div>"; ?>

    <!-- FORM NHẬP DỮ LIỆU TỰ DO -->
    <div class="box">
        <h3>1. Nhập Dữ Liệu Nhân Viên Mới</h3>
        <form method="POST">
            <input type="hidden" name="action" value="them_nhanvien">
            <div class="form-grid">
                <div class="form-group">
                    <label>Họ lót:</label>
                    <input type="text" name="ho" required placeholder="Ví dụ: Nguyễn Văn">
                </div>
                <div class="form-group">
                    <label>Tên:</label>
                    <input type="text" name="ten" required placeholder="Ví dụ: An">
                </div>
                <div class="form-group">
                    <label>Giới tính:</label>
                    <select name="phai">
                        <option value="1">Nam</option>
                        <option value="0">Nữ</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Ngày sinh:</label>
                    <input type="date" name="ngaysinh" required>
                </div>
                <div class="form-group">
                    <label>Địa chỉ:</label>
                    <input type="text" name="diachi" required placeholder="Ví dụ: Đồng Nai">
                </div>
                <div class="form-group">
                    <label>Điện thoại:</label>
                    <input type="text" name="dienthoai" placeholder="Ví dụ: 0912345678">
                </div>
                <div class="form-group">
                    <label>Phòng ban:</label>
                    <select name="mapb">
                        <?php 
                        if ($ds_phongban && $ds_phongban->num_rows > 0) {
                            while($pb = $ds_phongban->fetch_assoc()) {
                                echo "<option value='".$pb['mapb']."'>".$pb['tenpb']." (".$pb['mapb'].")</option>";
                            }
                        } else {
                            echo "<option value='CNTT'>CNTT</option>";
                            echo "<option value='KT'>KT</option>";
                            echo "<option value='NS'>NS</option>";
                        }
                        ?>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn-submit">Thêm Nhân Viên</button>
        </form>
    </div>

    <!-- FORM NHẬP PHÒNG BAN -->
    <div class="box">
        <h3>2. Thêm Phòng Ban Mới</h3>
        <form method="POST">
            <input type="hidden" name="action" value="them_phongban">
            <div class="form-grid">
                <div class="form-group">
                    <label>Mã phòng ban:</label>
                    <input type="text" name="mapb_moi" required placeholder="Ví dụ: MKT">
                </div>
                <div class="form-group">
                    <label>Tên phòng ban:</label>
                    <input type="text" name="tenpb_moi" required placeholder="Ví dụ: Marketing">
                </div>
            </div>
            <button type="submit" class="btn-submit">Thêm Phòng Ban</button>
        </form>
    </div>

    <!-- THAO TÁC CẤU TRÚC -->
    <div class="box">
        <h3>3. Các Thao Tác Cấu Trúc & Xử Lý Bảng</h3>
        <form method="POST">
            <button type="submit" name="action" value="sua_ngaysinh">Sửa ngày sinh NV ID 1</button>
            <button type="submit" name="action" value="xoa_nv_cuoi">Xóa NV cuối cùng</button>
            <button type="submit" name="action" value="sua_cot">Sửa kiểu cột (phái, tên)</button>
            <button type="submit" name="action" value="them_cot_mapb">Tạo Index cột mapb</button>
        </form>
    </div>

    <!-- CÁC TRUY VẤN -->
    <div class="box">
        <h3>4. Xem Báo Cáo & Truy Vấn</h3>
        <form method="POST">
            <button type="submit" name="action" value="ds_nhanvien">Xem NV (Tối đa 5 dòng)</button>
            <button type="submit" name="action" value="sapxep_hoten">Xếp tăng theo Tên</button>
            <button type="submit" name="action" value="sapxep_tuoi">Xếp giảm theo Ngày sinh (Tuổi nhỏ->lớn)</button>
            <button type="submit" name="action" value="nv_cntt">NV phòng CNTT</button>
            <button type="submit" name="action" value="ghep_hoten">Ghép họ tên & Giới tính Nam/Nữ + Tên PB</button>
            <button type="submit" name="action" value="tong_nv_pb">Tổng số NV theo phòng ban</button>
        </form>
    </div>

    <!-- KHU VỰC HIỂN THỊ KẾT QUẢ TRUY VẤN -->
    <?php if (isset($sql) && isset($_POST['action']) && !in_array($_POST['action'], ['sua_ngaysinh', 'xoa_nv_cuoi', 'sua_cot', 'them_cot_mapb', 'them_nhanvien', 'them_phongban'])): ?>
    <div class="box">
        <h3>Kết quả truy vấn:</h3>
        <?php
        $result = $conn->query($sql);
        if ($result && $result->num_rows > 0) {
            echo "<table><tr>";
            while ($field = $result->fetch_field()) {
                echo "<th>" . htmlspecialchars($field->name) . "</th>";
            }
            echo "</tr>";
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                foreach ($row as $val) {
                    echo "<td>" . htmlspecialchars($val ?? 'NULL') . "</td>";
                }
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "<p>Không có dữ liệu trả về.</p>";
        }
        ?>
    </div>
    <?php endif; ?>

</body>
</html>