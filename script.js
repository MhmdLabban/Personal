document.addEventListener("DOMContentLoaded", function () {
    // Open Modal
    document.querySelectorAll(".cert-btn").forEach(button => {
        button.addEventListener("click", function () {
            let modal = document.getElementById("certificateModal");
            let pdfFrame = document.getElementById("certPdf");

            // Update the PDF source dynamically
            pdfFrame.src = this.dataset.pdf;

            modal.style.display = "flex";
        });
    });

    // Close Modal
    document.querySelector(".close-btn").addEventListener("click", function () {
        document.getElementById("certificateModal").style.display = "none";
    });

    // Fix Mobile Download Button Issue
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent interference from modal or overlays
        });
    });
});
