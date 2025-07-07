// Configuración central de redes sociales
const socialLinks = {
    instagram: "https://www.instagram.com/coronasborri/",
    facebook: "https://www.facebook.com/inma.coronasborri.5",
    twitter: "https://x.com/CoronasInma",
    linkedin: "https://www.linkedin.com/in/inma-coronas-40306348/",
    youtube: "https://www.youtube.com/@inmacoronas1326"
};

// Detectar si es un dispositivo móvil
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

document.addEventListener('DOMContentLoaded', function() {
    // Menu móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Cambiar el icono del menú
            const menuIcon = this.querySelector('i');
            if (menuIcon.classList.contains('fa-bars')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');

            // Restablecer el icono del menú
            const menuIcon = mobileMenuBtn.querySelector('i');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });

    // Botón de volver arriba
    const backToTopBtn = document.createElement('div');
    backToTopBtn.classList.add('back-to-top');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = 'rgba(15, 22, 38, 0.95)';
        } else {
            header.style.padding = '';
            header.style.backgroundColor = '';
        }
    });

// Animación smooth scroll para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Verificar que es un ancla válida (empieza con # y no es una URL)
        if (!targetId || targetId === '#' || targetId.length <= 1 || targetId.includes('://')) {
            return;
        }

        e.preventDefault();

        try {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Ajustar offset para móvil vs desktop
                const headerOffset = window.innerWidth <= 768 ? 60 : 80;
                window.scrollTo({
                    top: targetElement.offsetTop - headerOffset,
                    behavior: 'smooth'
                });
            }
        } catch (error) {
            // Si hay un error con el selector, simplemente no hacer nada
            console.log('Invalid selector:', targetId);
        }
    });
});

    // Mejorar interacción con elementos de galería en dispositivos táctiles
    if (isMobile) {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('touchstart', function() {
                // Resetear todos los otros elementos
                galleryItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active-touch')) {
                        otherItem.classList.remove('active-touch');
                    }
                });

                // Toggle para este elemento
                this.classList.toggle('active-touch');
            });
        });
    }

    // Reproducción de video en trailer
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            const trailerVideo = document.querySelector('.trailer-video');
            const videoPlaceholder = document.querySelector('.video-placeholder');

            // Aquí se podría reemplazar la imagen con un iframe de YouTube
            // Este es solo un ejemplo, necesitarías el ID real del video
            const videoId = 'TU_VIDEO_ID_AQUI';
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');

            // Reemplazar la imagen con el iframe
            videoPlaceholder.remove();
            this.remove();
            trailerVideo.appendChild(iframe);
        });
    }

// Configurar enlaces de redes sociales
document.querySelectorAll('.social-icon').forEach(socialIcon => {
    const icon = socialIcon.querySelector('i');
    if (!icon) return;

    if (icon.classList.contains('fa-instagram')) {
        socialIcon.href = socialLinks.instagram;
        socialIcon.setAttribute('target', '_blank');
    } else if (icon.classList.contains('fa-youtube')) {
        socialIcon.href = socialLinks.youtube;
        socialIcon.setAttribute('target', '_blank');
    } else if (icon.classList.contains('fa-x-twitter') || icon.classList.contains('fa-twitter')) {
        socialIcon.href = socialLinks.twitter;
        socialIcon.setAttribute('target', '_blank');
    } else if (icon.classList.contains('fa-facebook-f')) {
        socialIcon.href = socialLinks.facebook;
        socialIcon.setAttribute('target', '_blank');
    } else if (icon.classList.contains('fa-linkedin-in')) {
        socialIcon.href = socialLinks.linkedin;
        socialIcon.setAttribute('target', '_blank');
    }
});
});
