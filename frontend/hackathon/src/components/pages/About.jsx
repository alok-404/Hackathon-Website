import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';


import Footer from './Footer';
import YtEmbed2 from './YtEmbed2';
import useHeroAnimation from './useHeroAnimation';


const About = () => {


  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/shop');
  };

const heroRef = useRef(null);
  useHeroAnimation(heroRef); // Custom animation hook

  return (
     <div
     ref={heroRef}
     className='h-full overflow-x-hidden uppercase '>
    
     {/* 🔶 Hero Section with background image (80% of screen) */}
      <div
        className="hero-bg h-[90vh]  bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/bg8.jpg")`,
           backgroundPosition: 'top',

        }}

          // Headings
        
      >
      
        <div className="h-full flex-col gap-2 flex items-center px-5   justify-center text-[#e9a320] md:items-start md:px-10">
          
         <h1 className='hero-btn  text-[4.5rem] mt-40 md:mt-0 text-center tracking-tight text-[#bb4714] leading-tight md:w-[35rem] md:text-start ' style={{ fontFamily: '"Lobster Two", sans-serif'}}>meet the artist</h1>
       
        </div>
      </div>


        {/* Section 2  Details */}

      <div className=" bg-[#e6e5e3] flex flex-col items-center justify-center md:flex-row-reverse md:px-7 md:h-[65vh]">


          {/* BIO */}
          <div className="bg-[#e6e5e3] py-3 px-5 text-[#23444d] flex flex-col items-center gap-4  h-1/2 w-full md:px-5 md:gap-3  ">
           

            <h1 className='text-[3rem] text-center tracking-tight text-[#bb4714] leading-tight md:w-[35rem] md:text-center ' style={{ fontFamily: '"Lobster Two", sans-serif'}}>Mystrispot</h1>
           
            <h5 className='normal-case text-center md:text-1xl md:w-[30.2rem]'>Hi, I'm Saloni from Rishikesh — a girl deeply passionate about creativity and art. This is my cozy space on the internet where ideas come to life, comfort meets expression, and inspiration flows freely. Join me as I explore beauty in the little things and share my creative journey.</h5>

               <div className=" items-start mt-5 flex gap-5 md:gap-16  ">

                </div>
                  <button
                 onClick={handleShopClick}
            className=" cursor-pointer bg-[#bb4714] uppercase text-[0.8rem] px-6 py-4 border-[#c9d0e0] border-1 text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1">
               <span className="z-10 relative">SHOP ART</span>
            </button>


          </div>

      </div>


        {/* //Section 4 */}
      <div className="bg-[#f2c166] mx-5 min-h-screen flex flex-col items-center justify-center md:flex-row md:px-7">

  {/* Image Section */}
  <div className="w-full flex items-center justify-center py-8 px-5 md:w-1/2 md:h-screen">
    <div className="h-[38vh] w-full md:h-[80vh] md:w-[90%]">
      <img className="object-cover object-center h-full w-full" src="/images/IMG_9831.JPG" alt="Profile" />
    </div>
  </div>

  {/* Bio Section */}
  <div className="bg-[#f2c166] px-5 text-[#5d613e] flex flex-col w-full md:w-1/2 md:px-12 md:gap-4">
    <h1
      className="py-2 text-[2.3rem] tracking-tight font-bold md:text-[2.8rem]"
      style={{ fontFamily: '"Lobster Two", sans-serif' }}
    >
      ABout SALOni
    </h1>

    <h5 className="normal-case pt-3 text-sm md:text-base">
      Hi, I'm Saloni from the beautiful town of Rishikesh. I'm just a girl who finds joy in creativity, colors, and self-expression through art. This little space on the internet is where I pour my thoughts, ideas, and passions into visuals and stories that feel personal yet relatable. Whether it's painting, designing, or simply creating something meaningful, I believe that creativity has the power to comfort, connect, and inspire. I’m not here as an expert, just someone on a journey — learning, growing, and sharing what I love. If you’re into peaceful vibes and creative energy, you’re in the right place.
    </h5>

    <div className="mt-20 mb-10 gap-5 flex  items-center justify-center sm:flex-row md:mt-10">
      {/* YouTube Button */}
      <a
        href="https://www.youtube.com/@mystrispot/videos"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer bg-[#5d613f] uppercase text-[0.8rem] px-9 py-4 border-[#c9d0e0] border-1 text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1"
      >
        youtube
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/mystrispot/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer bg-[#c9d0e0] uppercase text-[0.8rem] px-9 py-4 border-[#5d613f] border-1 text-[#5d613f] font-medium hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1"
      >
        instagram
      </a>
    </div>
  </div>
</div>




          {/* Ytembed */}

          <div>
            <YtEmbed2/>
          </div>



          {/* footer */}

           <div>
          <Footer />
        </div>

    



    </div>
  )
}

export default About
