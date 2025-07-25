import React, { useRef } from 'react'
import YtEmbed2 from './YtEmbed2'
import NotionTemplates from './NotionTemplate'
import ArtistCourses from './ArtistCourses'
import Footer from './Footer'
import useHeroAnimation from './useHeroAnimation'

const Forartist = () => {



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
          backgroundImage: `url("/images/bgforartist.jpg")`,
           backgroundPosition: 'bottom',

        }}

          // Headings
        
      >
      
        <div className=" h-full flex-col gap-2 flex items-center px-5 pt-18 justify-center text-[#e3bc74] md:items-start md:px-12">
          {/* <h3 className=''>For Artist</h3> */}
         <h1 className='hero-heading text-[3rem] text-center  text-[#e9a320] leading-tight md:w-[35rem] md:text-start ' style={{ fontFamily: '"Lobster Two", sans-serif'}}>inspiring passionate artists</h1>
         <h4 className='hero-btn normal-case md:w-[30rem] md:text-start md:mt-3 '>Mystrispot empowers artists to turn passion into a creative business. From templates and studio tools to honest tips and educational content, we’re here to help you grow. No gatekeeping — just real resources made by creators, for creators. Build your brand, nurture your art, and thrive with Mystrispot..</h4>

        </div>
      </div>


        {/* Section 3 */}

          <div>
            <ArtistCourses/>
          </div>



        {/* Section 2  Details */}

      <div className=" bg-[#e6e5e3] flex flex-col items-center justify-center md:flex-row-reverse md:px-7 md:h-screen">

        {/* Image */}
        <div className="pt-8 pb-10 bg-[#e6e5e3] px-5 h-1/2 w-full flex items-center justify-center md:h-[90vh]">
  <div className="h-[38vh] w-full md:h-full rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1">
    <img
      className="object-cover object-center h-full w-full"
      src="\images\IMG_9832.JPG"
      alt="Profile"
    />
  </div>
</div>

          {/* BIO */}
          <div className="bg-[#e6e5e3] py-6 px-5 text-[#23444d] flex flex-col  h-1/2 w-full md:px-5 md:gap-3">
           
            <h1 className='pt-2 leading-normal pb-6 text-[2.6rem] tracking-wider md:tracking-normal  font-bold md:text-[2.8rem]  ' style={{ fontFamily: '"Lobster Two", sans-serif'}}>Digital <span className='md:mx-3'>Studio</span> Notion <span className='md:mx-2'>Template</span></h1>
            <h5 className='normal-case md:text-1xl md:w-[30.2rem]'>“Streamline your creative workflow and manage your art business with ease using the Digital Studio Notion Template. Designed specifically for creators, this all-in-one template helps you organize tasks, track projects, plan finances, and set meaningful goals — so you can focus more on creating and growing your vision.”</h5>

               <div className=" items-start mt-5 flex gap-5 md:gap-16  ">

                <button className="flex items-center bg-[#23444d] text-white uppercase p-3.5 border-1 border-[#23444d] md:text-xs md:px-8 md:mt-6 md:py-3 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1"> <span className="z-10 relative">Learn more</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-down-icon lucide-move-down"><path d="M8 18L12 22L16 18"/><path d="M12 2V22"/></svg></button>

                </div>

           



          </div>

      </div>



        





      {/* Section-3 */}

        <div>
          <NotionTemplates/>
        </div>





          {/* youtube section 2 */}

          <div>

            <YtEmbed2 />
          </div>

          {/* FOOTER */}

          <div>
            <Footer/>
          </div>



    </div>
  )
}

export default Forartist
