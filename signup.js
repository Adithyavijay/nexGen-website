let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");  const signupButton = document.querySelector('.signup-box .clkbtn');
const nameInput = document.querySelector('.signup-box .name');
const emailInput = document.querySelector('.signup-box .email');
const passwordInput = document.querySelector('.signup-box .password');
const confirmPasswordInput = document.querySelector('.signup-box input[placeholder="Confirm password"]');
const loginButton = document.querySelector('.login-box .clkbtn');
const loginEmailInput = document.querySelector('.login-box .email');
const loginPasswordInput = document.querySelector('.login-box .password');
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
 
   // Function to validate the email format using a regular expression
   function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to display error messages
function showError(inputElement, message) {
    // Remove any existing error message
    const errorElement = inputElement.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = message;
    } else {
        // Create a new error message element
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
        inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
    }
}

// Function to remove error messages
function removeError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
    }
}

// Adding event listener for the signup button
signupButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for validation
    
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Validate name
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    }

    // Validate email
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Invalid email format');
        isValid = false;
    }

    // Validate password
    if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'Password is required');
        isValid = false;
    }

    // Validate confirm password
    if (confirmPasswordInput.value.trim() === '') {
        showError(confirmPasswordInput, 'Confirm password is required');
        isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Passwords do   not match');
        isValid = false;
    }

    // If all validations pass, you can proceed with form submission or further processing
    if (isValid) {
        alert('Signup successful!');
        // You can submit the form or perform an action here
    }
}); 
// Validation for login form

loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Validate email
    if (loginEmailInput.value.trim() === '') {
        showError(loginEmailInput, 'Email is required');
        isValid = false;
    } else if (!validateEmail(loginEmailInput.value)) {
        showError(loginEmailInput, 'Invalid email format');
        isValid = false;
    }

    // Validate password
    if (loginPasswordInput.value.trim() === '') {
        showError(loginPasswordInput, 'Password is required');
        isValid = false;
    }

    // If all validations pass, you can proceed with form submission or further processing
    if (isValid) {
        alert('Login successful!');
        // You can submit the form or perform an action here
    }
}); 