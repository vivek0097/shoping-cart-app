import React from 'react'
import './disclamer.css'


 const Disclamer = () => {
  return (
    <div className='container disclamer-ct'>
        <h2 className='mb-5 dc-heading'>Our Guide to Buyers</h2>
        <div className='text-disclamer  mb-5'>
        <p className='mb-4 text-desc '><span className='circle px-lg-2 ps-2 '> 1 </span>Do not share any sensitive information such as payment methods, address or any personal details  </p>
        <p className='mb-4 text-desc' ><span className='circle px-lg-2 ps-2'> 2 </span>Do not share any sensitive information such as payment methods, address or any personal details  </p>
        <p className='mb-4 text-desc'><span className='circle px-lg-2 ps-2'> 3 </span>Do not share any sensitive information such as payment methods, address or any personal details  </p>
    </div>
    </div>
  )
}
export default Disclamer;