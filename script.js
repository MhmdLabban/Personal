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
    const certImagesContainer = document.getElementById('cert-images-container');
    const closeBtn = document.querySelector('.close-btn');

    certLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            // Clear previous images
            certImagesContainer.innerHTML = '';

            // Get certificate images from the data attribute
            const certImages = link.getAttribute('data-cert-images').split(',');

            // Create and append image elements to the container
            certImages.forEach(src => {
                const img = document.createElement('img');
                img.src = src.trim();
                img.alt = 'Certificate';
                certImagesContainer.appendChild(img);
            });

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
