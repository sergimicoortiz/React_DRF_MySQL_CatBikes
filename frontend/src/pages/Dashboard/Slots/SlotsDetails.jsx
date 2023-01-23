import React, { useEffect } from "react";
import { useSlots } from "../../../hooks/useSlots";
import { useNavigate, useParams } from "react-router-dom";
import '../Dashboard.scss'


const SlotsList = () => {
    const { id } = useParams();
    const { getOneSlot, oneSlot } = useSlots(id);

    useEffect(function () {
        getOneSlot(id);
    }, [])

    console.log(oneSlot, "one")

    const prueba = oneSlot.status == "used" ? 
    
    
    <button className="custom-btn btn-13 center" onClick={() => {
    }}>Alquilar bici</button> : 
    
    
    <button className="custom-btn btn-13 center" onClick={() => {
    }}>Dejar bici</button>

    return (
        <div>
            <h1> You have selected the slot: {id} </h1>
            {prueba}
        </div>
    );
}

export default SlotsList;