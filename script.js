const slideIndexes = {};

const captions = {
  slideshow1: ["", "if you listen very closely you can hear jingle bells!", ""],
  slideshow2: ["", ""]
};

function changeSlide(direction, slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll('.slide');
  const captionEl = slideshow.nextElementSibling;

  if (slideIndexes[slideshowId] === undefined) slideIndexes[slideshowId] = 0;

  slides[slideIndexes[slideshowId]].classList.remove('active');
  slideIndexes[slideshowId] = (slideIndexes[slideshowId] + direction + slides.length) % slides.length;
  slides[slideIndexes[slideshowId]].classList.add('active');

  if (captionEl && captionEl.classList.contains('caption')) {
    captionEl.textContent = captions[slideshowId][slideIndexes[slideshowId]] || '';
  }
}