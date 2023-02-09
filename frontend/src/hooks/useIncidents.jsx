import { useContext, useState } from 'react';
import IncidentsContext from '../context/IncidentsContext';
import IncidentsService from '../services/IncidentsService';
import { toast } from 'react-toastify'


export function useIncidents() {
    const { incidents, setIncidents } = useContext(IncidentsContext);

    const updateIncident = (data) => {
        if (data[0].status == "resolved") {
            toast.error("Can't update a resolved incident")
        } else {
            IncidentsService.updateIncident(data)
                .then((dataThen) => {
                    if (dataThen.status === 200) {
                        let get_Old_Incidents = [...incidents];
                        const remove_old = get_Old_Incidents.findIndex(item => item.slug === data[0].slug);
                        console.log(dataThen.data)
                        if (remove_old !== -1) {
                            get_Old_Incidents[remove_old] = dataThen.data;
                            setIncidents(get_Old_Incidents);
                        }
                    }
                })
                .catch(e => {
                    console.error(e);
                });
        }
    }

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

    return { incidents, setIncidents, deleteIncidents, updateIncident }
}