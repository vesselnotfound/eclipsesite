// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Botão explorar
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    
    // Efeito visual
    exploreBtn.style.background = 'linear-gradient(135deg, #f72585, #7209b7)';
    setTimeout(() => {
        exploreBtn.style.background = 'linear-gradient(135deg, #7209b7, #f72585)';
    }, 300);
});

// Efeito de digitação no título (opcional)
const title = document.querySelector('.title');
const originalText = title.innerText;
title.innerText = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        title.innerText += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

// Inicia o efeito após 0.5s
setTimeout(typeWriter, 500);

// Efeito de parallax na lua
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const moon = document.querySelector('.hero-moon');
    if (moon) {
        moon.style.transform = `translateY(calc(-50% + ${scrolled * 0.05}px))`;
    }
});

// Efeito de brilho nas cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});
