import React, { useState } from "react";
import { useIncidents } from "../../../hooks/useIncidents";
import('../Dashboard.scss');
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import Login from "../../Login/Login";

const IncidentsList = () => {
    const { incidents, deleteIncidents, updateIncident } = useIncidents();
    const columns = [
        {
            name: 'Slug',
            selector: row => row.slug,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'User',
            selector: row => row.user_id,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,

        },
        {
            name: 'Slot',
            selector: row => row.slot_id,
            sortable: true,

        },
        {
            name: 'Body',
            selector: row => row.body,
            sortable: true,

        },
        {
            name: 'Created',
            selector: row => row.created_at,
            sortable: true,

        },
        {
            name: 'Modified',
            selector: row => row.modified_at,
            sortable: true,

        },
    ];

    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    const updateSelectedIncidents = () => {
        if (selectedRows.length == 1) {
            updateIncident(selectedRows)
        } else {
            toast.error("Please select only 1")
        }
        setToggleCleared(!toggleCleared);
        setSelectedRows([])
    }

    const removeSelectedIncidents = () => {
        if (selectedRows.length > 0) {
            deleteIncidents(selectedRows)
        }
        setToggleCleared(!toggleCleared);
        setSelectedRows([])
    };

    return (
        <div>
            <div>

                <button className="custom-btn btn-13" onClick={() => {
                    updateSelectedIncidents()
                }} disabled={selectedRows.length === 0}><span>Update</span></button>
                <button className="custom-btn btn-5" onClick={() => {
                    removeSelectedIncidents()
                }} disabled={selectedRows.length === 0}><span>DELETE</span></button>
            </div>
            <div>
                <DataTable
                    columns={columns}
                    data={incidents}
                    pagination
                    selectableRows
                    onSelectedRowsChange={handleChange}
                    clearSelectedRows={toggleCleared}
                />
            </div>
        </div>
    )
}
export default IncidentsList
