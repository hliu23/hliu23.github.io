let numProjects = 5;
gsap.to(".parallex-bg", {
  scrollTrigger: {
    scrub: true,
    snap: 1/(numProjects-1)
  },
  // y: (index, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  y: (index, target) => {
    // console.log(-ScrollTrigger.maxScroll(window));
    return -ScrollTrigger.maxScroll(window) * target.dataset.speed;
  },
  ease: "none", 
});