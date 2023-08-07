import React from "react";

const Question = () => {
  return (
    <div className="m-auto bg-white md:container">
        <br />
      <div className="text-center">
        <h6 className="text-sm text-blue-900">FREQUENT QUESTION</h6>
        <h1 className="text-lg font-semibold">Do you have any question</h1>
      </div>
      <br />
      <br />
      <div className="flex justify-center">
        <div className="p-4">
          <div className="flex py-4">
            <span>
              <img src="/images/plus.png" alt="plus" />
            </span>
            <p className="ml-2 font-semibold">How to connect with riders emergency ?</p>
          </div>
          <hr />
          <div className="flex py-4">
            <span>
              <img src="/images/plus.png" alt="plus" />
            </span>
            <p className="ml-2 font-semibold">App installation failed, how to update system information?</p>
          </div>
          <hr />
          <div className="flex py-4">
            <span>
              <img src="/images/minus.png" alt="minus" />
            </span>
            <p className="ml-2"><span className="font-semibold">Website response taking time, how to improve? </span>
                <br />
                <br />
                Get blood tests delivered at the home collect a sample from management news. Get your <br />
                blood tests delivered at the home collect a sample from management news. Get your blood <br />
                tests delivered at the home collect a sample from management news. Get your blood tests <br />
                delivered at the home.
            </p> 
          </div>
          <hr />
          <div className="flex py-4">
            <span>
              <img src="/images/minus.png" alt="minus" />
            </span>
            <p className="ml-2 font-semibold">New update fixed all bug and issues</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Question;
