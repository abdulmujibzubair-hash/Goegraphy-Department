alert("Welcome To The Department Of Geography And Environmental Management");

let slideIndex = 1;
showManualSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showManualSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showManualSlides(slideIndex = n);
}

function showManualSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

let autoIndex = 0;
autoShowSlides();

function autoShowSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  autoIndex++;
  if (autoIndex > slides.length) { autoIndex = 1 }

  slides[autoIndex - 1].style.display = "block";
  dots[autoIndex - 1].classList.add("active");

  setTimeout(autoShowSlides, 4000); // Change image every 4 seconds
}

  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }