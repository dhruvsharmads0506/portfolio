// Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".theme-toggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
}

// Typing effect
const words = ["Developer", "Designer", "Student", "Learner"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
function typingEffect() {
  const typing = document.getElementById("typing");
  if (!typing) return;

  if (!isDeleting && j <= words[i].length) {
    currentWord = words[i].substring(0, j++);
    typing.textContent = currentWord;
  } else if (isDeleting && j >= 0) {
    currentWord = words[i].substring(0, j--);
    typing.textContent = currentWord;
  }

  if (j === words[i].length) isDeleting = true;
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typingEffect, isDeleting ? 100 : 200);
}
typingEffect();

// Scroll fade-in
const faders = document.querySelectorAll("section");
const appearOptions = { threshold: 0.1 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(sec => { appearOnScroll.observe(sec); });

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}
