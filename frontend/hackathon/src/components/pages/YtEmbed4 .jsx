import React, { useState } from "react";

const YtEmbed4 = () => {
  const [play, setPlay] = useState(false);

  const videoId = "Jv7bL1cqNlw";

  return (
    <div className="flex flex-col items-center ">


    
      <div className="w-full my-10  aspect-video mx-auto overflow-hidden md:h-[90vh] ">
        {!play ? (
          <div
            onClick={() => setPlay(true)}
            className="relative w-full h-full cursor-pointer group"
          >
            {/*  Thumbnail for yt */}
            <img
              src={`/images/DIY SHOP IMG.jpg`}
        
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />

            {/* 👇 Play Button Overlay */}
            <div className="absolute inset-0  cursor-pointer  flex items-center justify-center">
              {/* <div className="w-15 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 md:w-25 cursor-pointer"> */}

              <img
                className="w-15 h-15 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 md:w-25 md:h-25  cursor-pointer"
                src="https://cdn.iconscout.com/icon/free/png-512/free-youtube-icon-download-in-svg-png-gif-file-formats--logo-play-video-audio-flat-pack-entertainment-icons-1342747.png?f=webp&w=512"
                alt=""
              />
            </div>

            {/* </div> */}
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>



  );
};

export default YtEmbed4;
