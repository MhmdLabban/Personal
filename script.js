document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Modal functionality for certifications (PDFs)
    const certLinks = document.querySelectorAll('.cert-link');
    const modal = document.getElementById('cert-modal');
    const certPdfContainer = document.getElementById('cert-pdf-container');
    const closeBtn = document.querySelector('.close-btn');

    certLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            // Clear previous PDFs
            certPdfContainer.innerHTML = '';

            // Get certificate PDFs from the data attribute
            const certPdfs = link.getAttribute('data-cert-pdfs').split(',');

            // Create and append iframes for each PDF
            certPdfs.forEach(src => {
                const iframe = document.createElement('iframe');
                iframe.src = src.trim();
                iframe.alt = 'Certificate PDF';
                iframe.style.width = '100%';
                iframe.style.height = window.innerWidth <= 480 ? '50vh' : (window.innerWidth <= 768 ? '60vh' : '80vh'); // Adjust height for mobile
                certPdfContainer.appendChild(iframe);
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
