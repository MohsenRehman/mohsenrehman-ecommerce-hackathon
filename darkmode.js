const darkModeBtn = document.getElementById("darkModeBtn");

// Check if user already has a preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkModeBtn.textContent = "Light Mode";
}

// Toggle function
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeBtn.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    darkModeBtn.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});