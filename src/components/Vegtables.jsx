import React from 'react'
import { AppContext } from '../App'


function Vegtables() {
    const { prData, type } = React.useContext(AppContext);
    console.log("type", type)
    return (
        <div className='row container'>
            <p> Changes in git

            </p>
            <p> Vegtables components</p>
            {prData && prData.map((item) => (
                <div key={item.id} className="card ms-2 mt-2" style={{ width: "18rem" }}>
                    <img src={item.images} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">₹{item.price}</p>
                        <p className="card-text">Avalaible : {item.stock}</p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Vegtables
