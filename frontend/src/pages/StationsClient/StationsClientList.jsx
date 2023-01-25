import React from "react";
import { useStations } from "../../hooks/useStations";
import { Navigate, useNavigate } from "react-router-dom";
import './StationsClientList.scss'

const StationsClientList = () => {
    const { stations } = useStations();
    const navigate = useNavigate();

    const StationCard = stations.map(item =>
        <div className="card" key={item.id} style={{ backgroundImage: `url(${item.image})` }}>
            <div className="content">
                <h2 className="title">{item.name}</h2>
                <p className="copy">Address: {item.address}</p>
                <p className="copy">Status: {item.status}</p>
                <button className="btn" onClick={() => {
                    navigate('/stations/' + item.slug)
                }
                }>Show Bikes</button>
            </div>
        </div>
    )

    return (
        <div className="stationsClientCard">
            <main className="page-content">
                {StationCard}
            </main>
        </div>
    )
}

export default StationsClientList;
