import React, { useEffect } from "react";
import { useSlots } from "../../../hooks/useSlots";
import { useBikes } from "../../../hooks/useBikes";
import { useNavigate, useParams } from "react-router-dom";
import SlotsDropdown from "../../../components/Dashboard/Slots/SlotDropdown";
import { toast } from 'react-toastify'
import '../Dashboard.scss'


const SlotsList = () => {
    const { id } = useParams();
    const { getOneSlot, oneSlot, returnBike, saveBike, saveSlot, rentBikeBackend } = useSlots(id);
    const { bikes } = useBikes();

    useEffect(function () {
        getOneSlot(id);
    }, [])
    console.log(saveSlot.bike)
    const buttons = oneSlot.status == "used"
        ?
        <div>
            <button className="custom-btn btn-13 center" onClick={() => {
                rentBikeBackend(id)
            }}>Rent Bike</button>
        </div>

        :
        <div>
            <SlotsDropdown bikes={bikes} key={bikes.slug} saveBike={saveBike}></SlotsDropdown>
            <button className="custom-btn btn-13 center" onClick={() => {
                saveSlot.bike ? returnBike(saveSlot.bike, id) : toast.error("Select any bike pls")
            }}>Keep in Slot</button>
        </div>

    return (
        <div>
            <h1> You have selected the slot: {id} </h1>
            {buttons}
        </div>
    );
}

export default SlotsList;