/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";


const HeroContent = () => {
  return (
   <div className="items-center w-screen h-screen p-4 m-auto md:justify-between md:container md:flex">
    <div>
      <h1 className="text-4xl font-semibold text-white md:text-7xl">
        Experience your <br />
        ultimate mobile <br />
        application
      </h1>
      <br />
      <h1 className="text-xs text-white md:text-xl">Get your blood tests delivered at let home collect sample <br />
      from the victory of the managements that supplies best <br />
      design system guidelines ever
      </h1>
      <div className="flex mt-4">
        <button className="px-4 py-2 bg-white rounded-full">Get Started</button>
        <div className="flex items-center">
          <Image className="ml-2" src='/images/watch.png' width={20} height={20} alt="watch"/>
          <span className="ml-2">Watch Video</span>
        </div>
      </div>
      <div className="flex mt-4">
        <p className="mr-3 text-xs text-white">Sponsored by:</p><img className="w-1/2" alt="combine" src='/images/combine.png'/>
      </div>
    </div>
    <div className="flex ml-20 mt-4 justify-center">
      <img src="/images/mockup.png" alt="mockup" />
    </div>
   </div>
  );
};

export default HeroContent;
