// import React, { useEffect } from 'react'
// import { gsap } from "gsap";
import { useRef } from "react";
import YtEmbed1 from "./YtEmbed1";
// import gsap from "gsap";
// import { useLayoutEffect } from "react";
import useHeroAnimation from "./useHeroAnimation";
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate()


// Animations ke liye jo ki useheroanimation pe hai


const heroRef = useRef(null);
  useHeroAnimation(heroRef); // Custom animation hook








  return (
      
    <div 
    ref={heroRef}
    className="h-full  overflow-x-hidden uppercase">



      {/* 🔶 Hero Section with background image */}
      <div
        className="hero-bg h-[90vh]  bg-cover bg-center"
        style= { {
          backgroundImage: `url("https://images.unsplash.com/photo-1705603476680-1d87835e8850?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundPosition: "top",
        }}
      >
        <div 
         className="h-full pt-10 flex-col flex items-center justify-center uppercase text-white text-5xl font-bold md:items-start md:px-14 md:text-7xl">
          <h1
      
         
            className="hero-heading  text-[#bb4714] "
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            mystrispot
          </h1>
          <div
          className="  hero-btn flex flex-row gap-5  mt-10">

            <button
          onClick={() => navigate("/shop")}
            className=" cursor-pointer bg-[#c9d0e0] uppercase text-[0.8rem] px-6 py-4 border-[#c9d0e0] border-1 text-[#293452] font-medium hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1">
               <span className="z-10 relative">Shop now</span>
            </button>

            <button
            onClick={() => navigate("/Forartist")}
            className=" relative group cursor-pointer bg-transparent uppercase text-[#f1f5ff] text-xs px-6 py-4 border-[#c9d0e0] border-1 font-medium md:text-[#c9d0e0] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1">
            <span className="z-10 relative">Shop now</span>
            </button>
          </div>
        </div>
      </div>



      {/* Section 2 jisme featured painings and all hai*/}

      <div
    // ref={heroRef}
      
       className=" uppercase bg-[#e6e5e3]flex flex-col gap-1 items-center py-2 px-5">
        <h1

          className="hero-heading text-5xl mt-12 text-center text-[#23444d] font-normal md:mt-18"
          style={{ fontFamily: '"Lobster Two", sans-serif' }}
        >
          DIY/PAINTING
        </h1>
        <br />

        <div
         className="hero-bg  bg-[#e6e5e3] h-[55vh] w-full mb-20 flex flex-col gap-1  md:h-[90%]">
          <div className="w-full overflow-hidden flex gap-1  md:h-130">
            <div className="w-[45%] h-full   ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/ba/ac/42/baac42a1cf60188cf2e45feb03df3769.jpg
        "
                alt=""
              />
            </div>
            <div className="w-[30%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/5e/c3/46/5ec346363167b21875d3d3a848255754.jpg"
                alt=""
              />
            </div>
            <div className="w-[35%] h-full ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/e7/40/3c/e7403c817e356bc217b2871fe6f17759.jpg
"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-1/4  flex gap-1 md:h-130">
            <div className="w-[35%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/1200x/8e/30/4a/8e304aac188acd1f61943e58752a2115.jpg"
                alt=""
              />
            </div>
            <div className="w-[30%] h-full   ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/1200x/2b/ec/a8/2beca8663a80c5be011b0185e8dc0adf.jpg"
                alt=""
              />
            </div>
            <div className="w-[35%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/11/b1/46/11b14688f1ae10c2ed5057e7b5104fc9.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-1/4  flex gap-1 md:h-130">
            <div className="w-[30%] h-full ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/3c/f4/7a/3cf47ab75591c50ad7c3ee6d90d2b4bf.jpg"
                alt=""
              />
            </div>
            <div className="w-[30%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/1200x/cd/04/bb/cd04bb501f493b488d78eedd54649b1d.jpg"
                alt=""
              />
            </div>
            <div className="w-[40%] h-full ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/1200x/32/76/ca/3276ca49f8b252d4e1ef1167f5753110.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-1/4  flex flex-row-reverse gap-1    md:h-130">
            <div className="w-[30%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/1200x/8b/58/03/8b5803ab66f196f33cb77902a3e79a32.jpg"
                alt=""
              />
            </div>
            <div className="w-[30%] h-full   ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/a0/da/0e/a0da0e00ac881f968d1fbd8c78bf04c9.jpg"
                alt=""
              />
            </div>
            <div className="w-[40%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/1200x/97/c8/1a/97c81a39c322e62851033a3b9a66849b.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" justify-between px-3 mt-auto mb-3 flex gap-2 md:justify-center md:gap-16 ">
          <button className=" uppercase p-3.5 border-1 border-amber-900 text-amber-900 md:text-s md:px-5 ">
            Explore more
          </button>
          <button className="bg-amber-900 p-3.5 border-amber-900 border-1 text-white uppercase md:text-s md:px-5">
            Shop now
          </button>
        </div>
      </div>

      {/* Section 2  Details */}

      <div className=" bg-[#f2c166] flex flex-col items-center justify-center md:flex-row-reverse md:px-7">
        {/* Image */}

        <div className=" pt-8 px-5 h-1/2 w-full flex items-center justify-center md:h-[90vh] ">
          <div className=" h-[38vh] w-full md:h-full md:pb-8">
            <img
              className="object-cover object-center h-full w-full "
              src="\images\IMG_9831.JPG"
              alt="Profile"
            />
          </div>
        </div>

        {/* BIO */}
        <div className="bg-[#f2c166]  py-6 px-5 text-[#23444d] flex flex-col  h-1/2 w-full md:px-25 md:gap-3">
          <h5 className="md:text-1xl ">mystrispot</h5>
          <h1
            className="py-3 text-center text-[2.4rem] tracking-wider font-bold md:text-[2.8rem]  "
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            meet the artist
          </h1>
          <h5 className="md:text-1xl md:pr-[5rem]">
            Hey! My name is Saloni and I live in Rishikesh. I am just a girl who
            is passionate for creativity and art. This Channel is a little
            corner of the internal where creativity, comfort and inspiration
            come together.
          </h5>

          <div className=" items-start mt-20 flex gap-5 md:gap-16  ">
            <button className=" bg-[#23444d] text-white uppercase p-3.5 border-1 border-[#23444d] md:text-xs md:px-5 md:py-4 ">
              Learn more
            </button>
            <button className=" p-3.5 border-[#23444d] border-1 text-[#23444d] uppercase md:text-xs md:px-5 md:py-4 ">
              For Artist
            </button>
          </div>
        </div>
      </div>

      {/* YOUTUBE SECTION [ISME YTEMBED1 EK ALG SE PAGE HAI] */}

      <div className=" bg-[#e6e5e3]  py-10 flex items-center justify-center">
        <YtEmbed1 />
      </div>

      {/* //Section 4 */}
      <div className=" bg-[#f2c166] flex flex-col items-center justify-center md:flex-row-reverse md:px-7">
        {/* Image */}

        <div className=" py-8 px-5 h-1/2 w-full flex items-center justify-center md:h-[90vh] ">
          <div className=" h-[38vh] w-full md:h-full">
            <img
              className="object-cover object-center h-full w-full "
              src="https://images.unsplash.com/photo-1549499090-5fa12865059c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
            />
          </div>
        </div>

        {/* BIO */}
        <div className="bg-[#f2c166]  py-6 px-5 text-[#5d613f] flex flex-col  h-1/2 w-full md:px-25 md:gap-3">
          {/* <h5 className='md:text-1xl'
            >mystrispot</h5> */}
          <h1
            className="py-3  text-[2.4rem] tracking-wider font-bold md:text-[2.8rem]"
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            meet the artist
          </h1>
          <h5 className="md:text-1xl md:pr-[5rem]">
            Hey! My name is Saloni and I live in Rishikesh. I am just a girl who
            is passionate for creativity and art. This Channel is a little
            corner of the internal where creativity, comfort and inspiration
            come together.
          </h5>

          <div className=" items-start mt-20 flex gap-5 md:gap-16  ">
            <button className=" bg-[#5d613f] text-white uppercase p-3.5 border-1 border-[#5d613f] md:text-s md:px-6 md:py-5 ">
              Explore Resources
            </button>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className=" bg-[#5d613f] text-white h-[45vh] flex flex-col items-center justify-center md:flex-row-reverse md:px-7">
        <div className="h-1/2 w-full bg-red-700 px-5">
          <h1
            className="py-3  text-[1.4rem]  font-bold md:text-[2rem]  "
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            Subcriber to corner collector
          </h1>
          <h4 className="lowercase">
            Our exclusive insider guide to Brooke's latest artworks, special
            offers, and inspiration for your collection.
          </h4>
        </div>

        <div className="h-1/2 w-full bg-blue-700"></div>
      </div>

      {/* Footer */}

      <div className="h-screen bg-[#c8cfde]"></div>
    </div>
  );
};

export default Home;
