import React from 'react'
import { useNavigate } from 'react-router-dom';
import YtEmbed3 from './YtEmbed3';
import YTOverlay from './YTOverlay';


const About = () => {


  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/shop');
  };



  return (
     <div className='h-full overflow-x-hidden uppercase '>
    
     {/* 🔶 Hero Section with background image (80% of screen) */}
      <div
        className="h-[90vh]  bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1706637353017-ce832c5893b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
           backgroundPosition: 'top',

        }}

          // Headings
        
      >
      
        <div className=" h-full flex-col gap-2 flex items-center px-5  justify-center text-[#e9a320] md:items-start md:px-10">
          
         <h1 className='text-[4.5rem] text-center tracking-tight text-[#f2c166] leading-tight md:w-[35rem] md:text-start ' style={{ fontFamily: '"Lobster Two", sans-serif'}}>meet the artist</h1>
       
        </div>
      </div>


        {/* Section 2  Details */}

      <div className=" bg-[#e6e5e3] flex flex-col items-center justify-center md:flex-row-reverse md:px-7 md:h-[65vh]">


          {/* BIO */}
          <div className="bg-[#e6e5e3] py-3 px-5 text-[#23444d] flex flex-col items-center gap-4  h-1/2 w-full md:px-5 md:gap-3  ">
           

            <h1 className='text-[3rem] text-center tracking-tight text-[#bb4714] leading-tight md:w-[35rem] md:text-start ' style={{ fontFamily: '"Lobster Two", sans-serif'}}>Mystrispot</h1>
           
            <h5 className='normal-case text-center md:text-1xl md:w-[30.2rem]'>Hey! My name is Saloni and I live in Rishikesh. I am just a girl who is passionate for creativity and art. This Channel is a little corner of the internal where creativity, comfort and inspiration come together..</h5>

               <div className=" items-start mt-5 flex gap-5 md:gap-16  ">

                <button
                onClick={handleShopClick}
                className=" cursor-pointer bg-[#bb4714] text-white uppercase p-3.5 border-1 border-[#bb4714] md:text-xs md:px-8 md:mt-6 md:py-5">SHOP ART</button>

                </div>


          </div>

      </div>


        {/* //Section 4 */}
        <div className=" bg-[#c9d0e0] flex flex-col items-center justify-center md:flex-row md:px-7 ">

        {/* Image */}
        
          <div className=" py-8 px-5 h-1/2 w-full flex items-center justify-center md:h-[100vh] ">
          
          <div className=" h-[38vh] w-full md:h-full">
            <img className='object-cover object-center h-full w-full ' src="/images/IMG_9831.JPG" alt="Profile" />
          </div>
          </div>

          {/* BIO */}
          <div className="bg-[#c9d0e0] s px-5 text-[#5d613e] flex flex-col  h-1/2 w-full md:px-25 md:gap-3">
            
            <h1 className='py-2  text-[2.3rem] tracking-tight font-bold md:text-[2.8rem]' style={{ fontFamily: '"Lobster Two", sans-serif'}}>ABout SALOni</h1>
            <h5 className='normal-case pt-3 md:text-1xl '>Brooke Cormier is a self-taught Canadian artist based in Toronto. After earning a Bachelor of Landscape Architecture from the University of Guelph in 2016, she pursued painting full-time under the mentorship of Tim Packer. Known for her realistic, nature-inspired work, Brooke’s art is featured in private collections worldwide. Her dedication to her craft, vibrant social media presence and ability to share her journey have made her an inspiring voice in the art community.

</h5>

              <div className="mt-15 mb-10 gap-5 flex items-center justify-center md:mt-10">


{/* yt button */}
  <a

    href="https://www.youtube.com/@mystrispot/videos" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#5d613f] cursor-pointer text-white uppercase p-3.5 border-1 border-[#5d613f] md:text-xs md:px-10 md:py-4"
  >
    youtube
  </a>

  {/* intsa button */}

  <a
    href="https://www.instagram.com/mystrispot/" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#c9d0e0] cursor-pointer text-black uppercase p-3.5 border-1 border-[#5d613f] md:text-xs md:px-10 md:py-4"
  >
    instagram
  </a>

</div>


          </div>

      </div>


          {/* youtube section 2 */}

          <div>

        {/* <YtEmbed3/> */}
        <YTOverlay/>

          </div>



    </div>
  )
}

export default About
