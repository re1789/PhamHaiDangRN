<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Mua hoa</title>
</head>
<body>
    <?php
        function them_hoa($tenHoa, $mangHoa)
        {
            $soLuong = count($mangHoa);

            for ($i = 0; $i < $soLuong; $i++) {
                if (strcmp($mangHoa[$i], $tenHoa) === 0) {
                    return 1;
                }
            }

            return 0;
        }

        $tenHoa = [
            'hoa-hong' => 'Hồng đỏ',
            'hong-trang' => 'Hồng trắng',
            'hoa-cuc' => 'Hoa cúc',
            'lys-trang' => 'Lys trắng',
            'cut-lon' => 'Hoa cứt lợn'
        ];
        $gioHoa = trim($_POST['gio_hoa'] ?? '');
        $thongBao = '';

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $loaiHoa = $_POST['loai_hoa'] ?? '';

            if (isset($tenHoa[$loaiHoa])) {
                $tenHoaCanThem = $tenHoa[$loaiHoa];
                $mangHoa = $gioHoa === '' ? [] : array_map('trim', explode(' -- ', $gioHoa));

                if (them_hoa($tenHoaCanThem, $mangHoa) === 1) {
                    $thongBao = 'Hoa ' . $tenHoaCanThem . ' đã có trong giỏ.';
                } else {
                    $mangHoa[] = $tenHoaCanThem;
                    $gioHoa = implode(' -- ', $mangHoa);
                }
            }
        }
    ?>
    <form action="mua-hoa.php" method="post">
        <div class="container">
            <div class="header"><h1>Mua hoa</h1></div>
            <table>
                    <tr>
                        <td><p style="font-weight: bold;">Loại hoa bạn chọn:</p></td>
                        <td>
                            <select name="loai_hoa" required>
                                <option value="">>-- Chọn loại hoa --<</option>
                                <option value="hoa-hong">Hồng đỏ</option>
                                <option value="hong-trang">Hồng trắng</option>
                                <option value="hoa-cuc">Hoa cúc</option>
                                <option value="lys-trang">Lys trắng</option>
                                <option value="cut-lon">Hoa cứt lợn</option>
                            </select>
                        </td>
                        <td><button type="submit">Thêm vào giỏ hoa</button></td>
                    </tr>
                    <tr>
                        <td><p style="font-weight: bold;">Giỏ hoa của bạn có:</p></td>
                        <td colspan="2">
                            <p style="color: red;">
                                <?php if ($thongBao !== ''): ?>
                                <?php echo htmlspecialchars($thongBao); ?>
                                <?php endif; ?>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <textarea name="gio_hoa" rows="4" readonly placeholder="Chưa có hoa nào trong giỏ, hẹ hẹ hẹ"><?php echo htmlspecialchars($gioHoa); ?></textarea>
                        </td>
                    </tr>
                </table>
        </div>
    </form>
</body>
</html>