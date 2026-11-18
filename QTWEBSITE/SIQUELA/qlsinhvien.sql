CREATE DATABASE  IF NOT EXISTS `qlsinhvien` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `qlsinhvien`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: qlsinhvien
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ketqua`
--

DROP TABLE IF EXISTS `ketqua`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ketqua` (
  `MaSV` varchar(5) NOT NULL,
  `MaMon` varchar(5) NOT NULL,
  `Diem` int NOT NULL,
  PRIMARY KEY (`MaSV`,`MaMon`),
  KEY `MaMon` (`MaMon`),
  CONSTRAINT `ketqua_ibfk_1` FOREIGN KEY (`MaSV`) REFERENCES `sinhvien` (`MaSV`),
  CONSTRAINT `ketqua_ibfk_2` FOREIGN KEY (`MaMon`) REFERENCES `monhoc` (`MaMon`),
  CONSTRAINT `ketqua_chk_1` CHECK (((`Diem` >= 0) and (`Diem` <= 10)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ketqua`
--

LOCK TABLES `ketqua` WRITE;
/*!40000 ALTER TABLE `ketqua` DISABLE KEYS */;
INSERT INTO `ketqua` VALUES ('SV01','M1',8),('SV01','M2',6),('SV01','M3',7),('SV01','M4',8),('SV02','M1',7),('SV02','M2',3),('SV02','M3',2),('SV02','M4',5),('SV03','M1',5),('SV03','M2',7),('SV03','M3',8),('SV03','M4',10),('SV04','M1',4),('SV04','M2',8),('SV04','M3',7),('SV04','M4',7),('SV05','M1',8),('SV05','M2',8),('SV05','M3',8),('SV05','M4',4),('SV06','M1',9),('SV06','M2',9),('SV06','M3',4),('SV06','M4',9),('SV07','M1',9),('SV07','M2',4),('SV07','M3',10),('SV07','M4',5),('SV08','M1',9),('SV08','M2',6),('SV08','M3',8),('SV08','M4',6),('SV09','M1',9),('SV09','M2',6),('SV09','M3',10),('SV09','M4',8),('SV10','M1',9),('SV10','M2',5),('SV10','M3',6),('SV10','M4',5);
/*!40000 ALTER TABLE `ketqua` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khoa`
--

DROP TABLE IF EXISTS `khoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `khoa` (
  `MaKhoa` varchar(5) NOT NULL,
  `TenKhoa` varchar(50) NOT NULL,
  PRIMARY KEY (`MaKhoa`),
  UNIQUE KEY `TenKhoa_UNIQUE` (`TenKhoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khoa`
--

LOCK TABLES `khoa` WRITE;
/*!40000 ALTER TABLE `khoa` DISABLE KEYS */;
INSERT INTO `khoa` VALUES ('K3','Công nghệ ô tô'),('K1','Công nghệ thông tin'),('K2','Điện'),('K4','Kế toán'),('K5','May thời trang');
/*!40000 ALTER TABLE `khoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lop`
--

DROP TABLE IF EXISTS `lop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lop` (
  `MaLop` varchar(5) NOT NULL,
  `TenLop` varchar(50) NOT NULL,
  `MaKhoa` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`MaLop`),
  KEY `MaKhoa` (`MaKhoa`),
  CONSTRAINT `lop_ibfk_1` FOREIGN KEY (`MaKhoa`) REFERENCES `khoa` (`MaKhoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lop`
--

LOCK TABLES `lop` WRITE;
/*!40000 ALTER TABLE `lop` DISABLE KEYS */;
INSERT INTO `lop` VALUES ('L1','CT01','K1'),('L2','CT02','K2'),('L3','CT03','K3'),('L4','CT04','K4'),('L5','CT05','K5');
/*!40000 ALTER TABLE `lop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monhoc`
--

DROP TABLE IF EXISTS `monhoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monhoc` (
  `MaMon` varchar(5) NOT NULL,
  `TenMon` varchar(45) NOT NULL,
  `SoTinChi` int NOT NULL,
  PRIMARY KEY (`MaMon`),
  CONSTRAINT `monhoc_chk_1` CHECK (((`SoTinChi` >= 0) and (`SoTinChi` <= 12)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monhoc`
--

LOCK TABLES `monhoc` WRITE;
/*!40000 ALTER TABLE `monhoc` DISABLE KEYS */;
INSERT INTO `monhoc` VALUES ('M1','Thiết kế web',6),('M2','Access',4),('M3','Word',3),('M4','Tiếng anh giao tiếp',5);
/*!40000 ALTER TABLE `monhoc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sinhvien`
--

DROP TABLE IF EXISTS `sinhvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sinhvien` (
  `MaSV` varchar(5) NOT NULL,
  `Ho` varchar(50) NOT NULL,
  `Ten` varchar(20) NOT NULL,
  `GioiTinh` tinyint(1) NOT NULL,
  `NgaySinh` date NOT NULL,
  `NoiSinh` varchar(45) DEFAULT NULL,
  `DiaChi` varchar(50) DEFAULT NULL,
  `DienThoai` varchar(10) DEFAULT NULL,
  `MaLop` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`MaSV`),
  KEY `MaLop` (`MaLop`),
  CONSTRAINT `sinhvien_ibfk_1` FOREIGN KEY (`MaLop`) REFERENCES `lop` (`MaLop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sinhvien`
--

LOCK TABLES `sinhvien` WRITE;
/*!40000 ALTER TABLE `sinhvien` DISABLE KEYS */;
INSERT INTO `sinhvien` VALUES ('SV01','Phạm Diệu','Linh',0,'2003-01-10','TP.HCM','Biên Hòa Đồng Nai','0847232834','L1'),('SV02','Phạm Hà','Linh',0,'2003-04-24','ĐN','quận 1 Tp HCM','0247243834','L1'),('SV03','Tạ Quang','Minh',1,'2003-10-10','TP.HCM','Biên Hòa Đồng Nai','0134232834','L1'),('SV04','Trương Minh','Đức',1,'2003-08-14','ĐN','ĐN',NULL,'L1'),('SV05','Trần Khánh','Chi',0,'2003-05-10','TP.HCM','Biên Hòa Đồng Nai','0845232834','L1'),('SV06','Phạm Anh','Thư',0,'2003-12-11','TP.HCM','ĐN','0347532834','L2'),('SV07','Đỗ Quân','Anh',1,'2003-11-10','ĐN','quận 1 Tp HCM','0946232834','L2'),('SV08','Đỗ Thanh','Phong',1,'2003-03-11','ĐN','ĐN','0544222834','L2'),('SV09','Đỗ Ngọc','Anh',0,'2003-04-12','ĐN','ĐN',NULL,'L2'),('SV10','Phạm Ngọc','Nam',1,'2003-03-05','ĐN','quận 1 Tp HCM','0234232834','L2'),('SV11','Đỗ Hoàng','Duy',1,'2003-10-12','TP.HCM','quận 2 Tp HCM','0382364372','L3'),('SV12','Trần Thị','Oanh',0,'2003-01-22','TP.HCM','quận 1 Tp HCM','0238746278','L3'),('SV13','Phạm Quốc','Việt',1,'2003-03-12','TP.HCM','Biên Hòa Đồng Nai',NULL,'L3'),('SV14','Võ Thanh','Hà',1,'2003-04-24','ĐN','quận 1 Tp HCM','0245643834','L3'),('SV15','Tạ Quang','Thắng',1,'2003-12-10','ĐN','ĐN','0238230834','L3'),('SV16','Trương Minh','Tuấn',1,'2003-01-16','ĐN','ĐN',NULL,'L4'),('SV17','Trần Khánh','Linh',0,'2003-12-10','ĐN','quận 1 Tp HCM','0245532834','L4'),('SV18','Phạm Minh','Thư',0,'2003-01-21','ĐN','ĐN','0345932830','L4'),('SV19','Đỗ Quân','Hà',1,'2003-12-10','ĐN','ĐN','0940230834','L4'),('SV20','Đỗ Thanh','Tùng',1,'2003-03-11','ĐN','quận 1 Tp HCM','0540220834','L4'),('SV21','Đỗ Ngọc','Ánh',0,'2003-04-12','ĐN','ĐN',NULL,'L5'),('SV22','Phạm Ngọc Minh','Thư',0,'2003-03-05','ĐN','quận 1 Tp HCM','0234030834','L5'),('SV23','Nguyễn Minh','Tuấn',1,'2003-03-05','ĐN','ĐN','0234202834','L5'),('SV24','Trần Anh','Thư',0,'2003-02-05','ĐN','quận 1 Tp HCM','0234232034','L5'),('SV25','Phạm Kiều','Oanh',1,'2003-03-20','ĐN','quận 1 Tp HCM','0204231834','L5');
/*!40000 ALTER TABLE `sinhvien` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-06 19:07:12