import { useDispatch, useSelector } from 'react-redux'
import { taskFeatureKey, tasksAction } from './TaskSlice';
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom"

function Tasks() {
    const [selectedId, setSelectedId] = useState("");
    const dispatch = useDispatch();
    const dataObj = useSelector((store) => store[taskFeatureKey])
    useEffect(() => {
        dispatch({
            type: `${tasksAction.getAllTasks}`
        })
    }, [])
    const navigate = useNavigate();
    const handleDelete = (id) => {
        dispatch(tasksAction.deleteTask(id));
    };
    const handleRowUpdate = (updatedRow) => {
        dispatch(tasksAction.editTask(updatedRow));
        return updatedRow; // Make sure to return the updated row.
    };
    console.log("data", dataObj);
    const tasksWithIds = dataObj.tasksList.map((task, index) => ({
        ...task,
        id: index + 1, // Assigning sequential ID starting from 1
    }));

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 150, editable: true },
        { field: 'description', headerName: 'Description', width: 150, editable: true },
        { field: 'dueDate', headerName: 'DueDate', width: 150, editable: true },
        { field: 'priority', headerName: 'Priority', width: 150, editable: true },
        { field: 'status', headerName: 'Status', width: 150, editable: true },
        {
            field: 'actions', headerName: 'Actions', width: 150,
            renderCell: (params) => <Button color="error" onClick={() => handleDelete(params.row.id)}>Delete</Button>
        }
    ];
    if (dataObj.loading) {
        return <p>Loading tasks...</p>;
    }
    function handleSelection(ids) {
        setSelectedId(ids);
        console.log("ids", selectedId)
    }
    function editrecord() {
        if (selectedId.length == 0) {
            alert("Please select atleast one record for edit")
        }
        else if (selectedId.length > 1) {
            alert("At a time only one record for edit")
        }
        else if (selectedId.length == 1) {
            navigate(`/tasks/edittask/${selectedId[0]}`)
        }
        else {
            alert("No action")
        }

    }
    return (
        <div>
            <p> Tasks Components</p>
            <Button color="inherit"><Link to="/tasks/addtask" style={{ color: "primary" }}>Add Task</Link></Button>
            <Button color="inherit" onClick={editrecord}>Edit Task</Button>
            <Box sx={{ height: 400, width: '100%' }}>

                <DataGrid
                    rows={dataObj.tasksList}
                    columns={columns}
                    processRowUpdate={handleRowUpdate}
                    onProcessRowUpdateError={(error) => {
                        console.error("Row update error:", error);
                        alert("Failed to update the row. Please try again.");
                    }}

                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    onRowSelectionModelChange={e => handleSelection(e)}
                // disableRowSelectionOnClick
                />


            </Box>
        </div >
    )
}

export default Tasks
