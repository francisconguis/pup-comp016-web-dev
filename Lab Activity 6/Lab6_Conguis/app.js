let verifyBtn = document.getElementById('verifyBtn');
let nameInput = document.getElementById('nameInput');
let resultText = document.getElementById('resultText');

verifyBtn.addEventListener('click', function() {
    // 1. Create a JavaScript Object with the input value
    let requestData = {
        student_name: nameInput.value
    };

    // 2. Make the Asynchronous POST request
    fetch('verify.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData) // Convert JS Object to JSON
    })
    .then(response => response.json()) // Parse the PHP response
    .then(data => {
        // 3. Update the DOM based on the server's JSON response
        resultText.innerHTML = data.message;

        if(data.status === "success") {
            resultText.style.color = "green";
        } else {
            resultText.style.color = "red";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        resultText.innerHTML = "A network error occurred.";
    });
});
