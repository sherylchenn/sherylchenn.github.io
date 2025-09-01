// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Mobile Navigation Toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Highlighting
function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    
    // Create scroll indicator if it doesn't exist
    let scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) {
        scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        document.body.appendChild(scrollIndicator);
    }
    
    scrollIndicator.style.width = `${scrollPercent}%`;
}

// Animate Elements on Scroll
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .research-item, .personal-card, .podcast-item');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fadeInUp');
        }
    });
}

// Glitch Effect for Name
function initGlitchEffect() {
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            glitchElement.style.textShadow = `
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 var(--accent-coral),
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 var(--accent-mint)
            `;
            
            setTimeout(() => {
                glitchElement.style.textShadow = 'none';
            }, 50);
        }, 3000);
    }
}

// Profile Image Upload Functionality
function initProfileImageUpload() {
    const profileImage = document.getElementById('profile-pic');
    
    if (profileImage) {
        profileImage.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        profileImage.src = e.target.result;
                        localStorage.setItem('profileImage', e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            };
            
            input.click();
        });
        
        // Load saved profile image
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            profileImage.src = savedImage;
        }
    }
}

// Parallax Effect for Sections
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const homeSection = document.querySelector('.home-section');
        
        if (homeSection) {
            homeSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Theme Toggle (Optional Enhancement)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--medium-peach);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        transition: var(--transition);
        box-shadow: 0 4px 20px var(--shadow-medium);
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
}

// Add CSS for dark theme
function addDarkThemeStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .dark-theme {
            --light-peach: #2A2A2A;
            --soft-peach: #3A3A3A;
            --medium-peach: #4A4A4A;
            --background-light: #1A1A1A;
            --text-dark: #E5E5E5;
            --text-medium: #CCCCCC;
            --text-light: #AAAAAA;
        }
        
        .theme-toggle:hover {
            transform: scale(1.1);
            background: var(--accent-coral);
        }
    `;
    document.head.appendChild(style);
}

// Smooth Page Load Animation
function initPageLoadAnimation() {
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}

// Copy Email to Clipboard
function initEmailCopy() {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailLink.getAttribute('href').replace('mailto:', '');
            
            navigator.clipboard.writeText(email).then(() => {
                // Show temporary notification
                const notification = document.createElement('div');
                notification.textContent = 'Email copied to clipboard!';
                notification.style.cssText = `
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: var(--accent-mint);
                    color: white;
                    padding: 1rem;
                    border-radius: var(--border-radius);
                    z-index: 1000;
                    animation: slideIn 0.3s ease-out;
                `;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 3000);
            });
        });
    }
}

// Add slide-in animation for notifications
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    updateActiveNav();
    updateScrollProgress();
    animateOnScroll();
    
    // Enhanced features
    initGlitchEffect();
    initProfileImageUpload();
    initEmailCopy();
    
    // Optional enhancements
    // initParallaxEffect(); // Uncomment for parallax effect
    initThemeToggle();
    addDarkThemeStyles();
    addNotificationStyles();
    initPageLoadAnimation();
});

// Event Listeners - Using throttled version only for better performance

// Resize handler for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events for better performance
const throttledScrollHandler = throttle(() => {
    updateActiveNav();
    updateScrollProgress();
    animateOnScroll();
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);  