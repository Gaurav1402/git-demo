import axios from "axios";
import React, { useEffect, useState } from "react";

import Product from "./Product";
import Category from "./Category";

function ECommerce() {
    const [products, setProducts] = useState([])
    const [filterData, setfilterData] = useState([])
    const [categorys, setcategorys] = useState(["electronics", "men's clothing", "jewelery", "women's clothing"])

    function fechData() {
        const url = "https://fakestoreapi.com/products";
        axios.get(url).then((response) => {
            if (response) {
                console.log(response.data);
                setProducts(response.data)
                filterProduct(response.data, "electronics")
            }
        }).catch((error) => console.log(error.message))
    }

    function filterProduct(prod, category) {
        let filData = prod.filter((el) => el.category == category);
        setfilterData(filData)
    }


    useEffect(() => {
        fechData()
    }, []);


    return (
        <><h5>Product data</h5>
            <Category category={categorys} product={products} and filter={filterProduct} />
            <Product fillprod={filterData} />

        </>
    )
}

export default ECommerce