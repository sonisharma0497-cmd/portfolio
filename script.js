
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


// SCROLL REVEAL ANIMATION

const animatedElements = document.querySelectorAll(
    ".section-bar, .project-card, .process-panel, .tools-panel, .education-item, .certificate-strip, .closing-panel, .contact-panel"
);

animatedElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

animatedElements.forEach(element => {
    observer.observe(element);
});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
