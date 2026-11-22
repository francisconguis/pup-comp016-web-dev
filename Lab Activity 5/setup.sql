-- Database Setup for Lab Activity 5
CREATE DATABASE IF NOT EXISTS pup_tech_conf;
USE pup_tech_conf;

CREATE TABLE IF NOT EXISTS registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    student_number VARCHAR(20) NOT NULL,
    year_level INT NOT NULL
);
