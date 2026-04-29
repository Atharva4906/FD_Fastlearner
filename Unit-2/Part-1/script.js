// script.js

// 1. Grab the form and specific DOM elements
const form = document.getElementById('registrationForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// 2. Listen for the form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Reset errors and input styling on every submission attempt
    let isValid = true;
    emailError.textContent = '';
    passwordError.textContent = '';
    emailInput.classList.remove('invalid');
    passwordInput.classList.remove('invalid');

    // Fetch the current values from the inputs
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // --- EMAIL VALIDATION ---
    // A standard Regular Expression to check for valid email formatting
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        emailError.textContent = 'Email is required.';
        emailInput.classList.add('invalid');
        isValid = false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('invalid');
        isValid = false;
    }

    // --- PASSWORD VALIDATION ---
    if (passwordValue === '') {
        passwordError.textContent = 'Password is required.';
        passwordInput.classList.add('invalid');
        isValid = false;
    } else if (passwordValue.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordInput.classList.add('invalid');
        isValid = false;
    }

    // --- FINAL CHECK ---
    if (isValid) {
        // If all checks pass, you would typically send data to your server here.
        // For this example, we'll just show an alert and clear the form.
        alert('Form successfully validated and ready to submit!');
        form.reset();
    }
});