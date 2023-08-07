import React from "react";

const About = () => {
  return (
    <div className="m-auto bg-white md:pl-36 md:container">
      <hr />
      <br />
      <div className="grid md:grid-cols-4 ">
        <div className="text-center md:text-left">
          <h1 className="font-semibold">About Us</h1>
          <br />

          <p>
            {" "}
            <a className="text-blue-900" href="#">
              Support Center
            </a>
          </p>
          <p>
            <a className="text-blue-900" href="#">
              Customer Support
            </a>
          </p>
          <p>
            {" "}
            <a className="text-blue-900" href="#">
              About Us
            </a>
          </p>
          <p>
            {" "}
            <a className="text-blue-900" href="#">
              Copyright
            </a>
          </p>
          <p>
            <a className="text-blue-900" href="#">
              Popular Campaign
            </a>
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-semibold">Our Information</h1>
          <br />

          <p>
            <a className="text-blue-900" href="#">
              Return Policy
            </a>
          </p>
          <p>
            {" "}
            <a className="text-blue-900" href="#">
              Privacy Policy
            </a>
          </p>
          <p>
            {" "}
            <a className="text-blue-900" href="#">
              Terms & Condition
            </a>
          </p>
          <a className="text-blue-900" href="#">
            Site Map
          </a>
          <p>
            <a className="text-blue-900" href="#">
              Store Hours
            </a>
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-semibold">My Account</h1>
          <br />

          <p>
            {" "}
            <a className="text-blue-900" href="#">
              Press inquires
            </a>
          </p>
          <p>
            {" "}
            <a className="text-blue-900" href="#">
              Social media
            </a>
          </p>
          <p>
            <a className="text-blue-900" href="#">
              directories
            </a>
          </p>
          <p>
            {" "}
            <a className="text-blue-900" href="#">
              Images & B-roll
            </a>
          </p>
          <p>
            <a className="text-blue-900" href="#">
              Permissions
            </a>
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-semibold">Policy</h1>
          <br />

          <p>
            <a className="text-blue-900" href="#">
              Application security
            </a>
          </p>
          <p>
            <a className="text-blue-900" href="#">
              Software principles
            </a>
          </p>
          <p>
            <a className="text-blue-900" href="#">
              Unwanted software policy
            </a>
          </p>
          <p>
            {" "}
            <a className="text-blue-900" href="#">
              Responsible supply chain
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
