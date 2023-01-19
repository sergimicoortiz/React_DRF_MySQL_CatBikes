import React from "react";
import('./StationsCreate.scss');
import StationForm from "../../../components/Dashboard/Stations/StationsForm";
import { useStations } from "../../../hooks/useStations";

const StationsCreate = () => {
    const { useCreateStation } = useStations();
    return (
        <div>
            <p>STATION CREATE</p>
            <StationForm SendData={(data) => useCreateStation(data)} />
        </div>
    )
}

export default StationsCreate;