// Navbar scroll
window.addEventListener('scroll', () => {
    document.querySelector('header').style.background = window.scrollY > 100 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Animate sections on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate');
    });
});
document.querySelectorAll('.section').forEach(section => observer.observe(section));

// Skills progress bars
const progressBars = document.querySelectorAll('.progress-bar');
const animateBars = () => {
    progressBars.forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
    });
};
window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) animateBars();
});

// Theme toggle
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
