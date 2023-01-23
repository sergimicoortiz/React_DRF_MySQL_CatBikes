import React, { useEffect } from "react";

import { useBikes } from "../../../hooks/useBikes";
import { useNavigate, useParams } from "react-router-dom";
import FormUpdate from "../../../components/Dashboard/Bikes/FormUpdate";

const BikesList = () => {
    const { slug } = useParams();
    const { bikes, updateBikes } = useBikes();

    const getData = bikes.filter(item => {
        return item.slug == slug
    })
    console.log(getData[0].id)

    return (
        <FormUpdate updateBikes={getData[0]}></FormUpdate>
    );
}

export default BikesList;