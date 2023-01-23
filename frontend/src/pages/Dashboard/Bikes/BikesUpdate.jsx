import React, { useEffect } from "react";

import { useBikes } from "../../../hooks/useBikes";
import { useNavigate, useParams } from "react-router-dom";
import FormUpdate from "../../../components/Dashboard/Bikes/FormUpdate";

const BikesList = () => {
    const { slug } = useParams();
    const { updateBikes, getOneBike, oneBike } = useBikes(slug);

    useEffect(function () {
        getOneBike(slug);
    }, [])

    return (
        < FormUpdate oneBike={oneBike} key={oneBike.slug} updateBikes={updateBikes}></FormUpdate >
    );
}

export default BikesList;