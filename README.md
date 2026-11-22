# COMP 016 – Web Development

A collection of laboratory activities for **COMP 016 (Web Development)** at the Polytechnic University of the Philippines (PUP), covering frontend fundamentals, PHP backend scripting, database integration, and asynchronous JSON/Fetch API communication.

## Repository Structure

| Activity | Path | Description |
| :--- | :--- | :--- |
| **Lab Activity 2** | `Lab Activity 2/` | Web Development Lab Activity 2 |
| **Lab Activity 3** | `Lab Activity 3/` | Web Development Lab Activity 3 |
| **Lab Activity 4** | `Lab Activity 4/Lab4_Conguis/` | Web Development Lab Activity 4 |
| **Lab Activity 5** | `Lab Activity 5/Lab5_Conguis/` & `Lab Activity 5/setup.sql` | PHP & Database Integration (includes `setup.sql` schema/seed script) |
| **Lab Activity 6** | `Lab Activity 6/Lab6_Conguis/` | Live Student Verification Widget (JSON & JavaScript Fetch API with PHP backend) |

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+ / Fetch API)
- **Backend:** PHP
- **Database:** MySQL / MariaDB (via XAMPP)

## How to Run Locally (XAMPP)

1. Clone this repository into your XAMPP `htdocs` directory:
   ```bash
   cd C:\xampp\htdocs
   git clone https://github.com/francisconguis/pup-comp016-web-dev.git
   ```
2. Open the **XAMPP Control Panel** and start **Apache** (and **MySQL** for database-backed activities like Lab Activity 5).
3. For **Lab Activity 5**, import `Lab Activity 5/setup.sql` in **phpMyAdmin** (`http://localhost/phpmyadmin`).
4. Open the desired lab in your browser via `http://localhost/pup-comp016-web-dev/...`.

## Author

**Francis Conguis**

## License

This repository is licensed under the [MIT License](LICENSE).
