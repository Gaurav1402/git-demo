import React from 'react'
import { AppContext } from '../App'

function Category() {
    const { prData, category, filterProduct } = React.useContext(AppContext);
    return (
        <div>
            <div className="conatiner">
                {category.map((el, index) =>
                    <a key={index} href="#" className="btn " onClick={() => filterProduct(prData, el)}>{el}</a>
                )}
            </div>
        </div>
    )
}

export default Category
