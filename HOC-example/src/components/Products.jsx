import React from 'react'
import GenericAPI from './GenericAPI'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Products(probs) {
  const { data, loading, error } = probs;
  console.log("products array", data.products);
  console.log("Loading", loading);
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.products?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default GenericAPI(Products, "https://dummyjson.com/products");
