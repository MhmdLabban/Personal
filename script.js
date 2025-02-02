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
            e.preventDefault(); // Stop link from redirecting
            console.log("Certification clicked!"); // Debugging log

            // Clear previous PDFs
            certPdfContainer.innerHTML = '';

            // Get certificate PDFs from the data attribute
            const certPdfs = link.getAttribute('data-cert-pdfs')?.split(',');
            if (!certPdfs) {
                console.error("No PDFs found for this certification.");
                return;
            }

            // Display PDFs inside modal
            certPdfs.forEach(src => {
                console.log("Loading PDF:", src.trim()); // Debugging log
                const iframe = document.createElement('iframe');
                iframe.src = src.trim();
                iframe.alt = 'Certificate PDF';
                iframe.style.width = '100%';
                iframe.style.height = window.innerWidth <= 480 ? '50vh' : (window.innerWidth <= 768 ? '60vh' : '80vh');
                certPdfContainer.appendChild(iframe);
            });

            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        console.log("Closing modal"); // Debugging log
        modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            console.log("Click outside modal - closing"); // Debugging log
            modal.style.display = 'none';
        }
    });
});
