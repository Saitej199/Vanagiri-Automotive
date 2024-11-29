const slides = document.querySelectorAll(".gallery-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function showSlide(index) {
  const offset = index * -100; // Shift slides by 100% of the viewport
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});

// Initialize the first slide
showSlide(currentIndex);
