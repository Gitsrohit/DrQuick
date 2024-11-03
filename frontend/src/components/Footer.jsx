import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* --------left section-------- */}
        <div>
           <img className='mb-5 w-40' src={assets.logoo} alt="" />
           <p className='w-full mg:w-2/3 text-gray-600 leading-6'>DrQuick is your trusted partner for hassle-free doctor appointments and healthcare access. From finding specialists to booking consultations, we’re here to make managing your health simple and efficient. Connect with us for the latest updates, healthcare tips, and support. Your wellness is our priority—stay connected, stay healthy.</p>
        </div>
        {/* --------center section-------- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'> 
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* --------right section-------- */}
        <div>
         <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
         <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 62009 83787</li>
            <li>thissiderohit11@gmail.com</li>
         </ul>
        </div>
      </div>
      {/* ------- copyright text-------- */}
      <div>
        <hr />
        <p className='py-6 text-sm text-center'>Copyright 2024@ DrQuick - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
