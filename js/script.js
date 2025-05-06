if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("dark-mode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }
});

// Toggle dark mode and save preference
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDark);
});


