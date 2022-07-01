gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallex-bg", {
  scrollTrigger: {
    scrub: true
  },
  y: (index, target) => {
    res = -ScrollTrigger.maxScroll(window) * target.dataset.speed;
    console.log(res);
    return res;
  },
  ease: "none", 
});

function startFrom(selector, offset) {
  let width = $(window).width();
  $(selector).css("left", offset + 600 - width / 2);
}