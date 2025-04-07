import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Box } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { taskFeatureKey, tasksAction } from "./TaskSlice";
import { useEffect } from "react";
function AddTask() {
    const nevigate = useNavigate();
    // const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        status: "",
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleDateChange = (e) => {
        setTask((prevTask) => ({ ...prevTask, dueDate: e.target.value }));
    };

    function saveTask(e) {
        e.preventDefault();
        console.log("Task", task)
        dispatch(tasksAction.saveTask(task))
        nevigate(-1)
    }
    // const storeData = useSelector((state) => state[taskFeatureKey]);
    // const { success } = storeData;
    // useEffect(() => {
    //     if (success) {
    //         nevigate("/tasks")
    //     }
    // }, [success]);

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card sx={{ minWidth: 400, padding: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                        Add Task
                    </Typography>
                    <form onSubmit={saveTask}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Title" name="title" value={task.title} onChange={handleChange} />
                            <TextField label="Description" name="description" value={task.description} onChange={handleChange} />
                            <TextField type="date" label="Due Date" name="dueDate" value={task.dueDate} onChange={handleDateChange} />
                            <FormControl >
                                <InputLabel>Priority</InputLabel>
                                <Select name="priority" value={task.priority} onChange={handleChange}>
                                    <MenuItem value="Low">Low</MenuItem>
                                    <MenuItem value="Medium">Medium</MenuItem>
                                    <MenuItem value="High">High</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl >
                                <InputLabel>Status</InputLabel>
                                <Select name="status" value={task.status} onChange={handleChange}>
                                    <MenuItem value="Pending">Pending</MenuItem>
                                    <MenuItem value="InProgress">InProgress</MenuItem>
                                    <MenuItem value="Completed">Completed</MenuItem>
                                </Select>
                            </FormControl>
                            <Button type="submit" variant="contained">
                                Add Task
                            </Button>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
}

export default AddTask;