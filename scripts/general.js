gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallex-bg", {
  scrollTrigger: {
    scrub: true,
    snap: 1/4
    // pin: true
  },
  // y: (index, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  y: (index, target) => {
    console.log(-ScrollTrigger.maxScroll(window));
    return -ScrollTrigger.maxScroll(window) * target.dataset.speed;
  },
  ease: "none", 
});

function startFrom(selector, offset) {
  let width = $(window).width();
  $(selector).css("left", offset + 600 - width / 2);
}