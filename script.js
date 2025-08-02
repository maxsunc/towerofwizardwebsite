// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Replace your current handleSignup function with this
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxwADssuuAHFBIGIhqUK-JdFMK5xu5wgBbWjtTuj1FkJGX63M9WjVDTDLlxkx7JXQ-WEg/exec'; // Replace with your Google Apps Script Web App URL

document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = this.querySelector('.email-input').value;
    const messageDiv = document.getElementById('formMessage');
    const submitButton = this.querySelector('.signup-button');
    
    // Disable the submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            mode: 'no-cors'
        });
        
        // Show success message
        messageDiv.style.display = 'block';
        messageDiv.style.color = '#64ffda';
        messageDiv.textContent = 'Thank you for signing up! We\'ll keep you updated.';
        this.reset();
        
    } catch (error) {
        // Show error message
        messageDiv.style.display = 'block';
        messageDiv.style.color = '#ff6b6b';
        messageDiv.textContent = 'Oops! Something went wrong. Please try again.';
    }
    
    // Reset button state
    submitButton.disabled = false;
    submitButton.textContent = 'Notify Me';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
});
// signup form end

// Create more floating particles dynamically
function createParticles() {
    const header = document.querySelector('header');
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        header.appendChild(particle);
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
});

// Add entrance animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize entrance animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Observe feature cards for animations
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// Optional: Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-banner');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Optional: Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to add typing effect to title
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 150);
//     }
// });
function initCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const interval = 6000; // Regular interval (6 seconds)
    const firstInterval = 1500; // First switch after 1.5 seconds

    // Start all videos
    items.forEach(item => {
        if (item.tagName === 'VIDEO') {
            item.play();
        }
    });

    function showNext() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    // Show first item
    items[0].classList.add('active');

    // First switch after 3 seconds
    setTimeout(() => {
        showNext();
        // Then start regular interval for subsequent switches
        setInterval(showNext, interval);
    }, firstInterval);
}

// Add to your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...
    initCarousel();
});

// Add this to your existing script.js
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Add to your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...
    initFAQ();
});

// popup
// Replace your current handleSignup function with this updated version
document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = this.querySelector('.email-input').value;
    const messageDiv = document.getElementById('formMessage');
    const submitButton = this.querySelector('.signup-button');
    
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            mode: 'no-cors'
        });
        
        // Show success message
        messageDiv.style.display = 'block';
        messageDiv.style.color = '#64ffda';
        messageDiv.textContent = 'Thank you for signing up! We\'ll keep you updated.';
        this.reset();
        
        // Show Kickstarter popup
        const popup = document.getElementById('kickstarterPopup');
        popup.style.display = 'flex';
        
    } catch (error) {
        messageDiv.style.display = 'block';
        messageDiv.style.color = '#ff6b6b';
        messageDiv.textContent = 'Oops! Something went wrong. Please try again.';
    }
    
    submitButton.disabled = false;
    submitButton.textContent = 'Notify Me';
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
});

// Add popup close functionality
document.querySelector('.popup-close').addEventListener('click', function() {
    document.getElementById('kickstarterPopup').style.display = 'none';
});

// Close popup when clicking outside
document.getElementById('kickstarterPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});