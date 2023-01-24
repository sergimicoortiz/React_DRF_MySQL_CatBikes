import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import CaruselItem from "./caruselItem";
import './CaruselStations.scss';


const CaruselStations = () => {

    const data = [
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg', slug: 's' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg', slug: 's' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg', slug: 's' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg', slug: 's' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg', slug: 's' },
    ]

    const carusel_items = data.map((item, index) =>
        <SwiperSlide key={index}><CaruselItem data={item} /></SwiperSlide>)
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
                {carusel_items}
            </Swiper>
        </div>
    )
}

export default CaruselStations;