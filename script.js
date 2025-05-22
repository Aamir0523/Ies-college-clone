// DARK MODE TOGGLE
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Check for saved theme in localStorage
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
};

// Toggle dark mode on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save preference to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
