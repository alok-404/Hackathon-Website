// import React, { useEffect } from 'react'
// import { gsap } from "gsap";
import { useRef, useState } from "react";
import YtEmbed1 from "./YtEmbed1";
// import gsap from "gsap";
// import { useLayoutEffect } from "react";
import useHeroAnimation from "./useHeroAnimation";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { toast } from "react-toastify";
import ArtistCourses from "./ArtistCourses";

const Home = () => {

const navigate = useNavigate()


// Animations ke liye jo ki useheroanimation pe hai


const heroRef = useRef(null);
  useHeroAnimation(heroRef); // Custom animation hook


const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Subscribed Successfully!");
    setEmail("");
  };


// -mt-[4rem] md:-mt-[7rem] 


  return (
      
    <div 
    ref={heroRef}
    className="h-full overflow-x-hidden uppercase">



      {/* 🔶 Hero Section with background image */}
      <div
        className="hero-bg h-[90vh]  bg-cover bg-center"
        style= { {
          backgroundImage: `url("/images/bg2.jpg")`,

          backgroundPosition: "bottom",
           backgroundSize: "cover",
      //     transform: "rotate(90deg)",
      //        top: "-50%",
      // left: "-50%",
        }}
      >
        <div 
         className="h-full pt-10 flex-col flex items-center justify-center uppercase text-white text-5xl font-bold md:items-start md:px-14 md:text-7xl">
          <h1
      
         
            className="hero-heading  text-[#F8B259] "
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
            <span className="z-10 relative">For Artist</span>
            </button>
          </div>
        </div>
      </div>



      {/* Section 2 jisme featured painings and all hai*/}

      <div
    // ref={heroRef}
      
       className=" uppercase bg-[#e6e5e3]flex flex-col gap-1 items-center py-2 px-5">
        <h1

          className="hero-heading text-5xl mt-12 text-center text-[#23444d] font-normal md:mt-22"
          style={{ fontFamily: '"Lobster Two", sans-serif' }}
        >
          Featured work
        </h1>
        <br />

        <div
         className="hero-bg  bg-[#e6e5e3] h-[55vh] w-full mb-20 flex flex-col gap-1  md:h-[90%]">
          <div className="w-full overflow-hidden flex gap-1  md:h-130">
            <div className="w-[45%] h-full   ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/fc/df/04/fcdf046170532aeea700ce368c0784fc.jpg
        "
                alt=""
              />
            </div>
            <div className="w-[30%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/1200x/6b/3b/9e/6b3b9ea470f065399aec718e911d2297.jpg"
                alt=""
              />
            </div>
            <div className="w-[35%] h-full ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/b7/32/65/b7326504d531a3ee220dad84241db64d.jpg
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
                src="https://i.pinimg.com/736x/e3/0b/ba/e30bba8298bd9a37c07a604008d3363a.jpg"
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
                src="https://i.pinimg.com/736x/da/5b/57/da5b57889a96b52a44b17fc4f823b8c0.jpg"
                alt=""
              />
            </div>
            <div className="w-[30%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/80/fa/d9/80fad97c66b3c0fbc64844a4b8be3d86.jpg"
                alt=""
              />
            </div>
            <div className="w-[40%] h-full ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/d4/8f/66/d48f66709811deb1af2ef2a1253f01e4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-1/4  flex flex-row-reverse gap-1    md:h-130">
            <div className="w-[30%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/736x/ed/ba/c3/edbac3bd8443c4514ef8d0b3e9f7071a.jpg"
                alt=""
              />
            </div>
            <div className="w-[30%] h-full   ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/1200x/d0/84/61/d0846181387b1cd213b849442ce52d75.jpg"
                alt=""
              />
            </div>
            <div className="w-[40%] h-full  ">
              <img
                className="h-full w-full object-center object-cover"
                src="https://i.pinimg.com/1200x/e0/26/d3/e026d3ba19a5d44033f8fdec7b069a3b.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" justify-between px-3 mt-auto mb-3 flex gap-2 md:justify-center md:gap-16 ">
         
            <button
            onClick={() => navigate("/about")}
            className=" relative group cursor-pointer bg-transparent uppercase text-xs px-8 py-4  border-amber-900  border-1 font-medium md:text-[#c9d0e0] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1">
            <span className="z-10 relative text-amber-900">About</span>
            </button>

            <button
          onClick={() => navigate("/shop")}
            className=" cursor-pointer bg-amber-900 uppercase text-[0.8rem] px-6 py-4 border-[#c9d0e0] border-1 text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1">
               <span className="z-10 relative">Shop now</span>
            </button>

        </div>
      </div>

      {/* Section 2  Details */}

      <div className=" bg-[#f2c166] mx-5 flex flex-col items-center justify-center md:flex-row-reverse md:px-7">
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
          
          <h1
            className="py-3 text-center text-[2.4rem] tracking-wider font-bold md:tracking-normal md:text-[2.8rem]  "
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            artist's note
          </h1>
          <h5 className="md:text-1xl md:pr-[5rem]">
            Hey!<br/> My name is Saloni and I live in Rishikesh. I am just a girl who
            is passionate for creativity and art. It is my solace & This  is a little
            corner of the internal where creativity, comfort and inspiration
            come together.
          </h5>

          <h5 className="md:text-1xl ">mystrispot</h5>

          <div className=" items-start mt-20 flex gap-5 md:gap-16  ">
            

            <button
          onClick={() => navigate("/about")}
            className=" cursor-pointer bg-[#23444d] uppercase text-[0.8rem] px-6 py-4  border-[#23444d] border-1 text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1 ">
               <span className="z-10 relative">LEarn more</span>
            </button>
             
          
            
            <button
            onClick={() => navigate("/Forartist")}
            className=" relative group cursor-pointer bg-transparent uppercase text-xs px-8 py-4  border-[#23444d] border-1 text-[#23444d] font-medium  hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1">
            <span className="z-10 relative text-[#23444d] border-[#23444d]">for artist</span>
            </button>
          </div>
        </div>
      </div>

      {/* YOUTUBE SECTION [ISME YTEMBED1 EK ALG SE PAGE HAI] */}

      <div className=" bg-[#e6e5e3]  py-10 flex items-center justify-center">
        <YtEmbed1 />
      </div>

      {/* //Section 4 */}
 

        <div className="bg-[#e6e5e3]   flex flex-col items-center justify-center md:flex-row-reverse md:px-5   md:pt-18 md:pb-30" >
          <ArtistCourses />
        </div>



      {/* section 5 */}


      

      {/* Footer */}

      <div className=" bg-[#c8cfde] flex flex-col gap-6 mb-auto">


        <div className=" bg-[#5d613f] pt-3 pb-10 px-4 text-white  flex flex-col items-center justify-center gap-5 md:flex-row md:px-5 md:py-20">
        <div className="h-1/2 w-full bg-transparent ">
          <h1
            className="py-3  text-[1.4rem]  font-bold md:text-[2rem]  "
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            Subcriber to Mystrimail
          </h1>
          <h4 className="lowercase md:w-100">
            Our exclusive insider guide to Mystrispot's latest artworks, special
            offers, and inspiration for your collection.
          </h4>
        </div>

        <div className="h-1/2 w-full flex flex-col gap-3 bg-transparent md:gap-5">
         <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full bg-white  text-black flex-1 md:text-xl md:py-4 md:pl-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-[#d0d5e2] w-full text-black font-normal px-4 py-2 md:py-4"
              onClick={handleSubscribe}
            >
              SUBSCRIBE
            </button>
        
        </div>
      </div>

              <Footer/>


      </div>
    </div>
  );
};

export default Home;
