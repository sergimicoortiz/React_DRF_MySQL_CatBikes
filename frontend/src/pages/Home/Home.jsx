import React from 'react';
import './Home.scss';
import CaruselStations from '../../components/Carusel/CaruselStations';
import MapStations from '../../components/MapStations/MapStations';

const Home = () => {
    return (
        <div>
            <MapStations />
            <CaruselStations />
        </div>
    )
}

export default Home;