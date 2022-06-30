gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallex-bg", {
  scrollTrigger: {
    scrub: true
  },
  y: (index, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none", 
});