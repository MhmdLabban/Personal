document.addEventListener('DOMContentLoaded', () => {
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
            const certPdfs = link.getAttribute('data-cert-pdfs')?.split(',');
            if (!certPdfs) {
                console.error("No PDFs found for this certification.");
                return;
            }

            // Create and append iframes for each PDF
            certPdfs.forEach(src => {
                const iframe = document.createElement('iframe');
                iframe.src = src.trim();
                iframe.alt = 'Certificate PDF';

                // 🛠️ Dynamically adjust PDF size based on screen width
                if (window.innerWidth <= 480) {
                    iframe.style.height = '50vh'; // Mobile screens
                } else if (window.innerWidth <= 768) {
                    iframe.style.height = '55vh'; // Tablets
                } else {
                    iframe.style.height = '60vh'; // Desktop
                }

                iframe.style.width = '100%'; // Always full width
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
