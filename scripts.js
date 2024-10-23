// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle active class to show/hide links
});

// Function to check if the element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add 'show' class to items when scrolling into view
function checkItemsInViewport() {
    const items = document.querySelectorAll('.scope-item');
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', checkItemsInViewport);

// Trigger check on page load in case some items are already in the viewport
document.addEventListener('DOMContentLoaded', checkItemsInViewport);

// JavaScript to handle scroll animations
const timelineItems = document.querySelectorAll('.timeline-content');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

timelineItems.forEach(item => {
  observer.observe(item);
});


let currentIndex = 0; // Start with the first image
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].classList.remove('active'); // Hide current slide
    currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
    slides[currentIndex].classList.add('active'); // Show next slide
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`; // Move the slider
}

// Automatically change the slide every 5 seconds
setInterval(showNextSlide, 5000);
