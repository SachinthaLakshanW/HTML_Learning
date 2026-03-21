// Smooth scroll for navigation links
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetID = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Back-to-top button
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional: Fade-in effect for sections
const sections = document.querySelectorAll("section, header");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.1 },
);

sections.forEach((section) => observer.observe(section));
