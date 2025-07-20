import React, { useState } from "react";

const YtEmbed2 = () => {
  const [play, setPlay] = useState(false);

  const videoId = "tMz2doQt1TY";

  return (
    <div className="flex flex-col items-center ">
      <div>
        <h1
          className="py-3  text-[2.4rem] tracking-wider font-bold md:text-[2.8rem] text-[#23434c] md:tracking-tight"
          style={{ fontFamily: '"Lobster Two", sans-serif' }}
        >
          Get inspired
        </h1>
      </div>

      <h5 className="text-[#23434c] normal-case text-center md:text-1xl md:w-[60rem]">
        Get inspired with tips and tricks for your creative business and explore
        the realities of being an entrepreneur on YouTube.
      </h5>

      <div className=" items-start mt-10 flex md:mt-10 ">
        <a
          href="https://www.youtube.com/@mystrispot/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#bb4714] text-white text-xs uppercase p-3.5 border-1 border-[#bb4714] md:text-xs md:px-5 md:py-4"
        >
          watch videos
        </a>
      </div>

      <div className="w-full my-10  aspect-video mx-auto px-5  overflow-hidden md:h-[80vh] md:p-15">
        {!play ? (
          <div
            onClick={() => setPlay(true)}
            className="relative w-full h-full cursor-pointer group"
          >
            {/*  Thumbnail for yt */}
            <img
              src={`/images/yt_thumbnail.jpg`}
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

export default YtEmbed2;
