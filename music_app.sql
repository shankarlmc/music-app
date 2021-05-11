-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2021 at 01:53 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `music_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `musics`
--

CREATE TABLE `musics` (
  `s_id` int(11) NOT NULL,
  `song_name` varchar(255) NOT NULL,
  `artist_name` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `playlist_name` varchar(25) DEFAULT 'Shankar''s Playlist',
  `image` varchar(255) DEFAULT 'images/music.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `musics`
--

INSERT INTO `musics` (`s_id`, `song_name`, `artist_name`, `file_name`, `playlist_name`, `image`) VALUES
(4, 'InfiNoise-Sunlight', 'InfiNoise', 'InfiNoise-Sunlight.mp3', 'Shankar\'s Playlist', 'images/music.jpg'),
(5, 'Anxmu5--Sound-of-Nepal-Free-Vlog-Background-music-Mountain-music-No-copyright-music-MP3-160K-', 'Anxmus', 'Anxmu5--Sound-of-Nepal-Free-Vlog-Background-music-Mountain-music-No-copyright-music-MP3-160K-.mp3', 'Shankar\'s Playlist', 'images/music.jpg'),
(6, 'AMaroon-5---Girls-Like-You-Lyrics-ft', 'Maroon-5', 'AMaroon-5---Girls-Like-You-Lyrics-ft.mp3', 'Shankar\'s Playlist', 'images/music.jpg'),
(7, '50-Cent---In-Da-Club-Int-l-Version-Official-Video-', '50 Cent', '50-Cent---In-Da-Club-Int-l-Version-Official-Video-.mp3', 'Shankar\'s Playlist', 'images/music.jpg'),
(8, 'Bom Diggy Diggy  (VIDEO) _ Zack Knight _ Jasmin Wa(MP3_160K)', 'Jasmin Walia', 'Bom Diggy Diggy  (VIDEO) _ Zack Knight _ Jasmin Wa(MP3_160K).mp3', 'Shankar\'s Playlist', 'images/music.jpg'),
(9, 'Ed Sheeran - Perfect (Official Music Video)(MP3_128K)', 'Ed Sheeran', 'Ed Sheeran - Perfect (Official Music Video)(MP3_128K).mp3', 'Shankar\'s Playlist', 'images/music.jpg'),
(10, 'Anne-Marie_-_FRIENDS_(Music_Video)__OFFICIAL_FRIENDZONE_ANTHEM_', 'Anne-Marie', 'Anne-Marie_-_FRIENDS_(Music_Video)__OFFICIAL_FRIENDZONE_ANTHEM_.mp3', 'Shankar\'s Playlist', 'images/music.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `musics`
--
ALTER TABLE `musics`
  ADD PRIMARY KEY (`s_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `musics`
--
ALTER TABLE `musics`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
