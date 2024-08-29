import React from 'react';
import { useState, useRef } from 'react';

const JourneyVideoMontageComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Initialize with null
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePausePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative flex rounded-3xl overflow-hidden shadow-lg max-w-3xl m-auto">
      <video
        ref={videoRef}
        className="w-full h-auto"
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline
      >
        <source src="/journey.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-2 m-2">
            <button
              className="bg-black bg-opacity-50 text-white px-2 py-2 rounded-full shadow "
              onClick={handlePausePlay}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
         


    </div>
  );
};

export default JourneyVideoMontageComponent;
