/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
});


/* =========================
   FAQ ACCORDION
   ========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.setAttribute("aria-expanded", "false");

    question.addEventListener("click", () => {
        const currentItem = question.parentElement;
        const isOpen = currentItem.classList.contains("active");

        faqQuestions.forEach((otherQuestion) => {
            const otherItem = otherQuestion.parentElement;

            otherItem.classList.remove("active");
            otherQuestion.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
            currentItem.classList.add("active");
            question.setAttribute("aria-expanded", "true");
        }
    });
});


/* =========================
   MOBILE NAV LINKS
   ========================= */

const mobileNavLinks = document.querySelectorAll(".nav-links a");

mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";
    });
});