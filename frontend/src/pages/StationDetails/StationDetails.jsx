import React, { useEffect } from "react";
import './StationDetails.scss';
import { useParams } from "react-router-dom";
import { useStations } from "../../hooks/useStations";
import { useSlots } from '../../hooks/useSlots';

const StationDetails = () => {
    const { slug } = useParams();
    const { oneStation, useOneStation } = useStations();
    const { slots } = useSlots();

    useEffect(function () {
        useOneStation(slug,true);
    }, [])

    return (
        <div>
            <p>{JSON.stringify(oneStation)}</p>
            <p>{JSON.stringify(slots)}</p>
            <p>StationDetails</p>
        </div>
    )
}

export default StationDetails