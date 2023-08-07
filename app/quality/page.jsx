import React from "react";

const Quality = () => {
  return (
    <div className="m-auto mb-20 md:container">
      <div className="mb-4 text-center">
        <h6 className="font-semibold text-blue-900">QUALITY FEATURES</h6>
        <h1 className="font-semibold md:text-4xl">Meet exciting feature of app</h1>
      </div>
      <div className="md:flex md:justify-around">
        <div className="flex justify-center">
          <div className="justify-center">
            <div className="flex justify-center w-full">
              <img className="w-20 mb-4 " src="/images/icon1.png" alt="icon1" />
            </div>
            <h1 className="font-semibold text-center">Vector Editing</h1>
            <p className="text-sm text-center">
              Get your blood tests delivered at
              <br />
              home collect a sample from the <br />
              your blood tests
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center w-full">
              {" "}
              <img className="w-20" src="/images/icon2.png" alt="icon2" />
            </div>
            <h1 className="font-semibold text-center">Customize & Monitoring</h1>
            <p className="text-sm text-center">
              Get your blood tests delivered at
              <br />
              home collect a sample from the <br />
              your blood tests
            </p>
          </div>
        </div>
        <div className="flex justify-center ">
          <div>
            <div className="flex justify-center w-full">
              {" "}
              <img className="w-20" src="/images/icon3.png" alt="icon3" />
            </div>
            <h1 className="font-semibold text-center">Quality & short-period</h1>
            <p className="text-sm text-center">
              Get your blood tests delivered at
              <br />
              home collect a sample from the <br />
              your blood tests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
