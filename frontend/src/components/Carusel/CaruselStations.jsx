import React from "react";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import CaruselItem from "./caruselItem";
import './CaruselStations.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';


const CaruselStations = () => {

    const data = [
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg' },
    ]

    const carusel_items = data.map((item, index) =>
        <Slide index={index} key={index}><CaruselItem data={item}/></Slide>)

    return (
        <div>
            <CarouselProvider
                className="carusel"
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                touchEnabled={true}
                infinite={true}
                interval={200}
                dragEnabled={true}
                totalSlides={3}>
                <Slider>
                    {carusel_items}
                </Slider>
            </CarouselProvider>
        </div>
    )
}

export default CaruselStations;