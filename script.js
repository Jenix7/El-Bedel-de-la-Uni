// Configuración central de redes sociales
const socialLinks = {
    instagram: "https://www.instagram.com/coronasborri/",
    youtube: "https://www.youtube.com/@inmacoronas1326",
    twitter: "https://x.com/CoronasInma",
    facebook: "https://www.facebook.com/inma.coronasborri.5",
    linkedin: "https://www.linkedin.com/in/inma-coronas-40306348/",
    pinterest: "https://es.pinterest.com/inma6841"
};

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
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

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
    const instagramIcons = document.querySelectorAll('.social-icon .fa-instagram');
    const youtubeIcons = document.querySelectorAll('.social-icon .fa-youtube');
    const twitterIcons = document.querySelectorAll('.social-icon .fa-x-twitter, .social-icon .fa-twitter');
    const facebookIcons = document.querySelectorAll('.social-icon .fa-facebook-f');
    const linkedinIcons = document.querySelectorAll('.social-icon .fa-linkedin-in');

    // Asignar enlaces a cada tipo de icono
    instagramIcons.forEach(icon => {
        icon.closest('a').href = socialLinks.instagram;
        icon.closest('a').setAttribute('target', '_blank');
    });

    youtubeIcons.forEach(icon => {
        icon.closest('a').href = socialLinks.youtube;
        icon.closest('a').setAttribute('target', '_blank');
    });

    twitterIcons.forEach(icon => {
        icon.closest('a').href = socialLinks.twitter;
        icon.closest('a').setAttribute('target', '_blank');
    });

    facebookIcons.forEach(icon => {
        icon.closest('a').href = socialLinks.facebook;
        icon.closest('a').setAttribute('target', '_blank');
    });

    linkedinIcons.forEach(icon => {
        icon.closest('a').href = socialLinks.linkedin;
        icon.closest('a').setAttribute('target', '_blank');
    });
});
