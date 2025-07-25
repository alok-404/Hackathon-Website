import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Shopmenu = ({ onNavigate }) => {
  const navigate = useNavigate();

  const gsapRef = useRef();

  useEffect(() => {
    gsap.from(gsapRef.current, {
      scale: 1.2,
      duration: 1,
    });
  }, []);

  const underlineRefs = useRef([]);
  const animatedRefs = useRef([]);

  useEffect(() => {
    underlineRefs.current = document.querySelectorAll(".hover-underline");
    animatedRefs.current = Array.from(underlineRefs.current).map(() => false);
  }, []);

  const handleMouseEnter = (index) => {
    gsap.killTweensOf(underlineRefs.current[index]); // 🛑 cancel previous animations if any
    gsap.fromTo(
      underlineRefs.current[index],
      { width: "0%", opacity: 1 },
      { width: "100%", opacity: 0, duration: 1, ease: "power2.out" }
    );
  };

  const handleMouseLeave = (index) => {
    gsap.killTweensOf(underlineRefs.current[index]); // 🛑 cancel previous animations if any
    gsap.fromTo(
      underlineRefs.current[index],
      { width: "100%", opacity: 1 },
      { width: "0%", opacity: 0, duration: 1, ease: "power2.out" }
    );
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="text-black w-full h-full  ">
      {isMobile ? (
        // 🌟 Mobile Content
        <div className="flex flex-col gap-4">
          <div
            // onClick={() => onNavigate("/shop")}
            className="text-lg font-bold cursor-pointer"
          >
            Shop
          </div>

          {/* <h3 className="text-left">Original Paintings</h3> */}
          <h3
            onClick={() => onNavigate("/artistcoursesmore")}
            className="text-left"
          >
            Workshop
          </h3>
          <h3 onClick={() => onNavigate("/shop")} className="text-left">
            Shop All
          </h3>
        </div>
      ) : (
        // 💻 Desktop Content
        <div className="grid grid-cols-2 h-full border-1  overflow-hidden ">
          <div className="bg-white uppercase flex flex-row ">
            <div className="bg-white py-5 w-1/2">
              <div
                onClick={() => navigate("/artistcoursesmore")}
                className="mx-3 px-3 py-1 w-fit cursor-pointer relative"
                style={{ fontFamily: '"Lobster Two", sans-serif' }}
              >
                <div
                  onClick={() => navigate("/artistcoursesmore")}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                  className="relative"
                >
                  <h1 className="leading-tight md:mt-8 text-[#23444d] pointer-events-none">
                    Workshop <br />
                    Space
                  </h1>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#23444d] hover-underline"></span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-start  w-1/2 bg-white"> 
              <div className="w-full md:my-10 md:border-l-1 md:border-[#23444d] md:h-full  ">
                <br />

                <div
                  onClick={() => navigate("/shop")}
                   onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                  className="mx-3 w-30 py-1 px-3 relative cursor-pointer"
                  style={{ fontFamily: '"Lobster Two", sans-serif' }}
                >
                  <div
                   
                    className="relative"
                  >
                    <h1 className="text-[#23444d] pointer-events-none">
                      Shop All
                    </h1>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#23444d] hover-underline"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full bg-white">
            <img
              ref={gsapRef}
              className="object-fit h-full w-full"
              src="https://images.unsplash.com/photo-1509744645300-a2098b11871a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopmenu;
