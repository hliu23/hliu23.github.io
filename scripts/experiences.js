let numExp = 5;
gsap.to(".parallex-bg", {
  scrollTrigger: {
    scrub: true,
    snap: 1/(numExp - 1),
  },
  y: (index, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none", 
});

$(function () {
  $(".board").mouseenter(function() {
    $(this).children(".exp-name").hide();
    $(this).children(".exp-date").hide();
    $(this).children(".exp-desc").hide().css("visibility", "visible").fadeIn();
    
  }).mouseleave(function() {
    $(this).children(".exp-desc").hide();
    $(this).children(".exp-name").fadeIn();
    $(this).children(".exp-date").fadeIn();
  })

})