# Live Student Verification

A lightweight single-page web widget that verifies a student's enrollment status asynchronously using the **JavaScript Fetch API**, **JSON**, and a **PHP** backend—updating the DOM dynamically without reloading the page.

Built for **COMP 016 – Web Development (Lab Activity 6)**.

## Features

- Asynchronous `POST` requests using the Fetch API (`application/json`)
- Raw JSON payload parsing in PHP via `php://input` and `json_decode()`
- Instant DOM updates with visual status feedback (green for verified, red for validation errors)
- Zero page reloads and no external dependencies

## Project Structure

```text
.
├── index.html   # Frontend UI (input, verify button, and dynamic result container)
├── app.js       # Fetch API logic and DOM manipulation
├── verify.php   # PHP API endpoint for JSON request/response handling
├── LICENSE      # MIT License
└── README.md
```

## How to Run Locally (XAMPP)

1. Clone this repository into your XAMPP `htdocs` directory:
   ```bash
   cd C:\xampp\htdocs
   git clone https://github.com/francisconguis/php-fetch-student-verification.git
   ```
2. Open the **XAMPP Control Panel** and start **Apache**.
3. Navigate to:
   ```text
   http://localhost/php-fetch-student-verification/index.html
   ```
4. Enter a student name and click **Verify Student** to see the verified response, or submit an empty input to test the error state.

## API Overview (`verify.php`)

**Request (`POST`, `Content-Type: application/json`):**
```json
{
  "student_name": "Tony Stark"
}
```

**Success Response:**
```json
{
  "status": "success",
  "message": "Student 'Tony Stark' is officially verified and enrolled."
}
```

**Error Response:**
```json
{
  "status": "error",
  "message": "Verification failed: No name provided."
}
```

## Author

**Francis Conguis**

## License

This project is licensed under the [MIT License](LICENSE).
