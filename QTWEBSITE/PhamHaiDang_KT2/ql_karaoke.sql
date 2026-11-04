-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2026 at 03:59 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ql_karaoke`
--

-- --------------------------------------------------------

--
-- Table structure for table `chi_tiet_su_dung_dv`
--

CREATE TABLE `chi_tiet_su_dung_dv` (
  `MaDatPhong` varchar(10) NOT NULL,
  `MaDV` varchar(10) NOT NULL,
  `SoLuong` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chi_tiet_su_dung_dv`
--

INSERT INTO `chi_tiet_su_dung_dv` (`MaDatPhong`, `MaDV`, `SoLuong`) VALUES
('DP0001', 'DV001', 20),
('DP0001', 'DV002', 10),
('DP0001', 'DV003', 3),
('DP0002', 'DV002', 10),
('DP0002', 'DV003', 1),
('DP0003', 'DV003', 2),
('DP0003', 'DV004', 10);

-- --------------------------------------------------------

--
-- Table structure for table `dat_phong`
--

CREATE TABLE `dat_phong` (
  `MaDatPhong` varchar(10) NOT NULL,
  `MaPhong` varchar(10) DEFAULT NULL,
  `MaKH` varchar(10) DEFAULT NULL,
  `NgayDat` date DEFAULT NULL,
  `GioBatDau` time DEFAULT NULL,
  `GioKetThuc` time DEFAULT NULL,
  `TienDatCoc` decimal(18,2) DEFAULT NULL,
  `GhiChu` text DEFAULT NULL,
  `TrangThaiDat` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dat_phong`
--

INSERT INTO `dat_phong` (`MaDatPhong`, `MaPhong`, `MaKH`, `NgayDat`, `GioBatDau`, `GioKetThuc`, `TienDatCoc`, `GhiChu`, `TrangThaiDat`) VALUES
('DP0001', 'P0001', 'KH0002', '2018-03-26', '11:00:00', '13:30:00', 100000.00, NULL, 'Da dat'),
('DP0002', 'P0001', 'KH0003', '2018-03-27', '17:15:00', '19:15:00', 50000.00, NULL, 'Da huy'),
('DP0003', 'P0002', 'KH0002', '2018-03-26', '20:30:00', '22:15:00', 100000.00, NULL, 'Da dat'),
('DP0004', 'P0003', 'KH0001', '2018-04-01', '19:30:00', '21:15:00', 200000.00, NULL, 'Da dat');

-- --------------------------------------------------------

--
-- Table structure for table `dich_vu_di_kem`
--

CREATE TABLE `dich_vu_di_kem` (
  `MaDV` varchar(10) NOT NULL,
  `TenDV` varchar(100) DEFAULT NULL,
  `DonViTinh` varchar(50) DEFAULT NULL,
  `DongGia` decimal(18,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dich_vu_di_kem`
--

INSERT INTO `dich_vu_di_kem` (`MaDV`, `TenDV`, `DonViTinh`, `DongGia`) VALUES
('DV001', 'Beer', 'lon', 10000.00),
('DV002', 'Nuoc ngot', 'lon', 8000.00),
('DV003', 'Trai cay', 'dia', 35000.00),
('DV004', 'Khan uot', 'cai', 2000.00);

-- --------------------------------------------------------

--
-- Table structure for table `khach_hang`
--

CREATE TABLE `khach_hang` (
  `MaKH` varchar(10) NOT NULL,
  `TenKH` varchar(100) DEFAULT NULL,
  `DiaChi` varchar(255) DEFAULT NULL,
  `SoDT` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `khach_hang`
--

INSERT INTO `khach_hang` (`MaKH`, `TenKH`, `DiaChi`, `SoDT`) VALUES
('KH0001', 'Nguyen Van A', 'Hoa xuan', '1111111111'),
('KH0002', 'Nguyen Van B', 'Hoa hai', '1111111112'),
('KH0003', 'Phan Van A', 'Cam le', '1111111113'),
('KH0004', 'Phan Van B', 'Hoa xuan', '1111111114');

-- --------------------------------------------------------

--
-- Table structure for table `phong`
--

CREATE TABLE `phong` (
  `MaPhong` varchar(10) NOT NULL,
  `LoaiPhong` varchar(50) DEFAULT NULL,
  `SoKhachToiDa` int(11) DEFAULT NULL,
  `GiaPhong` decimal(18,2) DEFAULT NULL,
  `MoTa` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phong`
--

INSERT INTO `phong` (`MaPhong`, `LoaiPhong`, `SoKhachToiDa`, `GiaPhong`, `MoTa`) VALUES
('P0001', 'Loại 1', 20, 60000.00, NULL),
('P0002', 'Loại 1', 25, 80000.00, NULL),
('P0003', 'Loại 2', 15, 50000.00, NULL),
('P0004', 'Loại 3', 20, 50000.00, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chi_tiet_su_dung_dv`
--
ALTER TABLE `chi_tiet_su_dung_dv`
  ADD PRIMARY KEY (`MaDatPhong`,`MaDV`),
  ADD KEY `MaDV` (`MaDV`);

--
-- Indexes for table `dat_phong`
--
ALTER TABLE `dat_phong`
  ADD PRIMARY KEY (`MaDatPhong`),
  ADD KEY `MaPhong` (`MaPhong`),
  ADD KEY `MaKH` (`MaKH`);

--
-- Indexes for table `dich_vu_di_kem`
--
ALTER TABLE `dich_vu_di_kem`
  ADD PRIMARY KEY (`MaDV`);

--
-- Indexes for table `khach_hang`
--
ALTER TABLE `khach_hang`
  ADD PRIMARY KEY (`MaKH`);

--
-- Indexes for table `phong`
--
ALTER TABLE `phong`
  ADD PRIMARY KEY (`MaPhong`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chi_tiet_su_dung_dv`
--
ALTER TABLE `chi_tiet_su_dung_dv`
  ADD CONSTRAINT `chi_tiet_su_dung_dv_ibfk_1` FOREIGN KEY (`MaDatPhong`) REFERENCES `dat_phong` (`MaDatPhong`),
  ADD CONSTRAINT `chi_tiet_su_dung_dv_ibfk_2` FOREIGN KEY (`MaDV`) REFERENCES `dich_vu_di_kem` (`MaDV`);

--
-- Constraints for table `dat_phong`
--
ALTER TABLE `dat_phong`
  ADD CONSTRAINT `dat_phong_ibfk_1` FOREIGN KEY (`MaPhong`) REFERENCES `phong` (`MaPhong`),
  ADD CONSTRAINT `dat_phong_ibfk_2` FOREIGN KEY (`MaKH`) REFERENCES `khach_hang` (`MaKH`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
