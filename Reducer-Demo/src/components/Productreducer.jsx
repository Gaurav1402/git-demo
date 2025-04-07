import React from 'react'
import { useReducer } from 'react'

const initial = {
    name: "Titan", price: 20000, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS79JFzgiXBrDq4Teyfn-K0v7Fr2NErucEIysQlg7vpzoncODMJGMJTjPPWkhjg2BT6CeJUWrTPSQZg0-H_2UNJ0v-wC-DKXDOy2oUSYjJs3l27MX2BK8Nk&usqp=CAE",
    desc: "For the stylish men who love to stay atop their style game, this analog watch from the Maritime collection by Titan is crafted to suit their needs. Safeguarded by a minera",
    qty: 1
}
const actions = { "incr": "incr", "decr": "decr" }

function reducer(state, action) {
    switch (action.type) {
        case actions.incr:
            { return { ...state, qty: state.qty + 1 } }
        case actions.decr:
            { return { ...state, qty: state.qty > 1 ? state.qty - 1 : 1 } }
    }
}

function Productreducer() {
    const [Prd, dispatch] = useReducer(reducer, initial)

    return (
        <div>
            <div className="container border">
                <div className="row">
                    <div className="col-md-6">
                        <div style={{ width: '18rem', margin: '1rem' }}>
                            <img className="card-img-top" src={Prd.img} style={{ width: '15rem', height: "18rem", margin: '1rem' }} alt={Prd.name} />
                            <h5 class="card-title">Name : {Prd.name}</h5>
                            <b><p class="card-text">Price : ₹{Prd.price}</p></b>
                            <p class="card-text">Description : {Prd.desc}</p>
                            <b><p class="card-text"> Quantity : {Prd.qty}</p></b>
                            <b><p class="card-text">Total : {Prd.price * Prd.qty}</p></b>
                            <button class="btn btn-primary" style={{ marginRight: "10px" }} onClick={() => dispatch({ type: actions.incr })}>Increment</button>
                            <button class="btn btn-danger" onClick={() => dispatch({ type: actions.decr })}>Decrement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productreducer
