import { useContext, useState } from 'react';
import IncidentsContext from '../context/IncidentsContext';
import IncidentsService from '../services/IncidentsService';
import { toast } from 'react-toastify'


export function useIncidents() {
    const { incidents, setIncidents } = useContext(IncidentsContext);

    const deleteIncidents = (async (data) => {
        let save = [];
        for (let i = 0; i < data.length; i++) {
            try {
                await IncidentsService.deleteIncidents(data[i])
                save.push(data[i].slug)
                toast.success("Removed")
            } catch (error) {
                toast.error('Delete error')
            }
        }
        setIncidents(incidents.filter(item => !save.includes(item.slug)))
    })

    return { incidents, setIncidents, deleteIncidents }
}