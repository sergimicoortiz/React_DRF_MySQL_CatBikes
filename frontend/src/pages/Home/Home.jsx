import React from 'react';
import './Home.scss';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='test'>
            <p>HOME</p>
            <button onClick={() => navigate('/dashboard/stations')}>STATIONS</button>
        </div>
    )
}

export default Home;