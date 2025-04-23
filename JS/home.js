function scrollToJoin() {
    const joinSection = document.getElementById('join');
    joinSection.scrollIntoView({ behavior: 'smooth' });
  }

  function validateForm(event) {
    event.preventDefault();

    const formData = {
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        gender: document.getElementById('gender').value,
        fitnessLevel: document.getElementById('fitnessLevel').value,
        goal: document.querySelector('input[name="goal"]:checked').value,
        medicalHistory: document.getElementById('medicalHistory').value,
        emergencyName: document.getElementById('emergencyName').value,
        emergencyPhone: document.getElementById('emergencyPhone').value
    };

    if (!formData.fullName || !formData.age || !formData.height || !formData.weight) {
        alert('Please fill in all required fields');
        return false;
    }

    if (formData.age < 12 || formData.age > 100) {
        alert('Please enter a valid age (12-100)');
        return false;
    }

    alert('Form submitted successfully!\n' + JSON.stringify(formData, null, 2));


    document.getElementById('fitnessForm').reset();
    return false;
}


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});