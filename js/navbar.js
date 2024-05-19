// navbar.js
document.querySelector(".dropdown-btn").addEventListener("click", function() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks.classList.contains("expanded")) {
      navLinks.classList.remove("expanded");
      navLinks.classList.add("collapsed");
  } else {
      navLinks.classList.remove("collapsed");
      navLinks.classList.add("expanded");
  }
});
