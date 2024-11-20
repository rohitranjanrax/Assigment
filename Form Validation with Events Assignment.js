// Wait for the DOM to fully load before executing
document.addEventListener("DOMContentLoaded", function() {

    // Get the form and input fields
    const form = document.getElementById("registration-form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    // Get the error message elements
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // Validate the name field
    function validateName() {
        if (nameField.value.trim() === "") {
            nameError.style.display = "block";  // Show error message
        } else {
            nameError.style.display = "none";  // Hide error message
        }
    }

    // Validate the email field
    function validateEmail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailField.value)) {
            emailError.style.display = "block";  // Show error message
        } else {
            emailError.style.display = "none";  // Hide error message
        }
    }

    // Validate the password field
    function validatePassword() {
        if (passwordField.value.length < 8) {
            passwordError.style.display = "block";  // Show error message
        } else {
            passwordError.style.display = "none";  // Hide error message
        }
    }

    // Add event listeners for real-time validation
    nameField.addEventListener("input", validateName);
    emailField.addEventListener("input", validateEmail);
    passwordField.addEventListener("input", validatePassword);

    // Form submit event
    form.addEventListener("submit", function(event) {
        validateName();
        validateEmail();
        validatePassword();

        // Prevent form submission if any field is invalid
        if (nameError.style.display === "block" || emailError.style.display === "block" || passwordError.style.display === "block") {
            event.preventDefault();  // Prevent the form from submitting
        }
    });
});
