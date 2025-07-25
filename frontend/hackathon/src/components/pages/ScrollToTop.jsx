import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // ✅ import plugin

gsap.registerPlugin(ScrollToPlugin); // ✅ register plugin (just once)

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: 0 },
      ease: "power2.out",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
