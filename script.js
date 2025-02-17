document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    // Toggle sidebar on mobile
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Close sidebar when a link is clicked (for mobile)
    sidebar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById("cert-modal");
    const pdfContainer = document.getElementById("cert-pdf-container");

    document.querySelectorAll(".cert-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const pdfs = this.dataset.certPdfs.split(",");
            pdfContainer.innerHTML = pdfs.map(pdf => `<iframe src="${pdf.trim()}"></iframe>`).join("");
            modal.style.display = "flex";
            document.body.classList.add("modal-open");
        });
    });

    document.querySelector(".close-btn").addEventListener("click", function () {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });
});