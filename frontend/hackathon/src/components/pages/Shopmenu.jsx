import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const Shopmenu = ({ onNavigate }) => {
  const gsapRef = useRef();


  useEffect(() => {
    gsap.from(gsapRef.current, {
      scale: 1.2,
      duration: 1,
    });
  }, []);

const underlineRef = useRef();
const animated = useRef(false);

const MouseEnter = () => {
   if (!animated.current) {
    animated.current = true;
    gsap.fromTo(
      underlineRef.current,
      { width: "0%" , opacity:1 },
      { width: "100%",opacity:"0", duration: 1, ease: "power2.out" }
    );
  }
};

const MouseLeave = () => {
  
  animated.current = true;
  gsap.fromTo(
      underlineRef.current,
      { width: "100%" },
      { width: "",opacity:0, duration: 1, ease: "power2.out" }
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
            onClick={() => onNavigate("/shop")}
            className="text-lg font-bold cursor-pointer"
          >
            Shop
          </div>

          <h3 className="text-left">Original Paintings</h3>
          <h3 className="text-left">Prints</h3>
          <h3 className="text-left">Shop All</h3>
        </div>
      ) : (
        // 💻 Desktop Content
        <div className="grid grid-cols-2  h-full border-1  overflow-hidden ">
          <div className="bg-white uppercase flex flex-row ">
            <div className="bg-white py-5 w-1/2">


            <div
  onMouseEnter={MouseEnter}
  onMouseLeave={MouseLeave}
  className="mx-3 px-3 py-1 w-fit cursor-pointer relative"
  style={{ fontFamily: '"Lobster Two", sans-serif' }}
>
  <h1 className="leading-tight md:mt-8 text-[#23444d]">
    Original <br />
    Paintings
  </h1>
  <span
    ref={underlineRef}
    className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb4714]"
  ></span>
</div>



            </div>

            

            <div className=" flex flex-col justify-start  py-5 w-1/2 bg-white">
              <div className="w-full md:my-5 md:border-l-1 md:border-[#23444d] md:h-full ">
                <h1
                className=" hover:border-b-2 mx-3 w-24 text-center px-3 py-1 "
                style={{ fontFamily: '"Lobster Two", sans-serif' }}
              >
                Prints
              </h1>
              <br />

              <h1
                className="mx-3 w-30  py-1 hover:border-b-2 px-3"
                style={{ fontFamily: '"Lobster Two", sans-serif' }}
              >
                Shop All
              </h1>
              </div>
            </div>
          </div>

          <div className="h-full bg-white">
            <img
              ref={gsapRef}
              className="object-fit h-full w-full"
              src="https://images.unsplash.com/photo-1603645116651-37b9f94cdf24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopmenu;
