import React from "react";
import { Marker } from "react-map-gl";
import { useNavigate } from "react-router-dom";

const MarkerStation = ({ station = {
    'slug': '',
    'name': '',
    'status': '',
    'image': '',
    'longitude': 0,
    'latitude': 0,
    'total_slots': 0,
    'total_bikes': 0,

} }) => {
    const navigate = useNavigate();

    return (
        <div>
            <Marker longitude={station.longitude} latitude={station.latitude} anchor="top" onClick={() => navigate('/stations/' + station.slug)} >
            </Marker>
        </div>
    )
}

export default MarkerStation