import React from "react";

const CaruselItem = ({ data = {
    img: '',
    legend: ''
} }) => {
    return (
        <div className="carusel_item">
            <img src={data.img} />
        </div>
    )
}

export default CaruselItem;