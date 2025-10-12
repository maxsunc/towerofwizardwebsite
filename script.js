// Navbar scroll effect
window.addEventListener('scroll', function () {
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

// Email signup handler
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz-MW8iEcqGEGgFGofGMJ6v6aBH5xgvGDs4m0yhybBI_b8LB3DUzGYBfSKq1ymDC4TI3g/exec'; // Replace with your Google Apps Script Web App URL

document.getElementById('signupForm').addEventListener('submit', async function (e) {
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

        // Show Kickstarter popup
        const popup = document.getElementById('kickstarterPopup');
        popup.style.display = 'flex';

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
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
});

// Add entrance animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize entrance animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Observe feature cards for animations
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// Optional: Add parallax effect to hero section
window.addEventListener('scroll', function () {
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
    const interval = 5000; // Regular interval (6 seconds)
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
document.addEventListener('DOMContentLoaded', function () {
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
document.addEventListener('DOMContentLoaded', function () {
    // ...existing code...
    initFAQ();
});

// popup functionality

document.addEventListener('DOMContentLoaded', function () {
    // ...existing code...

    // Add popup close functionality
    document.querySelector('.popup-close').addEventListener('click', function () {
        document.getElementById('kickstarterPopup').style.display = 'none';
    });

    // Close popup when clicking outside
    document.getElementById('kickstarterPopup').addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
});


// Add this to your existing scroll event listener
window.addEventListener('scroll', function () {
    // ...existing navbar code...

    // Background parallax
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.15; // Adjust this value to control movement speed

    document.body.style.setProperty('--bg-shift', `${rate}px`);
    document.body.style.backgroundPosition = `center ${rate}px`;

    // Apply the parallax effect to the pseudo-element
    document.documentElement.style.setProperty(
        '--pseudo-bg-position',
        `50% ${50 + rate * 0.1}%`
    );
});

// Spell Preview System
class SpellEffects {
    constructor() {
        this.canvas = document.getElementById('spellCanvas');
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.particles = [];
        this.animationId = null;
        this.currentSpell = null;

        if (this.canvas) {
            this.resizeCanvas();
            window.addEventListener('resize', () => this.resizeCanvas());
            this.initSpellHovers();
        }
    }

    resizeCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    initSpellHovers() {
        const spellSchools = document.querySelectorAll('.spell-school');
        spellSchools.forEach(school => {
            school.addEventListener('mouseenter', () => {
                const spellType = school.dataset.spell;
                this.startSpellEffect(spellType);
            });

            school.addEventListener('mouseleave', () => {
                this.stopSpellEffect();
            });
        });
    }

    startSpellEffect(spellType) {
        this.currentSpell = spellType;
        this.particles = [];

        // Create initial particles based on spell type
        for (let i = 0; i < 15; i++) {
            this.particles.push(this.createParticle(spellType));
        }

        this.animate();
    }

    stopSpellEffect() {
        this.currentSpell = null;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    createParticle(spellType) {
        const particle = {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 1.0,
            decay: Math.random() * 0.02 + 0.01,
            size: Math.random() * 8 + 3
        };

        switch (spellType) {
            case 'fire':
                particle.color = `hsl(${Math.random() * 60}, 100%, ${50 + Math.random() * 30}%)`;
                particle.vy -= 2; // Fire rises
                break;
            case 'light':
                particle.color = `hsl(${50 + Math.random() * 20}, 100%, ${70 + Math.random() * 20}%)`;
                particle.vx *= 0.3;
                particle.vy *= 0.3;
                particle.vy -= 1; // Light magic floats upward
                break;
            case 'lightning':
                particle.color = `hsl(${180 + Math.random() * 40}, 80%, ${60 + Math.random() * 30}%)`;
                particle.vx *= 2;
                particle.vy *= 2;
                break;
            case 'dark':
                particle.color = `hsl(${270 + Math.random() * 40}, 60%, ${30 + Math.random() * 30}%)`;
                particle.vy += 1; // Dark magic sinks
                break;
        }

        return particle;
    }

    animate() {
        if (!this.currentSpell) return;

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];

            // Update particle
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= particle.decay;

            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Draw particle
            if (particle.life > 0) {
                this.ctx.globalAlpha = particle.life;
                this.ctx.fillStyle = particle.color;
                this.ctx.beginPath();

                if (this.currentSpell === 'lightning') {
                    // Draw jagged lines for lightning
                    this.drawLightning(particle);
                } else {
                    // Draw circles for other spells
                    this.ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            } else {
                // Remove dead particles and create new ones
                this.particles.splice(i, 1);
                if (this.particles.length < 15) {
                    this.particles.push(this.createParticle(this.currentSpell));
                }
            }
        }

        this.ctx.globalAlpha = 1;
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    drawLightning(particle) {
        const segments = 5;
        const segmentLength = particle.size * 2;

        this.ctx.strokeStyle = particle.color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(particle.x, particle.y);

        let x = particle.x;
        let y = particle.y;

        for (let i = 0; i < segments; i++) {
            x += (Math.random() - 0.5) * segmentLength;
            y += (Math.random() - 0.5) * segmentLength;
            this.ctx.lineTo(x, y);
        }

        this.ctx.stroke();
    }
}

// Initialize spell effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // ...existing code...

    // Initialize spell effects
    new SpellEffects();
});