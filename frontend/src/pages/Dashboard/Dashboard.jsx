import React from "react";
import './Dashboard.scss';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const redirects = {
        stations: () => navigate('/dashboard/stations'),
        bikes: () => navigate('/dashboard/bikes'),
    }
    return (
        <div className="frame">
            <button className="custom-btn btn-3" onClick={() => redirects.stations()}><span>List Stations</span></button>
            <button className="custom-btn btn-3" onClick={() => redirects.bikes()}><span>List Bikes</span></button>
        </div>
    )
}

export default Dashboard