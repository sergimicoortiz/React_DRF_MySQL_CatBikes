import React from 'react';
import './Home.scss';
import CaruselStations from '../../components/Carusel/CaruselStations';
import InfiniteScrollStations from '../../components/InfiniteScrollStations/InfiniteScrollStations';

const Home = () => {
    return (
        <div>
            <CaruselStations />
            <InfiniteScrollStations />
        </div>
    )
}

export default Home;