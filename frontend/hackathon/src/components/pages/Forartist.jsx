import React from 'react'
import YtEmbed2 from './YtEmbed2'

const Forartist = () => {
  return (
    <div className='h-full overflow-x-hidden uppercase '>
    
     {/* 🔶 Hero Section with background image (80% of screen) */}
      <div
        className="h-[90vh]  bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1705603476680-1d87835e8850?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
           backgroundPosition: 'top',

        }}

          // Headings
        
      >
      
        <div className=" h-full flex-col gap-2 flex items-center px-5 pt-18 justify-center text-[#e9a320] md:items-start md:px-10">
          <h3 className=''>For Artist</h3>
         <h1 className='text-[3rem] text-center text-[#f2c166] leading-tight md:w-[35rem] md:text-start ' style={{ fontFamily: '"Lobster Two", sans-serif'}}>inspiring passionate artists</h1>
         <h4 className='normal-case md:w-[30rem] md:text-start md:mt-3 '>Brooke has built her art career from the ground up and wants to help other creators do the same by offering templates, studio essentials, educational videos, and newsletters to grow their creative businesses.</h4>
        <div className="flex flex-row gap-2 mt-10 md:gap-10 ">
           <button className="bg-[#eeeff2] text-black  px-2 py-4 border-[#eeeff2] border-1 font-thin">EXPLORE TEMPLATE</button>
                   <button className="bg-transparent text-[#eeeff2]  px-2 py-2 border-[#eeeff2] border-1 font-thin">SHOP TEMPLATE</button>

        </div>
        </div>
      </div>


        {/* Section 2  Details */}

      <div className=" bg-[#e6e5e3] flex flex-col items-center justify-center md:flex-row-reverse md:px-7 md:h-[100vh]">

        {/* Image */}
        <div className="pt-8 pb-10 bg-[#e6e5e3] px-5 h-1/2 w-full flex items-center justify-center md:h-[90vh]">
  <div className="h-[38vh] w-full md:h-full rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1">
    <img
      className="object-cover object-center h-full w-full"
      src="\images\IMG_9831.JPG"
      alt="Profile"
    />
  </div>
</div>

          {/* BIO */}
          <div className="bg-[#e6e5e3] py-6 px-5 text-[#23444d] flex flex-col  h-1/2 w-full md:px-5 md:gap-3">
           
            <h1 className='pt-2 leading-tight pb-6 text-[2.6rem] tracking-wider font-bold md:text-[2.8rem]  ' style={{ fontFamily: '"Lobster Two", sans-serif'}}>Digital Studio Notion Template</h1>
            <h5 className='normal-case md:text-1xl md:w-[30.2rem]'>Streamline your creative process and organize your business with the Digital Studio Notion Template. This template is specifically designed for creators to organize their tasks, projects, finances, and goals all in one space.</h5>

               <div className=" items-start mt-5 flex gap-5 md:gap-16  ">

                <button className=" bg-[#23444d] text-white uppercase p-3.5 border-1 border-[#23444d] md:text-xs md:px-8 md:mt-6 md:py-5">Learn more</button>

                </div>


          </div>

      </div>


        {/* //Section 4 */}
        <div className=" bg-[#f2c166] flex flex-col items-center justify-center md:flex-row md:px-7 ">

        {/* Image */}
        
          <div className=" py-8 px-5 h-1/2 w-full flex items-center justify-center md:h-[100vh] ">
          
          <div className=" h-[38vh] w-full md:h-full">
            <img className='object-cover object-center h-full w-full ' src="https://images.unsplash.com/photo-1549499090-5fa12865059c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
          </div>
          </div>

          {/* BIO */}
          <div className="bg-[#f2c166]  py-6 px-5 text-[#5d613f] flex flex-col  h-1/2 w-full md:px-25 md:gap-3">
            
            <h1 className='py-3  text-[2.4rem] tracking-wider font-bold md:text-[2.8rem]' style={{ fontFamily: '"Lobster Two", sans-serif'}}>art studio essentials</h1>
            <h5 className='md:text-1xl '>As a full-time painter, Brooke has some essentials in her art studio that she can’t live without..</h5>

               <div className=" items-start mt-20 flex md:mt-10 ">

                <button className=" bg-[#5d613f] text-white uppercase p-3.5 border-1 border-[#5d613f] md:text-xs md:px-5 md:py-5 ">spruce up my studio</button>
            

                </div>


          </div>

      </div>


          {/* youtube section 2 */}

          <div>

            <YtEmbed2 />
          </div>



    </div>
  )
}

export default Forartist
