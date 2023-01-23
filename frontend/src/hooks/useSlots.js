import { useContext, useEffect, useCallback, useState } from 'react'
import SlotService from '../services/Dashboard/SlotService';
import SlotsContext from '../context/SlotsContext'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

export function useSlots() {
    const { slots, setSlots } = useContext(SlotsContext);
    const navigate = useNavigate();


    return { slots, setSlots }
}