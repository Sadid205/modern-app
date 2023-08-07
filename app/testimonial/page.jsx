import React from "react";

const Testimonial = () => {
  const user1 = "/images/Ellipse.png";
  const user2 = "/images/Ellipse1.png";
  const user3 = "/images/Ellipse2.png";

  const rating = "/images/rating.png";

  const userArray = [
    { user: user1, rating: rating },
    { user: user2, rating: rating },
    { user: user3, rating: rating },
  ];

  return (
    <div className="m-auto bg-white md:container">
      <div>
        <br />
        <br />
        <div className="text-center">
          <h6 className="text-sm font-semibold text-blue-900">TESTIMONIAL</h6>
          <h1 className="text-lg font-semibold">Meet Client Satisfaction</h1>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-3">
          {userArray.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
              <div>
                {" "}
                <img src={item.rating} alt="rating" />{" "}
              </div>
              <br />
              <h1 className="font-semibold">Modern look & trending design</h1>
              <br />
              <p>Get working experience to work with this <br />
                  amazing team & in future want to work <br />
                  together for bright future projects and also <br />
                  make deposit to freelancer.  
              </p>
              <br />
              <div className="flex">
                <div>
                    <img src={item.user} alt="user" />
                </div>
                <div className="ml-4">
                    <h1 className="font-semibold">Denny Hilguston</h1>
                    <a className="text-blue-500" href="#">@denny.hil</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div><img src="/images/slider.png" alt="slider" /></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
