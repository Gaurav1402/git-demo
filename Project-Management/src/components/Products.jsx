import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    function fetchData() {
        const url = "http://localhost:3000/products";
        axios.get(url).then((responce) => {
            console.log("products", responce.data)
            setProducts(responce.data);
        }).catch((error => console.log(error.message)));
    }
    useEffect(() => {
        fetchData();
    }, [products])

    function EditProduct(id) {
        navigate(`/products/editproduct/${id}`);
    }
    const DeleteProduct = async (id) => {
        const url = `http://localhost:3000/products/${id}`;
        const headerObj = { "context-type": "application/json" };
        try {
            const responce = await axios.delete(url, { headers: headerObj })
            if (responce.status === 200) {
                console.log("responce", responce);
                alert("Product deleted successfully");
            }
        }
        catch (error) {
            console.error("Error while saving product:", error);
            alert("Failed to add product. Please try again.");
        }
    }

    return (
        <>
            <h1> Products Components</h1>
            <button type="button" className="btn btn-info ms-2 mt-2" onClick={() => { navigate('product') }}>Add Product</button>
            <table className="table table-bordered ms-2 mt-2" style={{ width: "60%" }}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((el, index) =>
                        <tr key={el.id}>
                            <td>{index + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.price}</td>
                            <td>{el.qty}</td>
                            <td>{el.des}</td>
                            <td>{el.cat}</td>
                            <td>
                                <button type="button" class="btn btn-secondary ms-2" onClick={() => EditProduct(el.id)}>Edit</button>
                                <button type="button" class="btn btn-danger ms-2" onClick={() => DeleteProduct(el.id)} >Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
export default Products