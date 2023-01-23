import React from "react";
import { useSlots } from "../../../hooks/useSlots";

import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

import '../Dashboard.scss'

const SlotsList = () => {
    // Cambiar
    const { slots, setSlots } = useSlots();

    console.log(slots)

    const [selectedRows, setSelectedRows] = React.useState(false);
    const [toggledClearRows, setToggleClearRows] = React.useState(false);

    const navigate = useNavigate();

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'status',
            selector: row => row.status,
            sortable: true
        },
        {
            name: 'station_id',
            selector: row => row.station_id,
            sortable: true
        },
        {
            name: 'bike_id',
            selector: row => row.bike_id,
            sortable: true
        },
    ];

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    return (
        <div>
            <DataTable
                columns={columns}
                data={slots}
                pagination
                selectableRows
                onSelectedRowsChange={handleChange}
                clearSelectedRows={toggledClearRows}

            />
        </div>
    );
}

export default SlotsList;