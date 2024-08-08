import React from 'react';

const Vedios = () => {
  return (
    <div className="relative w-full h-[900px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/vedios/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <span className="absolute inset-0 flex items-center justify-center text-slate-100 text-4xl font-bold z-10">
        Offer Available
      </span>
    </div>
  );
};

export default Vedios;
