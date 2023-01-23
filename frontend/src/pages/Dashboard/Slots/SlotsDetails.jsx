import React, { useEffect } from "react";
import { useSlots } from "../../../hooks/useSlots";
import { useNavigate, useParams } from "react-router-dom";

const SlotsList = () => {
    const { id } = useParams();
    // const { getOneBike } = useSlots(slug);

    // useEffect(function () {
    //     getOneBike(slug);
    // }, [])

    return (
        <div>
            <h1> You have selected the slot: {id} </h1>
        </div>
    );
}

export default SlotsList;