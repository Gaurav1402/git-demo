import React, { useReducer, useState } from 'react'
const initial = {
    products: [{
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
    ],
    totalPrice: 0,
    showAdd: false
}

const actions = {
    "incr": "incr", "decr": "decr", "remove": "remove", "totalPrice": "totalPrice",
    "show": "show", "add": "add"
}

function reducer(state, action) {
    switch (action.type) {
        case actions.incr:
            return {
                ...state,
                products: state.products.map(el => {
                    if (el.id == action.payload.productId) {
                        return { ...el, qty: el.qty + 1 };
                    }
                    return el;
                })
            }

        case actions.decr:
            return {
                ...state,
                products: state.products.map(el => {
                    if (el.id == action.payload.productId) {
                        return { ...el, qty: el.qty > 1 ? el.qty - 1 : 1 }
                    }
                    return el;
                }
                )
            }

        case actions.remove:
            return {
                ...state,
                products: state.products.filter(el => el.id != action.payload.productId)

            }

        case actions.totalPrice:
            return {
                ...state,
                totalPrice: state.products.reduce((total, el) =>
                    total + (el.price * el.qty), 0)
            }
        case actions.show:
            return {
                ...state,
                showAdd: true
            }
        case actions.add:
            return {
                ...state, showAdd: false,
                products: [
                    ...state.products,
                    {
                        id: state.products.length + 1,
                        name: action.payload.name,
                        price: parseFloat(action.payload.price),
                        img: action.payload.img || "https://via.placeholder.com/100",
                        desc: "New Product",
                        qty: 1,
                        totalprice: parseFloat(action.payload.price)
                    }
                ]
            };

        default:
            return state;
    }

}


let total = 0;
function ReducerProductList() {
    const [Prd, dispatch] = useReducer(reducer, initial);
    const [pname, setName] = useState("")
    const [pprice, setPrice] = useState("")
    const [pimg, setImg] = useState("");

    function Increment(id) {
        dispatch({ type: actions.incr, payload: { productId: id } })
    }
    function Decrement(id) {
        dispatch({ type: actions.decr, payload: { productId: id } })
    }
    // function remove(id) {
    //     console.log("jfajj", id)
    //     dispatch({ type: actions.remove, payload: { productId: id } })
    // }
    function total() {
        dispatch({ type: actions.totalPrice })
    }
    function show() {
        dispatch({ type: actions.show })
    }

    function addProduct(e) {
        e.preventDefault();
        if (pname && pprice) {
            dispatch({ type: actions.add, payload: { name: pname, price: pprice, img: pimg } });
            setName("");
            setPrice("");
            setImg("");
        }
    }

    return (
        <>
            <div className='container border mb-5 mt-5'>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Prd.products.map((el) => {
                            // total += el.qty * el.price;
                            return (<tr key={el.id}>
                                <td>{el.name}</td>
                                <td><img src={el.img} height={100} width={100} /></td>
                                <td>{el.price}</td>
                                <td> <button className="btn btn-light" style={{ marginRight: "10px" }} onClick={() => { Increment(el.id) }}>+</button>
                                    {el.qty}       <button className="btn btn-light" onClick={() => { Decrement(el.id) }}><b>-</b></button>
                                </td>
                                <td>{el.totalprice = el.qty * el.price}</td>
                                <td><button className="btn-close" onClick={() => dispatch({ type: actions.remove, payload: { productId: el.id } })}></button></td>
                            </tr>)
                        })}
                        <tr>
                            <td colSpan="4"> Total</td>
                            <td colSpan="2"> {Prd.totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-success" onClick={() => { total() }}>Total</button>
                {!Prd.showAdd && <button className="btn btn-info ms-2" onClick={() => { show() }} >Add</button>}
                <div className="conatiner">
                    {Prd.showAdd && <form className="container" style={{ width: "400px", height: "400px" }} onSubmit={addProduct}>
                        <div className="mb-3">
                            <label className="form-label" >Name : </label>
                            <input type="text" className="form-control" id="id1" name="pname" value={pname} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name " />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" >Price :</label>
                            <input type="text" className="form-control" name="pprice" value={pprice} onChange={(e) => setPrice(e.target.value)} id="id2" placeholder="Enter Price" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" >Image Link :</label>
                            <input type="text" className="form-control" name="pimg" value={pimg} onChange={(e) => setImg(e.target.value)} id="id2" placeholder="Enter Price" />
                        </div>
                        <button className="btn btn-link ms-2" type="submit" >Add Product</button>
                    </form>}
                </div>
            </div>
        </>
    )
}

export default ReducerProductList
