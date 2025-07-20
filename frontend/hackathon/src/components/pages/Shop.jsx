import React from 'react'

const Shop = () => {

  const shopItems = [
  {
    label: "Oil Painting",
    image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Canvas Art",
    image: "https://i.pinimg.com/736x/12/61/32/12613245717044a357ac7ad30c1c8444.jpg",
  },
  {
    label: "Wall Frame",
    image: "https://i.pinimg.com/736x/fb/b4/81/fbb4816178fcfde5ae1c9472a183dbb2.jpg",
  },
  {
    label: "Prints",
    image: "https://i.pinimg.com/736x/c1/18/72/c118724dcce23f78974551ffeb9a873f.jpg",
  },
  {
    label: "Sketch Art",
    image: "https://i.pinimg.com/736x/13/92/e6/1392e61577553757ba940ca4fef0c687.jpg",
  },
  {
    label: "Custom Order",
    image: "https://i.pinimg.com/736x/0c/88/6b/0c886b936ff44ac5df7e90c047b8f923.jpg",
  },
   {
    label: "Key Chain",
    image: "https://i.pinimg.com/1200x/0b/fe/a2/0bfea2e2133a90e6dcc9dffb6f56ae67.jpg",
  },
  
];
  return (
   <div className="h-full pt-40 overflow-x-hidden bg-[#e6e5e3] uppercase">

      
      {/* 🔶 Hero Section with background image (80% of screen) */}
      <div
        className="h-[70vh] p-10 bg-[#e6e5e3]  bg-center md:h-[50vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
           backgroundPosition: 'top',

        }}
      >
        <div className="h-full flex-col flex items-center justify-center text-white text-5xl font-bold">
         <h1>what you want?</h1>
        <div className="flex flex-row gap-5 mt-5">
           <button className="bg-trasnparent text-3xl px-3 py-2.5 border-black border-1 font-thin">EXPLORE</button>
                   <button className="bg-trasnparent text-3xl px-3 py-2.5 border-black border-1 font-thin">FOR ARTIST</button>

        </div>
        </div>
      </div>

      {/* 🔽 Stacked Sections Below */}
  

  
  <div className="uppercase bg-[#e6e5e3] grid grid-cols-2 gap-4 p-5 md:grid-cols-3 md:pt-20">
  {shopItems.map((item, index) => (
    <div className=''>
          <div
      key={index}
      className="bg-[#e6e5e3] rounded-md aspect-square overflow-hidden flex flex-col items-center md:rounded-none"
    >
      <img
        src={item.image}
        alt={item.label}
        className="w-full h-full  object-cover rounded-md md:rounded-none"
      />   
    </div>
      <p className="text-base tracking-widest text-[#23444d] mt-2 " style={{ fontFamily: '"Lobster", sans-serif'}}>{item.label}</p>

    </div>
  ))}
</div>

{/* </div> */}




        {/* Section 2 Thoda Bahut Details */}

      <div className="h-screen bg-red-900 flex flex-col items-center justify-center">
        
          aection 2
      </div>
      <div className="h-screen bg-amber-300 flex items-center justify-center">Section 3</div>

      
      
    </div>

  )
}

export default Shop
