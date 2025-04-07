import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GenericAPI from './GenericAPI'

function Tasks(props) {
  const { data, loading, error } = props;
  console.log("products array", data.products);
  console.log("Loading", loading);
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Completed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 1 } }} >
                  <TableCell >
                    {row.id}
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.completed ? "Yes" : 'No'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default GenericAPI(Tasks, "https://jsonplaceholder.typicode.com/todos");
