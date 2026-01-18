document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const modal = document.getElementById("cert-modal");
  const pdfContainer = document.getElementById("cert-pdf-container");
  const closeBtn = document.querySelector(".close-btn");
  const themeToggle = document.getElementById("theme-toggle");

  // Sidebar toggle (mobile)
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      const isActive = sidebar.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", isActive);
    });

    // Close sidebar when a link is clicked (mobile only)
    sidebar.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", false);
        }
      });
    });
  }

  // Modal functionality for certifications
  if (modal && pdfContainer) {
    document.querySelectorAll(".cert-link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const pdfs = link.dataset.certPdfs?.split(",") || [];
        pdfContainer.innerHTML = pdfs
          .map(pdf => `<iframe src="${pdf.trim()}" title="Certificate PDF"></iframe>`)
          .join("");
        modal.classList.add("open");
        document.body.classList.add("modal-open");
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
        document.body.classList.remove("modal-open");
      });
    }

    // Close modal when clicking outside content
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.classList.remove("open");
        document.body.classList.remove("modal-open");
      }
    });
  }

  // Dark/Light Mode Toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Light Mode";
      } else {
        themeToggle.textContent = "🌙 Dark Mode";
      }
    });
  }
});
