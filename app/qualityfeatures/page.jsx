import React from 'react'

const QualityFeatures = () => {

    const img1 = "/images/featureicon1.png"
    const img2 = "/images/featureicon2.png"
    const img3 = "/images/featureicon3.png"
    const img4 = "/images/featureicon4.png"
    const img5 = "/images/featureicon5.png"
    const img6 = "/images/featureicon6.png"

    const heading1 = "Smart Features"
    const heading2 = "Fast Performance"
    const heading3 = "Unlimited Content"
    const heading4 = "Ultimate Customization"
    const heading5 = "Boost Productivity"
    const heading6 = "Customer Support"



    const imgArray = [
        {img:img1,heading:heading1},
        {img:img2,heading:heading2},
        {img:img3,heading:heading3},
        {img:img4,heading:heading4},
        {img:img5,heading:heading5},
        {img:img6,heading:heading6},
    ]


  return (
    <div className='mb-20 bg-white'>
        <div className='text-center'>
            <h6 className='text-sm font-bold text-blue-950'>QUALITY FEATURES</h6>
            <h1 className='text-lg font-semibold'>Meet exciting feature of app</h1>
        </div>
        <div className='grid grid-cols-1 gap-4 p-4 mt-10 md:grid-cols-3'>
            {
                 imgArray.map((item,index)=>(
                    <div key={index} className="p-4 bg-white rounded-md shadow-lg md:flex">
                    <div className="flex justify-center md:justify-items-start">
                        <img className="w-20 h-20" src={item.img} alt="group1" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-base font-bold">{item.heading}</h1> <br />
                        <p>
                            Get your blood tests delivered at let home collect <br />
                            sample from the victory of the managements. <br />
                            your blood tests.
                        </p>
                    </div>
                </div>
                 ))
            }
        </div>
    </div>
  )
}

export default QualityFeatures