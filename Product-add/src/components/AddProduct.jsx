import React, { useState } from "react";

function Addproduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: "",
    total: ""
  })
  const [prd, setPrd] = useState([])
  const [formErrors, setFromErrors] = useState({})

  function validation(data) {
    let erros = {}
    if (!data.name) {
      erros.name = "Required name"
    }
    if (!data.price) {
      erros.price = "Required price"
    }
    const priceReg = /^[0-9]+$/;
    if (!priceReg.test(data.price)) {
      erros.price = "Please enter Number";
    }

    if (!data.qty) {
      erros.qty = "Required quantity"
    }
    const qtyReg = /^[0-9]+$/;
    if (!qtyReg.test(data.qty)) {
      erros.qty = "Please enter Number";
    }

    setFromErrors(erros)
    return (erros)
  }

  function Save(event) {
    event.preventDefault();
    console.log(product);
    let errorObj = validation(product)
    if (Object.keys(errorObj).length == 0) {
      setPrd((prd) => [...prd, product]);
      console.log(prd);
      setProduct({
        name: "",
        price: "",
        qty: "",
        total: ""
      });
    }
  }
  function handleUser(event) {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }
  const editProduct = (index) => {
    const productToEdit = prd[index];
    setProduct(productToEdit);
    // Remove the product from the list to avoid duplication
    setPrd((prd) => prd.filter((_, i) => i !== index));
  };
  const deleteProduct = (index) => {
    setPrd((prd) => prd.filter((_, i) => i !== index));
  };


  return (
    <>
      <div className='conatiner p-4 border badge bg-info text-dark'>

        <form onSubmit={(e) => Save(e)}>

          <div className="mb-3">
            <label className="form-label" ><h5>Product Name</h5></label>
            <input type="text" className="form-control" id="id1" name="name" value={product.name} onChange={(e) => handleUser(e)} placeholder='Enter Product Name' />
            <p>{formErrors.name}</p>
          </div>
          <div className="mb-3">
            <label className="form-label"><h5>Product Price</h5></label>
            <input type="text" className="form-control" id="id2" name="price" value={product.price} onChange={(e) => handleUser(e)} placeholder='Enter Product Price.' />
            <p>{formErrors.price}</p>
          </div>
          <div className="mb-3" >
            <label className="form-label"><h5>Product Quantiy</h5></label>
            <input type="text" className="form-control" id="id3" name="qty" value={product.qty} onChange={(e) => handleUser(e)} placeholder='Enter Product Quantiy' />
            <p>{formErrors.qty}</p></div>
          <div className="mb-3">
            <label className="form-label"><h5>Total Price</h5></label>
            <input type="text" className="form-control" id="id3" name="total" value={product.total = product.price * product.qty} onChange={(e) => handleUser(e)} />
          </div>
          <button type="submit" style={{ margin: "10px" }} className="btn btn-primary">Add</button>
        </form>

        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prd.map((el, index) => {
              el.total = el.price * el.qty
              return (<tr key={index}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.qty}</td>
                <td>{el.total}</td>
                <td><button type="button" className="btn btn-primary" onClick={() => editProduct(index)} style={{ margin: "10px" }}>Edit</button>
                  <button type="button" onClick={() => deleteProduct(index)} className="btn btn-danger">Delete</button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Addproduct;