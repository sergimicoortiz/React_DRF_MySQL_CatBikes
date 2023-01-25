import React, { useEffect } from "react";
import '../StationsClient/StationsClientList.scss';
import { useParams } from "react-router-dom";
import { useStations } from "../../hooks/useStations";
import { useSlots } from '../../hooks/useSlots';

const StationDetails = () => {
    const { slug } = useParams();
    const { oneStation, useOneStation, slotStation } = useStations();

    useEffect(function () {
        useOneStation(slug);
    }, [])

    console.log(slotStation)

    const SlotCard = slotStation.map(item =>
        <div className="card" key={item.id} style={{ backgroundImage: `url(${"https://www.shutterstock.com/image-vector/colorful-simple-flat-pixel-art-260nw-2025138827.jpg"})` }}>
            <div className="content">
                <p className="copy">Status: {item.status}</p>
            </div>
        </div>
    )

    return (
        <div className="stationsClientCard">
            <main className="page-content">
                {SlotCard}
            </main>
        </div>
        // <div>
        //     <p>{JSON.stringify(oneStation)}</p>
        //     <p>{JSON.stringify(slotStation)}</p>
        //     <p>StationDetails</p>
        // </div>
    )
}

export default StationDetails