'use client';
import React from 'react';
import Link from 'next/link';

interface SeeMoreButtonProps {
  destination: string; // The URL or path to navigate to
}

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ destination }) => {
  return (
    <Link href={destination} passHref>
      <button
        className="relative flex items-center justify-center text-[#03e9f4] px-6 py-3 rounded-lg overflow-hidden hover:bg-[#03e9f4] hover:text-black transition-shadow duration-300 ease-in-out"
        style={{
          boxShadow: "0 0 5px #03e9f4",

          WebkitBoxReflect: "below 1px linear-gradient(transparent, #0005)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 5px #03e9f4";
        }}
      >
        <span className="relative text-xl font-[800] z-10">See More</span>
        <span className="absolute inset-0 border-2 rounded-lg animate-border"></span>

        {/* New span for the animated line */}
        <span
          className="absolute top-0 left-0 w-full h-[1px] bg-[#03e9f4] animate-line"
        ></span>
      </button>

      <style jsx>{`
        @keyframes lineAnimation {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-line {
          animation: lineAnimation 1s infinite linear;
        }
      `}</style>
    </Link>
  );
};

export default SeeMoreButton;



