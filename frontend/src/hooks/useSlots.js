import { useContext, useEffect, useCallback, useState } from 'react'
import SlotService from '../services/Dashboard/SlotService';
import SlotsContext from '../context/SlotsContext'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { all } from 'axios';

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
                if (data.status == 200) {
                    let get_Old_Slots = [...slots];
                    const remove_old = get_Old_Slots.findIndex(item => item.id === Number(id));
                    let save_old = get_Old_Slots[remove_old];
                    save_old.bike_id = Number(id);
                    save_old.status = 'used';
                    if (remove_old !== -1) {
                        get_Old_Slots[remove_old] = save_old;
                        setSlots(get_Old_Slots);
                    }
                    navigate('/dashboard/slots')
                }
            })
    }

    const saveBike = (slug) => {
        if (slug) {
            setSaveSlot(slug)
        }
    }

    const rentBikeBackend = (id) => {
        SlotService.rentBikeBackend(id)
            .then(data => {
                if (data.status == 200) {
                    let get_Old_Slots = [...slots];
                    const remove_old = get_Old_Slots.findIndex(item => item.id === Number(id));
                    if (remove_old !== -1) {
                        get_Old_Slots[remove_old] = data.data;
                        setSlots(get_Old_Slots);
                    }
                    navigate('/dashboard/slots')
                }
            })
    }


    return { slots, setSlots, getOneSlot, oneSlot, setOneSlot, returnBike, saveBike, saveSlot, setSaveSlot, rentBikeBackend }
}