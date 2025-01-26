document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Modal functionality for certifications
    const certLinks = document.querySelectorAll('.cert-link');
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('cert-img');
    const closeBtn = document.querySelector('.close-btn');

    certLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const certSrc = link.getAttribute('data-cert');
            modalImg.src = certSrc;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
