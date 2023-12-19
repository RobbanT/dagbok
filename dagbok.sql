-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 19 dec 2023 kl 22:29
-- Serverversion: 5.7.39
-- PHP-version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `dagbok`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `note`
--

CREATE TABLE `note` (
  `id` int(11) NOT NULL,
  `title` varchar(25) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `text` varchar(800) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `note`
--

INSERT INTO `note` (`id`, `title`, `date`, `text`) VALUES
(306, 'Hej på dig', '2023-12-04', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nisi risus, ac tempus nisl sodales eu. Aenean sit amet elit ut nulla ornare tristique. Nulla velit tellus, hendrerit nec orci nec, porttitor consectetur odio. Vivamus eget neque ac magna dapibus suscipit sit amet suscipit lacus. Etiam eget pretium justo. Duis lacinia feugiat libero eget porttitor. Proin consectetur auctor mi vel dapibus. Nullam vel dapibus nunc. Suspendisse ullamcorper cursus imperdiet.'),
(307, 'Hallå där', '2023-11-01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nisi risus, ac tempus nisl sodales eu. Aenean sit amet elit ut nulla ornare tristique. Nulla velit tellus, hendrerit nec orci nec, porttitor consectetur odio. Vivamus eget neque ac magna dapibus suscipit sit amet suscipit lacus. Etiam eget pretium justo. Duis lacinia feugiat libero eget porttitor. Proin consectetur auctor mi vel dapibus. Nullam vel dapibus nunc. Suspendisse ullamcorper cursus imperdiet.'),
(308, 'Nej!', '2023-10-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nisi risus, ac tempus nisl sodales eu. Aenean sit amet elit ut nulla ornare tristique. Nulla velit tellus, hendrerit nec orci nec, porttitor consectetur odio. Vivamus eget neque ac magna dapibus suscipit sit amet suscipit lacus. Etiam eget pretium justo. Duis lacinia feugiat libero eget porttitor. Proin consectetur auctor mi vel dapibus. Nullam vel dapibus nunc. Suspendisse ullamcorper cursus imperdiet.');

-- --------------------------------------------------------

--
-- Tabellstruktur `note_seq`
--

CREATE TABLE `note_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `note_seq`
--

INSERT INTO `note_seq` (`next_val`) VALUES
(401);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `note`
--
ALTER TABLE `note`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=309;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
