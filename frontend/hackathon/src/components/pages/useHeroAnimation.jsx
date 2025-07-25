import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHeroAnimation = (ref) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        //   scrub:"2",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ref.current.querySelector(".hero-bg"),
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 }
      )
        .fromTo(
          ref.current.querySelector(".hero-heading"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.8"
        )
        .fromTo(
          ref.current.querySelector(".hero-btn"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.4"
        );
    }, ref);

    return () => ctx.revert(); // 🧹 Clean up scoped triggers only
  }, [ref]);
};

export default useHeroAnimation;
