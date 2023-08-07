import React from 'react'

const Payment = () => {
  return (
    <div className='m-auto roundedBg paymentBackground md:container'>
        <div className='md:flex md:justify-between'>
            <div>
                <img src="/images/sellphone.png" alt="selphone" />
            </div>
            <div className='text-center md:text-left'>
                <h6 className='text-sm font-semibold text-blue-900'>CORE FEATURES</h6>
                <br />
                <h1 className='text-lg font-semibold text-black md:text-2xl'>
                    Secure Payment <br />
                    Transaction System <br />
                    with #1 Ranking
                </h1>
                <br />
                <p className='text-sm text-blue-900'>
                    Get your tests delivered at home collect sample <br />
                    from the victory of the managements that supplies <br />
                    best design system guidelines ever. Get your tests <br />
                    delivered at let home collect sample.
                </p>
                <br />
                <button className='px-4 py-2 text-sm text-white rounded-full bg-blue-950'>LearnMore</button>
            </div>
        </div>        
    </div>
  )
}

export default Payment