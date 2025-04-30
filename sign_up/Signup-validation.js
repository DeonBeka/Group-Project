document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const usernameRegex = /^[A-Za-z]{5,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!usernameRegex.test(username)) {
        alert("Emri i perdoruesite duhe te kete minimum 5 karaktere");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("ju lutem shkruani nje email valide");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("passwordi duhet te jete minimumi 6 karaktere, te medha, te vogla dhe numra ");
        return;
    }

    // If validation passes
    alert("Regjistrimi i suksesshem");
    window.location.href = "../Home.html";
});
