import React from "react";

import { useBikes } from "../../../hooks/useBikes";
import { useNavigate } from "react-router-dom";
import FormCreate from "../../../components/Dashboard/Bikes/FormCreate";

const BikesList = () => {
    const { createBike } = useBikes();
    const navigate = useNavigate();

    return (
        <div>
            Create
            <FormCreate createBike={createBike}></FormCreate>
        </div>
    );
}

export default BikesList;