import React from 'react'
import { AppContext } from '../App'

function Product() {
    const { filterData } = React.useContext(AppContext);
    console.log("Product", filterData)
    return (
        <div>
            <div className="row conatiner">
                {filterData.map((el, index) =>
                    <div key={index} className="col-4 card ms-4 mt-5" >
                        <img className="card-img-top" src={el.images} style={{ margin: '1rem' }} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{el.title}</h5>
                            <p className="card-text">₹{el.price}</p>
                            <p className="card-text">{el.description}</p>

                            <a href="#" className="btn btn-primary">Add To Cart</a>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Product
