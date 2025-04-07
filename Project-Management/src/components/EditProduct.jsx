import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
    const { id } = useParams();
    console.log("fgdgfmgf", id)

    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    function handleUser(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    function fetchData() {
        const url = `http://localhost:3000/products/${id}`;
        axios.get(url).then((responce) => {
            console.log("products", responce.data)
            setProduct(responce.data);
        }).catch((error => console.log(error.message)));
    }
    useEffect(() => {
        fetchData();
    }, [])
    const Save = async (event) => {
        event.preventDefault();
        const url = `http://localhost:3000/products/${id}`;
        const headerObj = { "context-type": "application/json" };
        console.log("Product", product);
        try {
            const responce = await axios.put(url, product, { headers: headerObj })
            if (responce.status === 200) {
                console.log("responce", responce);
                alert("Product added successfully");
                navigate(-1);
            }
        }
        catch (error) {
            console.error("Error while saving product:", error);
            alert("Failed to add product. Please try again.");
        }
    }

    return (
        <>
            <div className="container border mt-2" style={{ width: "50%" }}>
                <h1> Edit Product</h1>
                <form onSubmit={(e) => Save(e)}>
                    {/* <form > */}

                    <div className="mb-3">
                        <label className="form-label" ><h5>Product Name</h5></label>
                        <input type="text" className="form-control" id="id1" name="name" value={product.name} onChange={(e) => handleUser(e)} placeholder='Enter Product Name' />
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><h5>Product Price</h5></label>
                        <input type="text" className="form-control" id="id2" name="price" value={product.price} onChange={(e) => handleUser(e)} placeholder='Enter Product Price.' />
                    </div>

                    <div className="mb-3" >
                        <label className="form-label"><h5>Product Quantity</h5></label>
                        <input type="text" className="form-control" id="id3" name="qty" value={product.qty} onChange={(e) => handleUser(e)} placeholder='Enter Product Quantiy' />
                    </div>

                    <div className="mb-3" >
                        <label className="form-label"><h5>Product Category</h5></label>
                        <select className="form-label ms-2" id="id4" name="cat" value={product.cat} onChange={(e) => handleUser(e)}>
                            <option value="">Select</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Furniture">Furniture</option>
                        </select>
                    </div>
                    <div className="mb-3" >
                        <label className="form-label"><h5>Product Description</h5></label>
                        <textarea type="text" className="form-control" id="id5" name="des" value={product.des} onChange={(e) => handleUser(e)} placeholder='Enter Product Descriptiony' />
                    </div>

                    <button type="submit" style={{ margin: "10px" }} className="btn btn-primary">Add Product</button>

                </form>
            </div>
        </>
    )
}
export default EditProduct