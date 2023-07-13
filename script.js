const slider = document.querySelector('.slider');
const slidesContainer = slider.querySelector('.slides-container');
const slides = Array.from(slider.querySelectorAll('.slide'));
const prevButton = slider.querySelector('.btn-prev');
const nextButton = slider.querySelector('.btn-next');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

// Set initial slide position
slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});
