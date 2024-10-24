// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
//import Ratings
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err));
    }, [])

    return (
        <section className="my-20
        ">
            <SectionTitle
                subHeading="What Our Clients Say"
                heading="Testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="m-24 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-4'>{review.details}</p>
                            <h3 className="text-2xl font-medium text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;