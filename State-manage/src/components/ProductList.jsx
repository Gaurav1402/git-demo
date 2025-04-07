import React, { useState } from "react";
function ProductList() {
  const products = [{
    id: 1, name: "Titan", price: 2000, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS79JFzgiXBrDq4Teyfn-K0v7Fr2NErucEIysQlg7vpzoncODMJGMJTjPPWkhjg2BT6CeJUWrTPSQZg0-H_2UNJ0v-wC-DKXDOy2oUSYjJs3l27MX2BK8Nk&usqp=CAE",
    desc: "For the stylish men who love to stay atop their style game, this analog watch from the Maritime collection by Titan is crafted to suit their needs. Safeguarded by a minera",
    qty: 1,
    totalprice: 2000
  }, {
    id: 2, name: "BVLGARI", price: 6100, img: "https://img.tatacliq.com/images/i21//658Wx734H/MP000000024623528_658Wx734H_202412211909181.jpeg",
    desc: "For the stylish men who love to stay atop their style game, this analog watch from the Maritime collection by Titan is crafted to suit their needs. Safeguarded by a minera",
    qty: 1,
    totalprice: 6100
  }, {
    id: 3, name: "Serpenti Viper Ring", price: 8800, img: "https://img.tatacliq.com/images/i21//658Wx734H/MP000000024148433_658Wx734H_202412202218421.jpeg",
    desc: "For the stylish men who love to stay atop their style game, this analog watch from the Maritime collection by Titan is crafted to suit their needs. Safeguarded by a minera",
    qty: 1,
    totalprice: 8800
  },
  {
    id: 4, name: "GRIP Hand Grip/Fitness Grip ", price: 213, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/fitness-grip/p/9/c/r-shape-adjustable-hand-grip-counter-oddish-original-imahyz54mhgdgdyd.jpeg?q=70",
    desc: "For the stylish men who love to stay atop their style game, this analog watch from the Maritime collection by Titan is crafted to suit their needs. Safeguarded by a minera",
    qty: 1,
    totalprice: 213
  }
  ]
  let total = 0;
  const [Prd, setPrd] = useState(products);
  const updateQty = (id, newQty) => {
    setPrd(prevPrd =>
      prevPrd.map(el =>
        el.id === id ? { ...el, qty: newQty } : el
      )
    );
  };

  return (
    <>

      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>

          {Prd.map((el) => {
            total += el.qty * el.price;
            return (<tr key={el.id}>
              <td>{el.name}</td>
              <td><img src={el.img} height={100} width={100} /></td>
              <td>{el.price}</td>
              <td> <button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={() => updateQty(el.id, el.qty + 1)}>Increment</button>
                {el.qty}       <button className="btn btn-primary" onClick={() => updateQty(el.id, (el.qty == 1) ? el.qty = 1 : el.qty - 1)}>Decrement</button>
              </td>
              <td>{el.totalprice = el.qty * el.price}</td>
            </tr>)
          })}
          <tr>
            <td colSpan="4"> Total</td>
            <td> {total}</td>
          </tr>
        </tbody>
      </table>

    </>
  )
}
export default ProductList