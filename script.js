let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const caption = document.getElementById("caption");

const captions = [
  "",
  "if you listen very closely you can hear jingle bells!",
  ""
];

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  caption.textContent = captions[currentSlide];
}
