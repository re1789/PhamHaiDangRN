<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Xổ số</title>
</head>
<body>
    <?php
        $daySoNhap = '';
        $daySoMaySinh = '';
        $ketQua = '';
        $thongBao = '';

        function doc_day_so($chuoi)
        {
            $cacSo = array_map('trim', explode('-', $chuoi));

            if (count($cacSo) !== 5) {
                return false;
            }

            foreach ($cacSo as $so) {
                if (!ctype_digit($so)) {
                    return false;
                }

                $so = (int)$so;
                if ($so < 0 || $so > 55) {
                    return false;
                }
            }

            $cacSo = array_map('intval', $cacSo);
            sort($cacSo);

            return $cacSo;
        }

        function hien_thi_day_so($cacSo, $cacSoTrung = [])
        {
            return implode('-', array_map(function ($so) use ($cacSoTrung) {
                $soHienThi = sprintf('%02d', $so);

                if (in_array($so, $cacSoTrung, true)) {
                    return '<span style="color: red; font-weight: bold;">' . $soHienThi . '</span>';
                }

                return $soHienThi;
            }, $cacSo));
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $chuoiNhap = trim($_POST['day_so'] ?? '');
            $cacSo = doc_day_so($chuoiNhap);

            if ($cacSo === false) {
                $thongBao = 'Vui lòng nhập đúng 5 số';
            } else {
                $cacSoMaySinh = [];

                for ($i = 0; $i < 5; $i++) {
                    $cacSoMaySinh[] = random_int(0, 55);
                }

                sort($cacSoMaySinh);

                $cacSoTrung = array_values(array_intersect($cacSo, $cacSoMaySinh));
                $daySoNhap = hien_thi_day_so($cacSo, $cacSoTrung);
                $daySoMaySinh = hien_thi_day_so($cacSoMaySinh, $cacSoTrung);
                $soTrung = count($cacSoTrung);

                $ketQua = 'Bạn trúng ' . $soTrung . ' số.';
            }
        }

    ?>
    <form method="post">
        <div class="container">
        <div class="header">
            <h1>XỔ SỐ</h1>
        </div>
        <table>
            <tr>
                <td><p>Nhập 5 số</p></td>
                <td><input type="text" id="day-so" name="day_so" value="<?php echo htmlspecialchars($_POST['day_so'] ?? ''); ?>" inputmode="numeric" required></td>
            </tr>
            <tr>
                <td></td>
                <td><button type="submit" class="btn
                ">Sinh số tự động và dò kết quả</button></td>
            </tr>
            <tr>
                <td><p>Dãy số đã nhập sau khi sắp xếp tăng</p></td>
                <td><?php echo $daySoNhap; ?></td>
            </tr>
            <tr>
                <td><p>Dãy số kết quả do máy sinh ra</p></td>
                <td><?php echo $daySoMaySinh; ?></td>
            </tr>
            <tr>
                <td><p>Kết quả dò số</p></td>
                <td><input type="text" value="<?php echo htmlspecialchars($ketQua !== '' ? $ketQua : $thongBao); ?>" readonly></td>
            </tr>
        </table>
        </div>
    </form>

</body>
</html>