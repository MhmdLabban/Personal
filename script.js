document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("cert-modal");
    const pdfContainer = document.getElementById("cert-pdf-container");

    // Open Modal
    document.querySelectorAll(".cert-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const pdfs = this.dataset.certPdfs.split(",");
            pdfContainer.innerHTML = pdfs.map(pdf => `<iframe src="${pdf.trim()}"></iframe>`).join("");
            modal.style.display = "flex";
            document.body.classList.add("modal-open");
        });
    });

    // Close Modal
    document.querySelector(".close-btn").addEventListener("click", function () {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    // Close Modal on Outside Click
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });
});