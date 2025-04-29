document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const usernameRegex = /^[A-Za-z]{5,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!usernameRegex.test(username)) {
        alert("Username must be at least 5 alphabetic characters.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters and include uppercase, lowercase, and a number.");
        return;
    }

    // If validation passes
    alert("Sign up successful!");
    window.location.href = "../Home.html";
});
