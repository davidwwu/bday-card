// gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    pin: ".cards",
    markers: true,
    scrub: true,
    start: "top top",
    end: "bottom top",
    invalidateOnRefresh: true,
  },
});
tl.fromTo(
  ".card-front",
  {
    rotationY: 0,
  },
  {
    x: 0,
    rotationY: "+=90",
  }
).fromTo(
  ".card-back",
  {
    rotationY: -90,
  },
  {
    x: 0,
    rotationY: "+=90",
  }
);
