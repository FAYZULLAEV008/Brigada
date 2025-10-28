// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add smooth scroll to all nav links
const allNavLinks = document.querySelectorAll('.nav-link');
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe menu items and other elements
const menuItems = document.querySelectorAll('.menu-item');
const featureCards = document.querySelectorAll('.feature-card');
const contactCards = document.querySelectorAll('.contact-card');

menuItems.forEach(item => observer.observe(item));
featureCards.forEach(card => observer.observe(card));
contactCards.forEach(card => observer.observe(card));

// Order button click handler
const orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Buyurtma funksiyasi tez orada ishga tushiriladi!');
    });
});

// Reservation button click handler
const ctaButtons = document.querySelectorAll('.cta-btn');
ctaButtons.forEach(btn => {
    if (btn.textContent.includes('Stol band qilish')) {
        btn.addEventListener('click', () => {
            alert('Stol band qilish funksiyasi tez orada ishga tushiriladi!');
        });
    }
});
