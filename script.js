// ---------------------------------------
// NAVBAR TOGGLE (Mobile Menu)
// ---------------------------------------
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}



// ---------------------------------------
// AUTO UPDATE FOOTER YEAR
// ---------------------------------------
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}



// ---------------------------------------
// CONTACT FORM (FormSubmit Compatible)
// NOTE:
// - NO preventDefault()
// - NO mailto()
// - FormSubmit needs a REAL POST request
// ---------------------------------------
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', () => {
        // Small UX touch (optional)
        // Does NOT block form submission
        setTimeout(() => {
            console.log("Form submitted via FormSubmit.co ✔");
        }, 200);
    });
}



// ---------------------------------------
// CLOSE MOBILE MENU ON LINK CLICK
// (Better UX on phones)
// ---------------------------------------
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});
