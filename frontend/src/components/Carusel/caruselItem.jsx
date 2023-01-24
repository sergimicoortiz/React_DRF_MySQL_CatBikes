import React from "react";
import propTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const CaruselItem = ({ data = {
    img: '',
    slug: ''
} }) => {
    const navigate = useNavigate();

    return (
        <div className="carusel_item">
            <img src={data.img} onClick={() => console.log(data.slug)} />
        </div>
    )
}

CaruselItem.propTypes = {
    data: propTypes.shape({
        'img': propTypes.string.isRequired,
        'slug': propTypes.string.isRequired
    })
}

export default CaruselItem;