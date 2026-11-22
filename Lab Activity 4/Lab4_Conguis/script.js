// Part 2: DOM Manipulation & Event Listeners (JavaScript)

// 1. The Enrollment Button:
// Store the enrollBtn and statusMessage in variables
const enrollBtn = document.getElementById("enrollBtn");
const statusMessage = document.getElementById("statusMessage");

// Add an addEventListener to enrollBtn that listens for a "click"
enrollBtn.addEventListener("click", function () {
    // Change the innerHTML of statusMessage
    statusMessage.innerHTML = "Status: Officially Enrolled for the Semester";
    // Dynamically change the CSS color of statusMessage to green
    statusMessage.style.color = "green";
});

// 2. The Dark Mode Feature (Functions):
// Create a reusable function called toggleTheme()
function toggleTheme() {
    // Toggle between dark mode and default light mode
    if (document.body.style.backgroundColor === "rgb(51, 51, 51)" || document.body.style.backgroundColor === "#333") {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    } else {
        // Change background to a dark color (#333) and text to white
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white";
    }
}

// Add an addEventListener on themeBtn to call toggleTheme() when clicked
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", toggleTheme);
