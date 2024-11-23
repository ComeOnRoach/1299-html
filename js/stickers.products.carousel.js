const leftArrow = document.querySelector(".btn-next__icon");
leftArrow.style.transform = "scaleX(-1)";

const slides = [
  "<div><img src='img/stickerz/baby-yoda.svg' alt='Baby Yoda' /></div>",
  "<div><img src='img/stickerz/banana.svg' alt='Banana' /></div>",
  "<div><img src='img/stickerz/girl.svg' alt='Girl' /></div>",
  "<div><img src='img/stickerz/viking.svg' alt='Viking' /></div>",
];

let slideIndex = 0;
function renderCarousel(slides) {
  document.querySelector(".products-carousel__slides").innerHTML =
    slides[slideIndex];
}

function nextSlide() {
    slideIndex = slideIndex + 1 >= slides.length ? 0 : slideIndex + 1;
    renderCarousel();
}

function prevSlide() {
    slideIndex = slideIndex - 1 <= slides.length ? 0 : slideIndex - 1;
    renderCarousel();
}

setInterval(nextSlide, 5000);
