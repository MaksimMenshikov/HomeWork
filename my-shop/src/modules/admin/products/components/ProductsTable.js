import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import useProducts from '../../../common/products/hook/useProducts';
import CategoryName from './CategoryName';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';


function ProductsTable() {
    const { productList, removeProduct } = useProducts();
    return (
        <TableContainer component={Paper} sx={{minWidth:600}}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productList.map(({ id, title,price,categoryId }) => (
                        <TableRow
                            key={id}
                            sx={{
                                '&:last-child td, &:last-child th': {                                                                               
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {id}
                            </TableCell>
                            <TableCell align="right">{title}</TableCell>
                            <TableCell align="right">
                                <CategoryName id={categoryId}></CategoryName>
                            </TableCell>
                            <TableCell align="right">{price}</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    color="error"
                                    onClick={() => removeProduct(id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton  component={NavLink} to={'./' + id}>
                                        <EditIcon color="error"/>
                                </IconButton>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductsTable;