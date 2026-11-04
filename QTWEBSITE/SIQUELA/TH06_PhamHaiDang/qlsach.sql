-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2026 at 02:36 AM
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
-- Database: `qlsach`
--

-- --------------------------------------------------------

--
-- Table structure for table `sach`
--

CREATE TABLE `sach` (
  `masach` varchar(8) NOT NULL,
  `tensach` varchar(40) NOT NULL,
  `tacgia` varchar(40) NOT NULL,
  `nxb` varchar(40) DEFAULT 'Nhà xuất bản Trẻ',
  `dongia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sach`
--

INSERT INTO `sach` (`masach`, `tensach`, `tacgia`, `nxb`, `dongia`) VALUES
('S001', 'Cho Tôi Xin Một Vé Đi Tuổi Thơ', 'Nguyễn Nhật Ánh', 'Nhà xuất bản Trẻ', 120000),
('S002', 'Mắt Biếc', 'Nguyễn Nhật Ánh', 'Nhà xuất bản Trẻ', 110000),
('S003', 'Kính Vạn Hoa', 'Nguyễn Nhật Ánh', 'Nhà xuất bản Trẻ', 95000),
('S004', 'Nhà Giả Kim', 'Paulo Coelho', 'Nhà xuất bản Văn Học', 89000),
('S005', 'Đắc Nhân Tâm', 'Dale Carnegie', 'Nhà xuất bản Tổng Hợp', 98000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sach`
--
ALTER TABLE `sach`
  ADD PRIMARY KEY (`masach`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
