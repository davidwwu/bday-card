let tl = gsap.timeline({
  scrollTrigger: {
    pin: ".cards",
    markers: false,
    scrub: true,
    start: "top top",
    end: "bottom top",
    invalidateOnRefresh: true,
  },
});
tl.fromTo(
  ".card-front",
  {
    scale: 0.75,
  },
  {
    scale: 1,
  }
)
  .fromTo(
    ".card-front",
    {
      transformStyle: "preserve-3d",
      rotationY: 0,
    },
    {
      rotationY: "+=90",
    }
  )
  .fromTo(
    ".card-back",
    {
      transformStyle: "preserve-3d",
      rotationY: -90,
    },
    {
      rotationY: "+=90",
    }
  );
