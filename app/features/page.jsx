import React from "react";

const Features = () => {
  return (
    <div className="justify-between m-auto mb-20 bg-white md:container md:flex">
      <div className="flex justify-center md:block">
        <img
          className="w-1/2 md:w-full"
          src="/images/Group8.png"
          alt="group8"
        />
      </div>
      <div>
        <div className="text-center md:text-left">
          <h6 className="text-sm font-bold text-blue-900">CORE FEATURES</h6>
          <h1 className="text-2xl font-semibold md:text-5xl">
            Smart Jackpots <br />
            that you may love this <br />
            anytime & anywhere
          </h1>
        </div>
        <div className="p-4 bg-white rounded-md shadow-lg md:flex">
            <div className="flex justify-center md:justify-items-start">
                <img className="w-20 h-20" src="/images/Group1.png" alt="group1" />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-base font-bold">Smart Features</h1> <br />
                <p>
                    Get your blood tests delivered at let home collect <br />
                    sample from the victory of the managements. <br />
                    your blood tests.
                </p>
            </div>
        </div>
        <br />
        <div className="p-4 bg-white rounded-md shadow-lg md:flex">
            <div className="flex justify-center md:justify-items-start">
                <img className="w-20 h-20" src="/images/Group2.png" alt="group2" />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-base font-bold">Secure Contents</h1> <br />
                <p>
                    Get your blood tests delivered at let home collect <br />
                    sample from the victory of the managements. <br />
                    your blood tests.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
