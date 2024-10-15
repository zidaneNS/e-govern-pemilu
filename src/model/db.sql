-- Membuat database
CREATE DATABASE IF NOT EXISTS citech_kpu;

-- Menggunakan database
USE citech_kpu;

-- Membuat tabel profil pemerintah
CREATE TABLE IF NOT EXISTS profil_pemerintah (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nip VARCHAR(255),
    nama VARCHAR(255),
    password VARCHAR(255)
);

-- Membuat tabel profil panitia
CREATE TABLE IF NOT EXISTS profil_panitia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nik VARCHAR(255),
    nama VARCHAR(255),
    password VARCHAR(255)
);

-- Membuat tabel partai
CREATE TABLE IF NOT EXISTS partai (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255),
    logoUrl VARCHAR(255),
    filePath VARCHAR(255)
);

-- Membuat tabel caleg
CREATE TABLE IF NOT EXISTS caleg (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_partai INT,
    nama VARCHAR(255),
    imgUrl VARCHAR(255),
    filePath VARCHAR(255),
    id_pegawai INT,
    category ENUM ('presiden wapres', 'dpr') NOT NULL,
    no_urut INT,
    FOREIGN KEY (id_partai) REFERENCES partai(id),
    FOREIGN KEY (id_pegawai) REFERENCES profil_pemerintah(id)
);