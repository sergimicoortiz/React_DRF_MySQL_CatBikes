import React from "react";
import { useBikes } from "../../../hooks/useBikes";

import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

import '../Dashboard.scss'

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
        if (selectedRows.length > 0) {
            deleteBike(selectedRows)
        }
        setToggleClearRows(!toggledClearRows);
        setSelectedRows([])
    };

    return (
        <div>
            <div>
                <button className="custom-btn btn-3" onClick={() => {
                    navigate('/dashboard/bikes/create')
                }}><span>CREATE</span></button>
                <button className="custom-btn btn-13" onClick={() => {
                    navigate('/dashboard/bikes/update/' + selectedRows[0].slug)
                }} disabled={selectedRows.length !== 1}><span>UPDATE</span></button>
                <button className="custom-btn btn-5" onClick={() => {
                    removeSelectedBikes()
                }} disabled={selectedRows.length === 0}><span>DELETE</span></button>
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