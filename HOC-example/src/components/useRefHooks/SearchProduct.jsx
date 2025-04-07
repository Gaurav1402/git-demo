import React, { useRef, useState, useEffect } from 'react'
import Button from '@mui/material/Button';

function SearchProduct() {
    const [selectedProduct, setSelectedProduct] = useState("");
    const previousSelectedProduct = useRef(null);
    // previousSelectedProduct.current = selectedProduct;
    function selectProduct(pname) {
        setSelectedProduct(pname);
    }
    useEffect(() => {
        previousSelectedProduct.current = selectedProduct;
    }, [selectedProduct]);

    return (
        <div>
            <Button variant="contained" onClick={() => selectProduct("Product 1")} sx={{ margin: '10px' }}>Product 1</Button>
            <Button variant="contained" onClick={() => selectProduct("Product 2")} sx={{ margin: '10px' }}>Product 2</Button>
            <Button variant="contained" onClick={() => selectProduct("Product 3")} sx={{ margin: '10px' }}>Product 3</Button>
            <h2>Selected product : {selectedProduct}</h2>
            <h2>Previous selected product : {previousSelectedProduct.current}</h2>
        </div>
    )
}

export default SearchProduct
