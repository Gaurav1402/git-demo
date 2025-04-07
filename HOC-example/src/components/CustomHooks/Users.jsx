import React from 'react'
import useFetch from './UseFetch'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function Users() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
    console.log("Data", data);
    console.log("error", error);


    return (
        <div>
            {error && alert("Unable to fetch data from server")}
            {loading && <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>}
            <TableContainer component={Paper} sx={{ border: 1 }}>
                <Table sx={{ minWidth: 650, margin: '20px' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>UserName</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}  >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell >{row.name}</TableCell>
                                <TableCell >{row.name}</TableCell>
                                <TableCell >{row.email}</TableCell>
                                <TableCell >{row.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Users
