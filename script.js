gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "[data-scroll-container]" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! S0 to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// Set defaults for ScrollTrigger to use the scroller
ScrollTrigger.defaults({ scroller: "[data-scroll-container]" });

// Image Hover Animation
function imagehoverAnimation() {
  var img1 = document.querySelector("#img1");
  var img2 = document.querySelector("#img2");
  var img3 = document.querySelector("#img3");
  var img4 = document.querySelector("#img4");

  img1.addEventListener("mouseenter", function () {
    const tempSrc = img1.src;
    img1.src = img4.src;
    img4.src = tempSrc;
  });
  img2.addEventListener("mouseenter", function () {
    const tempSrc = img2.src;
    img2.src = img4.src;
    img4.src = tempSrc;
  });
  img3.addEventListener("mouseenter", function () {
    const tempSrc = img3.src;
    img3.src = img4.src;
    img4.src = tempSrc;
  });
}
imagehoverAnimation();

// Hero Section Rotation Animation
function rotationAnimation() {
  var tl = gsap.timeline();
  tl.to(".bounding h1", {
    y: 0,
    duration: 2,
    ease: "expo.inOut",
    stagger: 0.2,
  });
  tl.to(
    "#img3",
    {
      duration: 1,
      xPercent: -50,
      yPercent: -50,
      rotation: -10,
      left: "50%",
      top: "50%",
      position: "absolute",
      stagger: 0.2,
    },
    "anim"
  );
  tl.to(
    "#img2",
    {
      duration: 1,
      xPercent: -50,
      yPercent: -50,
      rotation: -20,
      left: "50%",
      top: "50%",
      position: "absolute",
      stagger: 0.2,
    },
    "anim"
  );
  tl.to(
    "#img1",
    {
      duration: 1,
      xPercent: -50,
      yPercent: -50,
      rotation: -30,
      left: "50%",
      top: "50%",
      position: "absolute",
      stagger: 0.2,
    },
    "anim"
  );
}
rotationAnimation();

// Navigation Animation
function nav() {
  gsap.from(".nav", {
    opacity: 0,
    y: -70,
    duration: 1,
    ease: "power2.out",
    stagger: {
      amount: 0.5,
    },
  });
}

// Bottom Elements Animation
function bottom() {
  nav();
  gsap.from(".social-icons i, .right-bottom h5", {
    opacity: 0,
    duration: 1,
    delay: 1,
  });
  gsap.from("#bottom-textleft", {
    opacity: 0,
    duration: 1,
    delay: 1,
  });
}
bottom();

// Services Section ScrollTrigger Animation
gsap.from(".section-header", {
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".service-card", {
  scrollTrigger: {
    trigger: ".services-grid",
    start: "top 85%", // Trigger when top of grid hits 85% of viewport height
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out",
  clearProps: "all" // CRITICAL: Removes inline styles after animation to ensure visibility/interactivity
});

// Why Choose Us Section ScrollTrigger Animation
gsap.from(".how-works-image", {
  scrollTrigger: {
    trigger: ".how-it-works-section",
    start: "top 85%",
    end: "top 35%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: -50,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".step-item", {
  scrollTrigger: {
    trigger: ".work-steps",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

// Why Choose Us Section ScrollTrigger Animation
gsap.from(".why-choose-left", {
  scrollTrigger: {
    trigger: ".why-choose-section",
    start: "top 75%",
    end: "top 25%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: -80,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".feature-item", {
  scrollTrigger: {
    trigger: ".features-list",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: -50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

gsap.from(".stats-grid", {
  scrollTrigger: {
    trigger: ".why-choose-right",
    start: "top 75%",
    end: "top 25%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: 80,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".testimonial-card", {
  scrollTrigger: {
    trigger: ".testimonial-card",
    start: "top 85%",
    end: "top 35%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});

// Counter Animation for Stats
function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target"));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current) + (target === 98 ? "" : "+");
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + (target === 98 ? "%" : "+");
    }
  };

  updateCounter();
}

// Trigger counter animation on scroll
ScrollTrigger.create({
  trigger: ".stats-grid",
  start: "top 80%",
  onEnter: () => {
    document.querySelectorAll(".stat-number").forEach((el) => {
      if (el.textContent === "0") {
        animateCounter(el);
      }
    });
  },
});

// Footer Animation
gsap.from(".footer-col", {
  scrollTrigger: {
    trigger: ".footer-content", // Trigger when content enters
    start: "top 85%",
    end: "top 35%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

gsap.from(".footer-bottom", {
  scrollTrigger: {
    trigger: ".footer-bottom",
    start: "top 95%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll-based parallax effect removed
// Icons/Images remain static on scroll as requested
