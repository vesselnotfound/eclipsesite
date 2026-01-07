// Efeitos de partículas para fundo
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição aleatória
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Cor aleatória na paleta roxa
        const hue = Math.floor(Math.random() * 40) + 260; // Tons de roxo
        particle.style.backgroundColor = `hsl(${hue}, 80%, 60%)`;
        
        // Opacidade aleatória
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        // Duração da animação aleatória
        const duration = Math.random() * 3 + 2;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
        
        // Remove a partícula após a animação
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
}

// Cria partículas a cada 300ms
setInterval(createParticles, 300);

// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    
    // Efeito sonoro (se disponível)
    playClickSound();
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        playClickSound();
    });
});

// Efeito ripple nos botões
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    ripple.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    ripple.classList.add('ripple');
    
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
    playClickSound();
}

// Aplica efeito ripple a todos os botões CTA
document.querySelectorAll('.cta-btn, .fx-btn, .theme-btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Efeitos de clique na tela
const clickEffects = document.getElementById('clickEffects');

document.addEventListener('click', (e) => {
    // Não criar efeito em cliques em botões (já tem ripple)
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
    
    const clickEffect = document.createElement('div');
    clickEffect.classList.add('click-effect');
    
    clickEffect.style.left = `${e.clientX}px`;
    clickEffect.style.top = `${e.clientY}px`;
    
    // Cor aleatória na paleta roxa
    const colors = ['#7209b7', '#3a0ca3', '#f72585', '#9d4edd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    clickEffect.style.borderColor = randomColor;
    
    clickEffects.appendChild(clickEffect);
    playClickSound();
    
    // Remove após animação
    setTimeout(() => {
        clickEffect.remove();
    }, 1000);
});

// Lua interativa
const interactiveMoon = document.getElementById('interactiveMoon');

interactiveMoon.addEventListener('click', () => {
    // Efeito de pulso na lua
    interactiveMoon.style.transform = 'scale(1.1)';
    
    // Cria partículas especiais ao redor da lua
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Posição ao redor da lua
            const angle = Math.random() * Math.PI * 2;
            const distance = 180;
            const moonRect = interactiveMoon.getBoundingClientRect();
            
            particle.style.left = `${moonRect.left + moonRect.width/2 + Math.cos(angle) * distance}px`;
            particle.style.top = `${moonRect.top + moonRect.height/2 + Math.sin(angle) * distance}px`;
            particle.style.backgroundColor = '#f72585';
            particle.style.boxShadow = '0 0 10px #f72585';
            
            clickEffects.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }, i * 50);
    }
    
    setTimeout(() => {
        interactiveMoon.style.transform = 'scale(1)';
    }, 300);
    
    playClickSound();
});

// Botões de efeitos especiais
document.getElementById('starRain').addEventListener('click', () => {
    // Chuva de estrelas
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.classList.add('particle');
            
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `-10px`;
            star.style.backgroundColor = '#4cc9f0';
            star.style.boxShadow = '0 0 15px #4cc9f0';
            star.style.width = star.style.height = `${Math.random() * 5 + 2}px`;
            
            // Animação de queda
            star.style.animation = `fallingStar ${Math.random() * 2 + 1}s linear forwards`;
            
            clickEffects.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 3000);
        }, i * 30);
    }
    
    playClickSound();
});

document.getElementById('pulseWave').addEventListener('click', () => {
    // Onda púrpura
    const wave = document.createElement('div');
    wave.classList.add('click-effect');
    wave.style.borderColor = '#9d4edd';
    wave.style.borderWidth = '5px';
    wave.style.left = '50%';
    wave.style.top = '50%';
    wave.style.transform = 'translate(-50%, -50%)';
    
    clickEffects.appendChild(wave);
    
    setTimeout(() => {
        wave.remove();
    }, 1000);
    
    playClickSound();
});

document.getElementById('moonPhase').addEventListener('click', () => {
    // Alterna fases da lua
    const moon = interactiveMoon.querySelector('.moon');
    const shadow = interactiveMoon.querySelector('.shadow');
    
    const phases = [
        { gradient: 'radial-gradient(circle at 30% 30%, #9d4edd, #3a0ca3)', shadowPos: '70% 30%' },
        { gradient: 'radial-gradient(circle at 50% 30%, #9d4edd, #3a0ca3)', shadowPos: '50% 30%' },
        { gradient: 'radial-gradient(circle at 70% 30%, #9d4edd, #3a0ca3)', shadowPos: '30% 30%' },
        { gradient: 'radial-gradient(circle at 90% 30%, #9d4edd, #3a0ca3)', shadowPos: '10% 30%' }
    ];
    
    let currentPhase = 0;
    
    function nextPhase() {
        currentPhase = (currentPhase + 1) % phases.length;
        moon.style.background = phases[currentPhase].gradient;
        shadow.style.background = `radial-gradient(circle at ${phases[currentPhase].shadowPos}, rgba(10, 10, 15, 0.9), transparent 60%)`;
    }
    
    // Ciclo de 4 fases
    for (let i = 0; i < 4; i++) {
        setTimeout(nextPhase, i * 300);
    }
    
    playClickSound();
});

// Botão voltar ao topo
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    playClickSound();
});

// Efeito de digitação no título
const title = document.querySelector('.title');
const originalText = title.innerText;
title.innerHTML = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        title.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    } else {
        // Adiciona o efeito glitch após terminar a digitação
        title.classList.add('glitch');
    }
}

// Inicia o efeito após 0.5s
setTimeout(typeWriter, 500);

// Efeito de parallax
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const moon = document.querySelector('.interactive-moon');
    
    if (moon) {
        moon.style.transform = `translateY(${scrolled * 0.05}px) rotate(${scrolled * 0.01}deg)`;
    }
    
    // Efeito nas cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Efeito de tilt nas cards (simulado)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Efeito sonoro
function playClickSound() {
    const audio = document.getElementById('clickSound');
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Som não pode ser reproduzido:", e));
    }
}

// Botão de alternar efeitos
document.getElementById('themeToggle').addEventListener('click', () => {
    const body = document.body;
    const isEffectsOn = body.classList.toggle('effects-off');
    
    if (isEffectsOff) {
        // Desativa animações
        document.querySelectorAll('*').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-play"></i> Ativar Efeitos';
    } else {
        // Reativa animações
        document.querySelectorAll('*').forEach(el => {
            el.style.animationPlayState = 'running';
        });
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-pause"></i> Pausar Efeitos';
    }
    
    playClickSound();
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌑 Eclipse Lunar carregado com efeitos especiais!');
    console.log('🎮 Controles: Clique na lua, botões de efeitos, e em qualquer lugar da tela');
    
    // Inicia algumas partículas
    createParticles();
});
