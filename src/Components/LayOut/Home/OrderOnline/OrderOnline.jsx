import SectionTitle from "../../../Shared/SectionTitle";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import imageA from"../../../../../../bistro-boss-restaurant-resources/assets/home/slide1.jpg"
import imageB from"../../../../../../bistro-boss-restaurant-resources/assets/home/slide2.jpg"
import imageC from"../../../../../../bistro-boss-restaurant-resources/assets/home/slide3.jpg"
import imageD from"../../../../../../bistro-boss-restaurant-resources/assets/home/slide4.jpg"
import imageE from"../../../../../../bistro-boss-restaurant-resources/assets/home/slide5.jpg"
import imageF from"../../../../../../bistro-boss-restaurant-resources/assets/home/slide1.jpg"
import imageG from"../../../../../../bistro-boss-restaurant-resources/assets/home/slide2.jpg"
const OrderOnline = () => {
    return (
        <div >
          <div  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <SectionTitle heading={"---From 11:00am to 10:00pm---"} subHeading={"ORDER ONLINE"}></SectionTitle>

          </div>
            <div data-aos="flip-up">
            <section className="w-1/2 mx-auto">
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={imageA} alt="Unavavilable Food" /><h2 className="font-[Cinzel] text-xl text-red-700 font-bold text-center -mt-10 relative ">Salad</h2></SwiperSlide>
        <SwiperSlide><img src={imageB} alt="Unavavilable Food" /> <h2 className="font-[Cinzel] text-xl text-red-700 font-bold text-center -mt-10 relative ">Pizza</h2></SwiperSlide>
        <SwiperSlide><img src={imageC} alt="Unavavilable Food" /><h2 className="font-[Cinzel] text-xl text-red-700 font-bold text-center -mt-10 relative ">Soup</h2></SwiperSlide>
        <SwiperSlide><img src={imageD} alt="Unavavilable Food" /><h2 className="font-[Cinzel] text-xl text-red-700 font-bold text-center -mt-10 relative ">Cake</h2></SwiperSlide>
        <SwiperSlide><img src={imageE} alt="Unavavilable Food" /><h2 className="font-[Cinzel] text-xl text-red-700 font-bold text-center -mt-10 relative ">Salad</h2></SwiperSlide>
        <SwiperSlide><img src={imageF} alt="Unavavilable Food" /><h2 className="font-[Cinzel] text-xl text-red-700 font-bold text-center -mt-10 relative ">Salad</h2></SwiperSlide>
        <SwiperSlide><img src={imageG} alt="Unavavilable Food" /><h2 className="font-[Cinzel] text-xl text-red-700 font-bold text-center -mt-10 relative ">Pizza</h2></SwiperSlide>
       
       
      </Swiper>
            </section>
            </div>
        </div>
    );
};

export default OrderOnline;