
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';


import { Rating } from '@mui/material';
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
         fetch("https://bistro-boss-server-projects-aroi6m9ee-infan11s-projects.vercel.app/review")
         .then(res => res.json())
         .then(data => setReviews(data))
    },[])
    return (
        <div>
             <div className='text-center mt-4  '>
            <p className='text-yellow-300  mb-2'>---What Our Clients Say---</p>
            <h2 className='font-bold text-2xl md:w-4/12 mx-auto border-y-2 mb-8 ' >TESTIMONIALS</h2>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
            {
                reviews.map(review => <SwiperSlide key={review._id}>
      
                    <div className='flex flex-col items-center mx-24 my-16'>
                        
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    />
                        
                        <p className='py-8 text-center'>{review.details}</p>
                        <p className='text-orange-400'>{review.name}</p>
                    </div>
                </SwiperSlide>)
            }
       
      </Swiper>
        </div>
    );
};

export default Review;