import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const ForArtisti = ({onNavigate}) => {

  const gsapRef = useRef();


  useEffect(() => {
    gsap.from(gsapRef.current, {
      scale: 1.2,
      duration: 1,
    });
  }, []);

 const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);


 
  return (
    <div className='text-black w-full h-full  '>

      {isMobile ? (
        // 🌟 Mobile Content
        <div className='flex flex-col gap-4'>
            <div
            onClick={() => onNavigate('/Forartist')}
            className='text-lg font-bold cursor-pointer'
          >
            For Artist
          </div>
          <h3 className='text-left'>Digital studio notion template</h3>
          <h3 className='text-left'>Art studio essential</h3>
       
        </div>
      ) : (
        // 💻 Desktop Content
        <div className='grid grid-cols-2 border-1    h-full  overflow-hidden '>

          <div className='bg-white uppercase flex flex-row '>

              <div className='bg-white py-5 w-1/2'>

              <h1  className='mx-3 px-3 w-50 hover:border-b-2  py-1  md:my-5' style={{ fontFamily: '"Lobster Two", sans-serif' }}>Digital studio notion <br />template</h1>
              </div>

              <hr />

              <div className='flex flex-col justify-start  py-5 w-1/2 bg-white'>

                 <div className="w-full md:my-5 md:border-l-1 md:border-[#23444d] md:h-full ">
                <h1
                className=" hover:border-b-2 mx-3 w-30 text-center px-3 py-1 "
                style={{ fontFamily: '"Lobster Two", sans-serif' }}
              >
                art studio essentials
              </h1>
              <br />

             
              </div>
            </div>
          </div>

          <div className='h-full bg-white'>
            <img
            ref={gsapRef}
            className='object-fit h-full w-full' src="https://images.unsplash.com/photo-1544365789-5579c3a21e19?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      )}

    </div>
  );
};
export default ForArtisti;
