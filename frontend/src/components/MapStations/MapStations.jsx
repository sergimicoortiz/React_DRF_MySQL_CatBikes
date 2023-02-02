import React, { useState } from "react";
import secrets from "../../secrets";
import Map, { GeolocateControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './MapStation.scss';
const MapStations = () => {
    return (
        <div className="map">
            <Map
                mapboxAccessToken={secrets.MAP_TOKEN}
                initialViewState={{
                    longitude: -0.603908,
                    latitude: 38.822944,
                    zoom: 14
                }}
                style={{ width: 800, height: 500 }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            />
        </div>
    )
}

export default MapStations;