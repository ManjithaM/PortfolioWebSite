function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
  
    alert(`Name: ${name}\nMessage: ${message}`);
  
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  }
  
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', handleFormSubmit);

  function showImageDescription(event) {
   
    const image = event.target;
    const description = image.nextElementSibling.textContent;
    alert(description);
  }
  
 
  const designImages = document.querySelectorAll('.design img');
  designImages.forEach(image => {
    image.addEventListener('click', showImageDescription);
  });

  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }
  
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > window.innerHeight / 2) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add this JavaScript code to your existing script or create a new one

const slider = document.getElementById("slider");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let currentIndex = 0;
const images = slider.querySelectorAll("img");

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.opacity = "1";
      image.style.transform = "translateX(0)";
    } else {
      image.style.opacity = "0";
      image.style.transform = "translateX(-100%)";
    }
  });
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

// Automatically change slide every 2 seconds
const slideshowInterval = setInterval(nextImage, 2000);

// Apply smooth ease-in transition
slider.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

// Show the initial slide
showImage(currentIndex);

// Add event listeners to the buttons
prevButton.addEventListener("click", () => {
  clearInterval(slideshowInterval); // Stop the automatic slideshow
  prevImage();
});

nextButton.addEventListener("click", () => {
  clearInterval(slideshowInterval); // Stop the automatic slideshow
  nextImage();
});

function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight) {
      element.style.opacity = 1;
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);