import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ForArtistmenu = ({ onNavigate }) => {
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
          <div className="text-lg font-bold cursor-pointer">For Artist</div>
          <h3 onClick={() => onNavigate("/about")} className="text-left">
            Know me
          </h3>
          <h3 onClick={() => onNavigate("/Forartist")} className="text-left">
            For Artist
          </h3>
        </div>
      ) : (


        // 💻 Desktop Content
        <div className="grid grid-cols-2 border-1    h-full  overflow-hidden ">

          
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
                    Artist <br />
                    Space
                  </h1>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#23444d] hover-underline"></span>
                </div>
              </div>
            </div>

            <hr />

            <div className=" flex flex-col justify-start  py-5 w-1/2 bg-white">
              <div className="w-full md:my-5 md:border-l-1 md:border-[#23444d] md:h-full ">
                <br />

                <div
                  onClick={() => navigate("/about")}
                  className="mx-3 w-30 py-1 px-3 relative cursor-pointer"
                  style={{ fontFamily: '"Lobster Two", sans-serif' }}
                >
                  <div
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                    className="relative"
                  >
                    <h1 className="text-[#23444d] pointer-events-none">
                      Know me
                    </h1>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#23444d] hover-underline"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>


            {/* Right side image (untouched) */}


          <div className="h-full bg-white">
            <img
              ref={gsapRef}
              className="object-fit h-full w-full"
              src="https://images.unsplash.com/photo-1544365789-5579c3a21e19?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>



      )}
    </div>
  );
};
export default ForArtistmenu;
