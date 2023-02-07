import React, { useState } from "react";
import { useRent } from "../../../hooks/useRent";
import('../Dashboard.scss');
import DataTable from 'react-data-table-component';

const RentList = () => {
    const { rents } = useRent();
    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'user_id',
            selector: row => row.user_id,
            sortable: true,
        },
        {
            name: 'bike_id',
            selector: row => row.bike_id,
            sortable: true,
        },
        {
            name: 'start_slot_id',
            selector: row => row.start_slot_id,
            sortable: true,

        },
        {
            name: 'end_slot_id',
            selector: row => row.end_slot_id,
            sortable: true,

        },
        {
            name: 'start_date',
            selector: row => row.start_date,
            sortable: true,

        },
        {
            name: 'end_date',
            selector: row => row.end_date,
            sortable: true,

        },
    ];

    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    const deleteStations = () => {
        console.log(selectedRows.map(row => row.id));
        // useDeleteStationMultiple(selectedRows.map(row => row.slug));
        // setToggleCleared(!toggleCleared);
        // setSelectedRows([]);
    }

    return (
        <div>
            <h1>Stations List</h1>
            <button className="custom-btn btn-5" onClick={() => deleteStations()} disabled={selectedRows.length === 0}><span>DELETE</span></button>
            <DataTable
                columns={columns}
                data={rents}
                pagination
                selectableRows
                onSelectedRowsChange={handleChange}
                clearSelectedRows={toggleCleared}
            />
        </div>
    )
}
export default RentList
