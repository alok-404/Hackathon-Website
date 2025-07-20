// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';

// const InstaReelPlayer = () => {
//   const reels = [
//     'https://www.instagram.com/p/DMJx1Ehvcj2/', // Replace with real reel links
//     'https://www.instagram.com/p/DK_Tucbx5S3/',
//     'https://www.instagram.com/p/DL9IyqRxy1u/',
//   ];

//   const [current, setCurrent] = useState(0);
//   const reelRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

//     const playNextReel = () => {
//       tl.fromTo(
//         reelRef.current,
//         { scale: 0.8, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 1 }
//       ).to(
//         reelRef.current,
//         { x: '-100%', opacity: 0, duration: 1, delay: 3 },
//         '+=2'
//       );
//     };

//     const interval = setInterval(() => {
//       playNextReel();
//       setCurrent((prev) => (prev + 1) % reels.length);
//     }, 7000); // 7 seconds per reel

//     return () => clearInterval(interval);
//   }, [reels.length]);

//   return (
//     <div className="w-full h-[70vh] flex items-center justify-center bg-black relative overflow-hidden">
//       <div ref={reelRef} className="w-[300px] h-[530px]">
//         <iframe
//           src={`${reels[current]}embed`}
//           width="100%"
//           height="100%"
//           allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//           frameBorder="0"
//           scrolling="no"
//           allowFullScreen
//           className="rounded-xl"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default InstaReelPlayer;
