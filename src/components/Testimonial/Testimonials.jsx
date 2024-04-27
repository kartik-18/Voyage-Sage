import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/a4.avif'
import ava02 from '../../assets/images/a2.jpg'
import ava03 from '../../assets/images/a3.jpg'
import ava04 from '../../assets/images/a5.jpg'
import ava05 from '../../assets/images/a6.jpg'

import './testimonial.css'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>I stumbled upon this travel advisor website while planning my dream vacation, and it was a game-changer! The recommendations were spot-on, and the tips saved me both time and money. Can't wait to use it again for my next adventure!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='imag' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Raj </h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>As a frequent traveler, I've used many travel advisory services, but none compare to the level of detail and personalized recommendations I found here. From hidden gems to insider tips, this site has become my go-to for all my travel planning needs.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Nandini </h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>I can't thank this travel advisor website enough for helping me plan the perfect getaway. The destination guides were incredibly informative, and the booking tips were invaluable. Highly recommend it to anyone looking to make their travel dreams a reality!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava05} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Ishita </h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>I've always been hesitant about planning trips on my own, but this travel advisor site made the process so easy and stress-free. The user-friendly interface, coupled with expert advice, ensured that my vacation was everything I hoped for and more. 5 stars all the way!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Rakesh </h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials