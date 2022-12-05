-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 05, 2022 lúc 02:18 AM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `findparking_api`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `parkingId` int(11) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `licensePlate` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `status` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`orderId`, `userId`, `parkingId`, `userName`, `licensePlate`, `time`, `status`) VALUES
(1, 3, 1, 'quangtrung', '74 - f1 89453', '19:50:32, 3/12/2022', 1),
(2, 1, 2, 'vunguyen', '74-f1 89563', '20:26:41, 3/12/2022', 0),
(3, 1, 4, 'vunguyen', '43 f2- 84563', '15:13:49, 4/12/2022', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `parkings`
--

CREATE TABLE `parkings` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `coordinates` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `maxslot` int(11) NOT NULL,
  `currentslot` int(11) NOT NULL,
  `owner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `parkings`
--

INSERT INTO `parkings` (`id`, `image`, `name`, `coordinates`, `address`, `introduce`, `price`, `maxslot`, `currentslot`, `owner`) VALUES
(1, 'data/3.jpg', 'test hình 1', '108.2408423705819,16.05681069899815', '214 Lương Nhữ Hộc, Khuê Trung, Cẩm Lệ, Đà Nẵng 550000, Việt Nam', 'bãi đõ xe có bảo hệ 24/7, có mái che, không cho phép đỗ xe qua đêm', '20000', 343, 19, 2),
(2, 'data/4.jpg', 'Bãi Đỗ xe sân bay', '108.18745568234988,16.04724252754744', 'ngay phía trong sân bay', 'bãi đỗ xe cho khách , bảo vệ nghiêm ngặt', '30000', 343, 22, 2),
(4, 'data/6.jpg', 'bãi đỗ xe quang trung', '108.20711090999237,16.077430194288908', '02 quang trung', 'bãi đõ xe có mãi che', '5000', 50, 24, 3),
(5, 'data/1.jpg', ' dfghdgf  ', '108.21543648684309,16.037508916054364', 'd fgh dfg hdfg hdfg dfg hfg hdf', 'd gfh dfg hdfg dfg df dfg ', '45546', 5456, 45, 1),
(6, 'data/2.jpg', 'bãi đỗ xe số 5', '108.18333580934353,16.024145048087064', 'cuối kiệt lê trọng tấn', 'bãi đỗ xe đố tài xế nào tìm ra được', '45546', 54, 45, 1),
(7, 'data/5.jpg', 'bãi đỗ xe Trần Thị Lý', '108.22187378847934,16.05045946407607', 'ngay cầu vượt trần thị lý', 'có mái che sạch đẹp bảo vệ 24/24', '20000', 30, 20, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `account` int(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `active` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`userId`, `name`, `password`, `account`, `email`, `phone`, `active`) VALUES
(1, 'vunguyen', '123456', 0, 'nguyenquangvu@gmail.com', '0879998736', 1),
(2, 'minhha', '123456', 1, 'nguyenquangvu@gmail.com', '0879998736', 1),
(3, 'quangtrung', '123456', 1, 'quangtrung@gmail.com', '0879999999', 1),
(4, 'minhducNguyen', '123456', 1, 'minhducNguyen@gmail.com', '0879998736', 1),
(5, 'Thanh88', '123456', 1, 'Thanh88@gmail.com', '0879998736', 0),
(7, 'hanhphuc', '123456', 1, 'hanhphuc@gmail.com', '09684564', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Chỉ mục cho bảng `parkings`
--
ALTER TABLE `parkings`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `parkings`
--
ALTER TABLE `parkings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
