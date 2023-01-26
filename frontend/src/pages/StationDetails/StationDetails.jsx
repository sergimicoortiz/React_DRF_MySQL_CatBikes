import React, { useEffect } from "react";
import '../StationsClient/StationsClientList.scss';
import { useParams } from "react-router-dom";
import { useStations } from "../../hooks/useStations";
import { useSlots } from '../../hooks/useSlots';
import goodImage from '../../img/SlotEmpty.png';
import usedImage from '../../img/SlotUsed.png';
import maintenanceImage from '../../img/SlotMaintenance.png';

const StationDetails = () => {
    const { slug } = useParams();
    const { oneStation, useOneStation, slotStation } = useStations();

    useEffect(function () {
        useOneStation(slug);
    }, [])

    let SlotCard = null;
    if (oneStation.id) {
        SlotCard = slotStation.map(item => {
            const img = item.status === 'used' ? goodImage : item.status === 'unused' ? usedImage : maintenanceImage;
            return (<div className="card" key={item.id} style={{ backgroundImage: `url(${img})` }}>
                <div className="content">
                    <p className="copy">Status: {item.status}</p>
                </div>
            </div>)
        }
        )
    } else {
        SlotCard = <p>No slots available</p>
    }

    return (
        <div className="stationsClientCard">
            <main className="page-content">
                {SlotCard}
            </main>
        </div>
    )
}

export default StationDetails