import React from "react";

const Functions = () => {
  const one = "/images/one.png";
  const two = "/images/two.png";
  const three = "/images/three.png";
  const four = "/images/four.png";

  const arrow1 = "/images/arrow1.png";
  const arrow2 = "/images/arrow2.png";
  const arrow3 = "/images/arrow3.png";

  const numArrow = [
    { num: one, arrow: arrow1, title: "Set disbursement instructions" },
    {
      num: two,
      arrow: arrow2,
      title: "Assembly retrieves funds from your account ",
    },
    { num: three, arrow: arrow3, title: "Assembly initiates disbursement" },
    { num: four, arrow: arrow2, title: "Customer receives funds payment" },
  ];

  return (
    <div className="relative p-4 blueColor">
      <div className="md:container m-auto">
        <br />
        <br />
        <br />
        <div>
          <div className="text-center">
            <h6 className="md:text-sm text-xs  text-white">
              WHATS THE FUNCTION
            </h6>
            <h1 className="text-semibold text-white md:text-2xl">
              Let`s see how it works
            </h1>
          </div>
          <br />
          <br />
          <br />
          <div className="grid justify-center md:grid-cols-4">
            {numArrow.map((item, index) => (
              <div key={index}>
                <div className="flex">
                  <div>
                    <img src={item.num} alt="number" />
                  </div>
                  <div>
                    <img src={item.arrow} alt="arrow" />
                  </div>
                </div>
                <br />
                <h4 className="font-semi-bold text-white text-xl">{item.title}</h4>
                <br />
                <p className="text-white text-xs">
                  Get your blood tests delivered at <br />
                  home collect a sample from the <br />
                  your blood tests.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-80">
        <img className=" h-56" src="/images/Rectangle1.png" alt="rectangle1" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img
          className="w-80 h-96"
          src="/images/Rectangle2.png"
          alt="rectangle2"
        />
      </div>
      <div className="absolute top-14 right-0">
        <img className="h-96" src="/images/Rectangle3.png" alt="rectangle3" />
      </div>
      <div className="absolute bottom-0 right-32">
        <img className="h-40" src="/images/Rectangle4.png" alt="rectangle4" />
      </div>
    </div>
  );
};

export default Functions;
