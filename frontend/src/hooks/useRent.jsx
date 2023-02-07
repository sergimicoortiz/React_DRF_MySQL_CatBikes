import { useState } from "react";
import RentService from "../services/RentService";
import { useSlots } from "./useSlots";
import { useBikes } from "./useBikes";

export function useRent() {
    const [rent, setRent] = useState();
    const { slots, setSlots } = useSlots();

    const rentBike = (data) => {
        RentService.rentBike(data)
            .then((dataThen) => {
                if (dataThen.status == 200) {
                    let get_Old_Slots = [...slots];
                    const remove_old = get_Old_Slots.findIndex(item => item.id === Number(data.id));
                    let save_old_slot = get_Old_Slots[remove_old];
                    save_old_slot.status = 'unused';
                    if (remove_old !== -1) {
                        get_Old_Slots[remove_old] = save_old_slot;
                        setSlots(get_Old_Slots);
                    }
                }
            })
    }

    return { rent, setRent, rentBike }
}   