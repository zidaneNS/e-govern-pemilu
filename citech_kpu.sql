-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2024 at 02:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `citech_kpu`
--

-- --------------------------------------------------------

--
-- Table structure for table `caleg`
--

CREATE TABLE `caleg` (
  `id` int(11) NOT NULL,
  `id_partai` int(11) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `filePath` varchar(255) DEFAULT NULL,
  `id_pegawai` int(11) DEFAULT NULL,
  `category` enum('presiden wapres','dpr') NOT NULL,
  `no_urut` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `caleg`
--

INSERT INTO `caleg` (`id`, `id_partai`, `nama`, `imgUrl`, `filePath`, `id_pegawai`, `category`, `no_urut`) VALUES
(1, 3, 'zidane', 'http://localhost:5000/kpu/uploads/profilImg/1728970464044-zidane.jpg', 'profilImg/1728970464044-zidane.jpg', 1, 'dpr', 1),
(2, 3, 'zidane', 'http://localhost:5000/kpu/uploads/profilImg/1728970482692-zidane.jpg', 'profilImg/1728970482692-zidane.jpg', 1, 'presiden wapres', 1),
(3, 3, 'zidane1', 'http://localhost:5000/kpu/uploads/profilImg/1728970667133-zidane.jpg', 'profilImg/1728970667133-zidane.jpg', 1, 'presiden wapres', 2),
(4, 8, 'Darmaji', 'http://localhost:5000/kpu/uploads/profilImg/1728971203442-Screenshot 2024-04-30 225147.png', 'profilImg/1728971203442-Screenshot 2024-04-30 225147.png', 5, 'dpr', 2),
(5, 8, 'Mulik', 'http://localhost:5000/kpu/uploads/profilImg/1728971248051-Screenshot 2024-05-09 105034.png', 'profilImg/1728971248051-Screenshot 2024-05-09 105034.png', 5, 'presiden wapres', 3);

-- --------------------------------------------------------

--
-- Table structure for table `partai`
--

CREATE TABLE `partai` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `logoUrl` varchar(255) DEFAULT NULL,
  `filePath` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `partai`
--

INSERT INTO `partai` (`id`, `nama`, `logoUrl`, `filePath`) VALUES
(3, 'PSG', 'http://localhost:5000/kpu/uploads/logoPartai/1728782947981-Screenshot (1).png', 'logoPartai/1728782947981-Screenshot (1).png'),
(8, 'PSHT', 'http://localhost:5000/kpu/uploads/logoPartai/1728786180675-Screenshot 2024-04-03 203433.png', 'logoPartai/1728786180675-Screenshot 2024-04-03 203433.png'),
(10, 'PHSST', 'http://localhost:5000/kpu/uploads/logoPartai/1728915704529-Screenshot 2024-03-14 154936.png', 'logoPartai/1728915704529-Screenshot 2024-03-14 154936.png'),
(11, 'PKS', 'http://localhost:5000/kpu/uploads/logoPartai/1728971093465-Screenshot 2024-04-30 191619.png', 'logoPartai/1728971093465-Screenshot 2024-04-30 191619.png');

-- --------------------------------------------------------

--
-- Table structure for table `profil_panitia`
--

CREATE TABLE `profil_panitia` (
  `id` int(11) NOT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profil_panitia`
--

INSERT INTO `profil_panitia` (`id`, `nik`, `nama`, `password`) VALUES
(2, '2378', 'supardi', '$2y$10$RO7SgRw.GBPhQlVAHMRN2e./Aa3OYQoMzfgaVQImFOIiDVXM0kY3G');

-- --------------------------------------------------------

--
-- Table structure for table `profil_pemerintah`
--

CREATE TABLE `profil_pemerintah` (
  `id` int(11) NOT NULL,
  `nip` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profil_pemerintah`
--

INSERT INTO `profil_pemerintah` (`id`, `nip`, `nama`, `password`) VALUES
(1, '12345', 'zidane_sigma', '$2y$10$krl4fDJ.AojgoQRCAUUyNOWJrtMiRYVVINeVr2bBN2tp9xZbU2FSa'),
(5, '123456', 'gading', '$2y$10$Nj1clb7l0wR4EM3LHwXnMeck8jMSaa637d31dCiya6peciTnRD99m');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `caleg`
--
ALTER TABLE `caleg`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_partai` (`id_partai`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `partai`
--
ALTER TABLE `partai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profil_panitia`
--
ALTER TABLE `profil_panitia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profil_pemerintah`
--
ALTER TABLE `profil_pemerintah`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `caleg`
--
ALTER TABLE `caleg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `partai`
--
ALTER TABLE `partai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `profil_panitia`
--
ALTER TABLE `profil_panitia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profil_pemerintah`
--
ALTER TABLE `profil_pemerintah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `caleg`
--
ALTER TABLE `caleg`
  ADD CONSTRAINT `caleg_ibfk_1` FOREIGN KEY (`id_partai`) REFERENCES `partai` (`id`),
  ADD CONSTRAINT `caleg_ibfk_2` FOREIGN KEY (`id_pegawai`) REFERENCES `profil_pemerintah` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
