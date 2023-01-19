import React, { useEffect } from "react";
import('./StationsCreate.scss');
import StationsForm from "../../../components/Dashboard/Stations/StationsForm";
import { useStations } from "../../../hooks/useStations";
import { useParams } from "react-router-dom";

const StationsUpdate = () => {
    const { slug } = useParams();
    const { useUpdateStation, useOneStation, oneStation } = useStations();

    useEffect(() => {
        if (oneStation.slug !== '') {
            useOneStation(slug);
        }
    }, []);

    return (
        <div>
            <p>STATION UPDATE</p>
            <StationsForm SendData={(data) => useUpdateStation(slug, data)} station={oneStation} />
        </div>
    )
}

export default StationsUpdate;