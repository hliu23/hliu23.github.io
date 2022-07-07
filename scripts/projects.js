let numProjects = 5;
gsap.to(".parallex-bg", {
  scrollTrigger: {
    scrub: true,
    snap: 1/4,
  },
  // y: (index, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  y: (index, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  // onSnapComplete: function(self) {
  //   console.log(numProjects);
  //   // let address = "./media/branch/branch-" + numProjects;
  //   // gsap.to(".background", {
  //   //   "background-image": ("url(" + address + ")"),
  //   //   duration: 1
  //   // });
  //   numProjects--;
  // },
  ease: "none", 
});

// gsap.to(".background", {
//   scrollTrigger: {
//     trigger: "#bg-2-1",
//     start: "top top",
//     end: "+=100vh"
//   },
//   "background-image": ("url(" + "./media/branch/branch-5.png)"),
//   ease: "none", 
//   duration: 0
// });

gsap.to(".background", {
  scrollTrigger: {
    trigger: "#bg-2-4",
    start: "bottom center",
    end: "+=100vh"
  },
  "background-image": "url(../media/branch/branch-4.png)",
  ease: "power", 
  duration: 0.1
});

gsap.to(".background", {
  scrollTrigger: {
    trigger: "#bg-2-7",
    start: "bottom center",
    end: "+=100vh"
  },
  "background-image": "url(../media/branch/branch-3.png)",
  ease: "none", 
  duration: 0.1
});

gsap.to(".background", {
  scrollTrigger: {
    trigger: "#bg-2-10",
    start: "bottom center",
    end: "+=100vh"
  },
  "background-image": "url(../media/branch/branch-2.png)",
  ease: "none", 
  duration: 0.1
});

gsap.to(".background", {
  scrollTrigger: {
    trigger: "#bg-2-13",
    start: "bottom center",
    end: "+=100vh"
  },
  "background-image": "url(../media/branch/branch-1.png)",
  ease: "none", 
  duration: 0.1
});


