import React, { useEffect } from "react";
import '../StationsClient/StationsClientList.scss';
import { useParams } from "react-router-dom";
import { useStations } from "../../hooks/useStations";
import { useSlots } from '../../hooks/useSlots';
import goodImage from '../../img/SlotEmpty.png';
import usedImage from '../../img/SlotUsed.png';
import maintenanceImage from '../../img/SlotMaintenance.png';
import { toast } from 'react-toastify'
import { useRent } from "../../hooks/useRent";
import { useNavigate } from "react-router-dom";


const StationDetails = () => {
    const { slug } = useParams();
    const { oneStation, useOneStation, slotStation } = useStations();
    const { setSlots } = useSlots();
    const { rentBike } = useRent();
    const navigate = useNavigate();


    useEffect(function () {
        useOneStation(slug);
    }, [setSlots])

    const rentId = (data) => {
        if (localStorage.getItem("token")) {
            if (data.status == 'used') {
                rentBike(data);
                toast.success("You rent a Bike, thanks you")
                setTimeout(() => {
                    navigate("/home")
                    window.location.reload()
                }, 1000);

            } else {
                console.log("else");
            }
        } else {
            toast.error("You must be logged")
            setTimeout(() => {
                navigate("/login")
            }, 1000);
        }
    }

    let SlotCard = null;
    if (slotStation.length > 0) {
        SlotCard = slotStation.map(item => {
            const img = item.status === 'used' ? goodImage : item.status === 'unused' ? usedImage : maintenanceImage;
            return (<div className="card" key={item.id} style={{ backgroundImage: `url(${img})` }}>
                <div className="content">
                    <p className="copy">Slot: {item.status}</p>
                    <button className="btn" onClick={() => {
                        rentId(item)
                    }
                    }>{item.status == "unused" ? (<a>Return Bike</a>) : (<a>Rent Bike</a>)}</button>
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