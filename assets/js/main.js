document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // PAPER LINKS (Scroll & Switch Tab)
  // ==========================================
  document.querySelectorAll('[id^="trigger-paper-link"]').forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // A. Scroll to About Section
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }

      // B. Open Publications Tab
      const pubTabButton = document.getElementById("pub-tab");
      if (pubTabButton) {
        const tab = bootstrap.Tab.getOrCreateInstance(pubTabButton);
        tab.show();
      }
    });
  });

  // ==========================================
  // THEME TOGGLE LOGIC
  // ==========================================
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  // Check Local Storage on Load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
  }

  // Toggle on Click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
        localStorage.setItem("theme", "dark");
      } else {
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
        localStorage.setItem("theme", "light");
      }
    });
  }

  // ==========================================
  // SCROLL TO TOP BUTTON LOGIC
  // ==========================================
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    // A. Show/Hide button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    // B. Scroll to top when clicked
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// ==========================================
// SECURE MAIL (Global Function)
// ==========================================
// Kept outside because it is called via onclick="..." in HTML
function openSecureMail(e) {
  e.preventDefault();
  const user = "akashsakhare18";
  const domain = "gmail.com";
  const subject = "Hiring Inquiry from Portfolio";
  window.location.href = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}`;
}
