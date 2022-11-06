gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".card:not(:first-child)",
  {
    x: () => window.innerWidth / 2 + 100,
    rotate: -90,
  },
  {
    x: 0,
    stagger: 0.5,
    rotate: 0,
    scrollTrigger: {
      pin: ".cards",
      markers: true,
      scrub: true,
      start: "top center",
      end: "bottom top",
      invalidateOnRefresh: true,
    },
  }
);
