document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector("nav ul");
  const header = document.querySelector("header");
  const typewriterSpan = document.getElementById("typewriter");
  const heroSection = document.querySelector(".hero");

  /* Mobile Menu Toggle */
  mobileMenu?.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  /* Smooth Scrolling */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
        navMenu.classList.remove("active");
      }
    });
  });

  /* Header background on scroll */
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 100);
  });

  /* Background Image Slider */
  const bgImages = [
    "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    "url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    "url('https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"

  ];
  let bgIndex = 0;

  function changeHeroBg() {
    heroSection.style.backgroundImage = bgImages[bgIndex];
    bgIndex = (bgIndex + 1) % bgImages.length;
  }

  changeHeroBg();
  setInterval(changeHeroBg, 5000);

  /* Typewriter Effect */
  const textArray = [
    "Your Trusted Legal Partners in Kenya",
    "Expert Counsel. ",
    "Strong Representation",
    "Protecting Your Rights & Business",
  ];
  let index = 0;
  let charIndex = 0;

  function typeEffect() {
    if (charIndex < textArray[index].length) {
      typewriterSpan.textContent += textArray[index].charAt(charIndex++);
      setTimeout(typeEffect, 70);
    } else {
      setTimeout(eraseEffect, 2000);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typewriterSpan.textContent = textArray[index].substring(0, --charIndex);
      setTimeout(eraseEffect, 40);
    } else {
      index = (index + 1) % textArray.length;
      setTimeout(typeEffect, 200);
    }
  }

  typeEffect();
});

 const servicesSwiper = new Swiper(".services-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
