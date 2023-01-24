import { useContext, useEffect, useCallback, useState } from 'react'
import SlotService from '../services/Dashboard/SlotService';
import SlotsContext from '../context/SlotsContext'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import BikeService from '../services/Dashboard/BikeService';

export function useSlots() {
    const { slots, setSlots } = useContext(SlotsContext);
    const [oneSlot, setOneSlot] = useState({});
    const [saveSlot, setSaveSlot] = useState({});
    const navigate = useNavigate();

    const getOneSlot = useCallback((id) => {
        SlotService.getOne(id).
            then(({ data }) => {
                setOneSlot(data)
            })
    }, []);

    const returnBike = (slug, id) => {
        SlotService.returnBikeBackend(slug, id)
            .then(data => {
                console.log(data)
            })
    }

    const saveBike = (slug) => {
        if (slug) {
            setSaveSlot(slug)
        }
    }

    const rentBikeBackend = (id) => {
        SlotService.rentBikeBackend(id)
        .then(data=>{
            console.log(data)
        })
    }


    return { slots, setSlots, getOneSlot, oneSlot, setOneSlot, returnBike, saveBike, saveSlot, setSaveSlot, rentBikeBackend }
}