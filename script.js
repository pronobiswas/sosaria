/**
 * Age of Sosaria - Navigation Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinksContainer = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".nav-item");

  /**
   * ০. ডিফল্ট অবস্থায় প্রথম আইটেমকে (Home) একটিভ করা
   */
  if (navLinks.length > 0) {
    // অন্য সব আইটেম থেকে একটিভ ক্লাস সরিয়ে শুধু প্রথমটিতে যোগ করা
    navLinks.forEach((item) => item.classList.remove("nav-link-active"));
    navLinks[0].classList.add("nav-link-active");
  }

  /**
   * Toggles the mobile menu
   */
  function toggleMenu() {
    const isHidden = navLinksContainer.classList.contains("hidden");

    if (isHidden) {
      navLinksContainer.classList.remove("hidden");
      navLinksContainer.classList.add("mobile-menu-open");
    } else {
      navLinksContainer.classList.add("hidden");
      navLinksContainer.classList.remove("mobile-menu-open");
    }
  }

  /**
   * Closes the mobile menu
   */
  function closeMenu() {
    navLinksContainer.classList.add("hidden");
    navLinksContainer.classList.remove("mobile-menu-open");
  }

  // 1. Menu button click
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // 2. Nav link click (Handle Active State & Close Menu)
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // লিংক ডিফল্ট বিহেভিয়ার বন্ধ করা

      // প্রথমে সব আইটেম থেকে একটিভ ক্লাস রিমুভ করা
      navLinks.forEach((item) => item.classList.remove("nav-link-active"));

      // শুধুমাত্র যেটিতে ক্লিক করা হয়েছে সেটিতে একটিভ ক্লাস যোগ করা
      this.classList.add("nav-link-active");

      // মোবাইল মেনু হলে ক্লিক করার পর মেনু বন্ধ করে দেওয়া
      if (window.innerWidth < 768) {
        closeMenu();
      }
    });
  });

  // 3. Click outside to close (মোবাইলের জন্য)
  document.addEventListener("click", (e) => {
    if (
      !navLinksContainer.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // 4. Resize fix
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navLinksContainer.classList.remove("hidden");
      navLinksContainer.classList.remove("mobile-menu-open");
    } else {
      // উইন্ডো ছোট করলে ডিফল্টভাবে মেনু হাইড রাখা
      if (!navLinksContainer.classList.contains("mobile-menu-open")) {
        navLinksContainer.classList.add("hidden");
      }
    }
  });
});

// Scroll animation observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const animationType = element.getAttribute("data-animate");

      if (animationType) {
        element.classList.add(`animate-${animationType}`);
      }

      observer.unobserve(element);
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));
});



