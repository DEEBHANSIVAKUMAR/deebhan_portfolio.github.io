// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Success message
const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", () => {
    setTimeout(() => {
        successMsg.style.display = "block";
        form.reset();
    }, 500);
});
