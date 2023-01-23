import React from "react";
import { useBikes } from "../../../hooks/useBikes";

import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const BikesList = () => {
    const { bikes, setBikes, deleteBike } = useBikes();
    const [selectedRows, setSelectedRows] = React.useState(false);
    const [toggledClearRows, setToggleClearRows] = React.useState(false);

    const navigate = useNavigate();

    const columns = [
        {
            name: 'Slug',
            selector: row => row.slug,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true
        },
    ];

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    const removeSelectedBikes = () => {
        console.log(selectedRows)
        if (selectedRows.length > 0) {
            deleteBike(selectedRows)
        }
        setToggleClearRows(!toggledClearRows);
        setSelectedRows([])
    };

    return (
        <div>
            <div>
                <button onClick={() => {
                    navigate('/dashboard/bikes/create')
                }}>Create</button>
                <button onClick={() => {
                    navigate('/dashboard/bikes/update/' + selectedRows[0].slug)
                }} disabled={selectedRows == 0}>Update</button>
                <button onClick={() => {
                    removeSelectedBikes()
                }}>Delete</button>
            </div>
            <DataTable
                columns={columns}
                data={bikes}
                pagination
                selectableRows
                onSelectedRowsChange={handleChange}
                clearSelectedRows={toggledClearRows}

            />
        </div>
    );
}

export default BikesList;