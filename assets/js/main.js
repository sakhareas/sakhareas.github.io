document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // PAPER LINKS (Smart Scroll & Switch)
  // ==========================================
  document.querySelectorAll('[id^="trigger-paper-link"]').forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the specific target ID (e.g., "#pub-1") from the link's href
      const targetId = this.getAttribute("href");

      // Open the Publications Tab
      const pubTabButton = document.getElementById("pub-tab");
      if (pubTabButton) {
        const tab = bootstrap.Tab.getOrCreateInstance(pubTabButton);
        tab.show();
      }

      // Scroll Logic (Wrapped in setTimeout)
      // We wait 350ms for the tab to finish opening so the browser can see the element
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // MOBILE OFFSET: 100px ensures the sticky header doesn't hide the title
          const headerOffset = 100;

          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Highlight Effect
          // We use 'setProperty' with 'important' to override Bootstrap's bg-white
          targetElement.style.transition = "background-color 0.5s ease";
          targetElement.style.setProperty(
            "background-color",
            "#ddf5fa",
            "important",
          );

          // Remove the highlight after 2 seconds
          setTimeout(() => {
            targetElement.style.backgroundColor = "";
          }, 1300);
        }
      }, 350);
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
