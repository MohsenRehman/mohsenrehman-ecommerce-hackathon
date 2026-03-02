let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Auto slide every 3 seconds
setInterval(() => {
  currentIndex++;
  if (currentIndex >= slides.length) currentIndex = 0;
  showSlide(currentIndex);
}, 3000);