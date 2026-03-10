// =========================
// SIDEBAR
// =========================
const sectionIds = ['about', 'professional', 'technical', 'projects', 'upcoming', 'courses', 'tria', 'cusd', 'csalt', 'wvbr', 'tinyrv1', 'busshelter', 'hpt'];

function highlightActive() {
  let current = '';
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 120) {
      current = id;
    }
  });

  document.querySelectorAll('.sidebar a').forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

window.addEventListener('scroll', highlightActive, { passive: true });
highlightActive();

// =========================
// SLIDESHOW
// =========================
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