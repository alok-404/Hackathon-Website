import React, { useState } from "react";

const YTOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "Xv0wrjVCT_U"; // Replace with your actual video ID

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 border border-black rounded bg-white text-black"
      >
        A Week in My Life as a Full-Time Artist
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center inset-0 bg-black/50 bg-opacity-80 px-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default YTOverlay;
