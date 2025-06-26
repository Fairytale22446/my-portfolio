// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Back to top button visibility
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll(".project-card");
const animateOnScroll = () => {
  projectCards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 150);
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Run once on page load

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".bar");
const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (barPosition < screenPosition) {
      bar.style.width =
        bar.parentElement.previousElementSibling.querySelector(
          ".skill-percent"
        ).textContent;
    }
  });
};

window.addEventListener("scroll", animateSkillBars);
animateSkillBars(); // Run once on page load

// Language switcher functionality
const languageBtns = document.querySelectorAll(".language-btn");

languageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    languageBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Here you would implement actual language switching
    // For now, it just toggles the active class
  });
});

// Form submission
const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Here you would implement form submission to a server
  // For now, we'll just show an alert
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// Floating elements animation
const floatingElements = document.querySelectorAll(".floating-element");

floatingElements.forEach((element, index) => {
  // Randomize initial position and animation duration
  const randomTop = Math.random() * 80;
  const randomLeft = Math.random() * 80;
  const randomDuration = 10 + Math.random() * 20;
  const randomDelay = Math.random() * 10;

  element.style.top = `${randomTop}%`;
  element.style.left = `${randomLeft}%`;
  element.style.animationDuration = `${randomDuration}s`;
  element.style.animationDelay = `${randomDelay}s`;
});



// Testimonial Animation
const animateTestimonials = () => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    testimonialCards.forEach(card => {
        observer.observe(card);
    });
};

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    aboutSlider();
    animateTestimonials();
});


// About Slider Functionality
const aboutSlider = () => {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((_, i) => {
        dotsContainer.insertAdjacentHTML('beforeend',
            `<span class="dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></span>`
        );
    });
    
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.querySelector('.next-slide');
    const prevBtn = document.querySelector('.prev-slide');
    
    const goToSlide = (slide) => {
        slides.forEach((s, i) => {
            s.classList.toggle('active', i === slide);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === slide);
        });
        
        currentSlide = slide;
    };
    
    // Next slide
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    });
    
    // Previous slide
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    });
    
    // Dot click
    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            const slide = parseInt(e.target.dataset.slide);
            goToSlide(slide);
        }
    });
    
    // Auto slide change every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 5000);
};

// Initialize slider when page loads
document.addEventListener('DOMContentLoaded', aboutSlider);