import React from 'react'
import './Cart.css'
function Cart(props) {
    const { userId, id, title, body } = props.cartData;
    // console.log("Userdat", cartData)
    return (
        <>
            <div className="cart cart-shadow">
                <p>
                    <span>Id : </span>{id}
                </p>
                <p>
                    <span>Title : </span>{title}
                </p>
                <p>
                    <span>Body : </span>{body}</p>
            </div>
        </>
    )
}
export default Cart
