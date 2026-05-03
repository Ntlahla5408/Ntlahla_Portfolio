// Smooth fade-in animation when sections appear on screen
const sections = document.querySelectorAll(".section, .project-card, .skills-container div");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

sections.forEach(function (section) {
    section.classList.add("hidden");
    observer.observe(section);
});

// Highlight active navigation link while scrolling
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    document.querySelectorAll("section").forEach(function (section) {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 120) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// Simple typing effect
const typingText = document.querySelector(".typing-text");
const words = ["Software Developer", "BIT Student", "Problem Solver", "Backend Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

// PROFILE IMAGE MODAL
const profilePic = document.getElementById("profilePic");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close");

profilePic.addEventListener("click", function () {
    modal.classList.add("show-modal");
    modalImg.src = this.src;
});

function closeModal() {
    modal.classList.remove("show-modal");
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});