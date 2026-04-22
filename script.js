function showTab(tabId) {
  // Hide all tabs
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(tabId).classList.add("active");

  // Update URL without page reload
  history.pushState({}, "", `#${tabId}`);

  // Close mobile menu when a tab is selected
  if (window.innerWidth < 768) {
    document.getElementById("nav-links").classList.add("hidden");
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

function toggleMobileMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("hidden");
}

// Close mobile menu when screen is resized above mobile breakpoint
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    document.getElementById("nav-links").classList.remove("hidden");
  }
});

// Handle initial load based on URL hash
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.slice(1) || "home";
  showTab(hash);
});

// Handle back/forward navigation
window.addEventListener("popstate", () => {
  const hash = window.location.hash.slice(1) || "home";
  showTab(hash);
});

// Check if PDF preview is supported
window.addEventListener("load", () => {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframe.onerror = function () {
      const fallback = document.querySelector(".pdf-fallback");
      if (fallback) {
        fallback.classList.remove("hidden");
      }
    };
  }
});
