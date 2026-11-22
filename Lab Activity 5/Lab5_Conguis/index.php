<?php include 'header.php'; ?>

<form method="POST" action="process.php">
    <div class="form-group">
        <label for="student_name">Full Name:</label>
        <input type="text" id="student_name" name="student_name" placeholder="e.g. Juan Dela Cruz" required>
    </div>

    <div class="form-group">
        <label for="student_number">Student Number:</label>
        <input type="text" id="student_number" name="student_number" placeholder="e.g. 2023-00123-MN-0" required>
    </div>

    <div class="form-group">
        <label for="year_level">Year Level:</label>
        <input type="number" id="year_level" name="year_level" min="1" max="5" placeholder="e.g. 3" required>
    </div>

    <button type="submit">Register</button>
</form>

<?php include 'footer.php'; ?>
