import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    function handleUser(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const Save = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/products";
        const headerObj = { "context-type": "application/json" };
        console.log("Product", product);
        try {
            const responce = await axios.post(url, product, { headers: headerObj })
            if (responce.status === 201) {
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
                <h1> Add Product</h1>
                <form onSubmit={(e) => Save(e)}>

                    <div className="mb-3">
                        <label className="form-label" ><h5>Product Name</h5></label>
                        <input type="text" className="form-control" id="id1" name="name" onChange={(e) => handleUser(e)} placeholder='Enter Product Name' />
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><h5>Product Price</h5></label>
                        <input type="text" className="form-control" id="id2" name="price" onChange={(e) => handleUser(e)} placeholder='Enter Product Price.' />
                    </div>

                    <div className="mb-3" >
                        <label className="form-label"><h5>Product Quantity</h5></label>
                        <input type="text" className="form-control" id="id3" name="qty" onChange={(e) => handleUser(e)} placeholder='Enter Product Quantiy' />
                    </div>

                    <div className="mb-3" >
                        <label className="form-label"><h5>Product Category</h5></label>
                        <select className="form-label ms-2" id="id4" name="cat" onChange={(e) => handleUser(e)}>
                            <option value="">Select</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Furniture">Furniture</option>
                        </select>
                    </div>
                    <div className="mb-3" >
                        <label className="form-label"><h5>Product Description</h5></label>
                        <textarea type="text" className="form-control" id="id5" name="des" onChange={(e) => handleUser(e)} placeholder='Enter Product Descriptiony' />
                    </div>

                    <button type="submit" style={{ margin: "10px" }} className="btn btn-primary">Add Product</button>

                </form>
            </div>
        </>
    )
}
export default Product